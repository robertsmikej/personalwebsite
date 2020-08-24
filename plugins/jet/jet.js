/*jslint devel: true, nomen: true, sloppy: true, browser: true, regexp: true*/
(function (window) {
    var JetElem = function (selector) {
        this.selector = selector || null; //The selector being targeted
        this.element = null; //The actual DOM element
        this.attribute = null;
        this.queue = [];
        this.speeds = [];
        this.secondary = [];
        this.tertiary = [];
        this.indexNum = -1;
        this.indexInput = null;
        this.visible = null;
    };
    
    var placeHold = function () {
        return;
    };
    
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    function arrs(th, speed, secondary, tertiary) {
        typeof speed !== "undefined" ? th.speeds.push(speed) : th.speeds.push(500);
        typeof secondary !== "undefined" ? th.secondary.push(secondary) : th.secondary.push(null);
        typeof tertiary !== "undefined" ? th.tertiary.push(tertiary) : th.tertiary.push(null);
    }
    
    function checkForIndex(obj) {
        var elems = document.querySelectorAll(obj.selector),
            elemsArr = [];
        if (obj.indexInput > -1 && obj.indexInput !== null) {
            elemsArr.push(elems[obj.indexInput]);
            return elemsArr;
        } else {
            return elems;
        }
    }
    
    //EVENT HANDLERS
    JetElem.prototype.eventHandler = {
        events: [], //Array of events the element is subscribed to.
        bindEvent: function (event, callback, targetElement) {
            this.unbindEvent(event, targetElement); //remove any duplicate event.
            targetElement.addEventListener(event, callback, false); //bind event listener to DOM element
            this.events.push({
                type: event,
                event: callback,
                target: targetElement
            }); //push the new event into our events array.
        },
        findEvent: function (event) {
            return this.events.filter(function (evt) {
                return (evt.type === event); //if event type is a match return
            }, event)[0];
        },
        unbindEvent: function (event, targetElement) {
            var foundEvent = this.findEvent(event); //search events
            if (foundEvent !== undefined) { //remove event listener if found
                targetElement.removeEventListener(event, foundEvent.event, false);
            }
            this.events = this.events.filter(function (evt) { //update the events array
                return (evt.type !== event);
            }, event);
        }
    };
    
    JetElem.prototype.on = function (event, callback) {
        var t = this,
            i;
        if (t.element.length) {
            for (i = 0; i < t.element.length; i += 1) {
                t.eventHandler.bindEvent(event, callback, t.element[i]);
            }
        } else {
            t.eventHandler.bindEvent(event, callback, document);
        }
    };
    
    JetElem.prototype.off = function (event) {
        var t = this,
            i;
        for (i = 0; i < t.element.length; i += 1) {
            t.eventHandler.unbindEvent(event, t.element[i]);
        }
    };
    //END EVENT HANDLERS
    JetElem.prototype.attr = function (attribute, value) {
        arrs(this, 0, attribute, value);
        var th = checkForIndex(this),
            that = this,
            attr = function (speed, attribute, value) {
                var i;
                for (i = 0; i < th.length; i += 1) {
                    var elem = th[i];
                    if (value === null) {
                        that.attribute = elem.getAttribute(attribute);
                    } else {
                        elem.setAttribute(attribute, value);
                    }
                }
            };
        this.queue.push(attr);
        return this;
    };
    JetElem.prototype.append = function (html) {
        arrs(this, 0, html, null);
        var th = checkForIndex(this),
            append = function () {
                var i;
                for (i = 0; i < th.length; i += 1) {
                    th[i].innerHTML = th[i].innerHTML + html;
                }
            };
        this.queue.push(append);
        return this;
    };
    JetElem.prototype.delay = function (delay) {
        var delay = delay || 500;
        arrs(this, delay, null, null);
        this.queue.push(placeHold);
        return this;
    };
    JetElem.prototype.empty = function () {
         var i,
            elems = document.querySelectorAll(this.selector);
        for (i = 0; i < elems.length; i += 1) { 
            elems[i].innerHTML = "";
        }
//        arrs(this, null, this.selector, null);
//        var th = checkForIndex(this),
//            empty = function (speed, el) {
//                var i,
//                    elems = document.querySelectorAll(el);
//                for (i = 0; i < elems.length; i += 1) { 
//                    console.log('running');
//                    elems[i].innerHTML = "";
//                }
//            }
//        this.queue.push(empty);
        return this;
    };
    JetElem.prototype.fadeOut = function (speed) {
        arrs(this, speed, null, null);
        var th = checkForIndex(this),
            fadeOut = function (speed, el) {
                var speed = (1000 / speed) * 16.7 || 15,
                    i;
                for (i = 0; i < th.length; i += 1) {
                    th[i].style.opacity = 1;
                }
                for (i = 0; i < th.length; i += 1) {
                    (function () {
                        var fpsInterval = 1000 / speed,
                            elem = th[i],
                            then = Date.now(),
                            ani;
                        function animate() {
                            ani = requestAnimationFrame(animate);
                            var now = Date.now(),
                                elapsedTime = now - then;
                            if (elapsedTime > fpsInterval) {
                                if ((elem.style.opacity -= 0.1) <= 0) {
                                    elem.style.display = "none";
                                    elem.style.opacity = 0;
                                    cancelAnimationFrame(ani);
                                } else {
                                    then = now - (elapsedTime % fpsInterval);
                                }
                            }
                        }
                        ani = requestAnimationFrame(animate);
                    }());
                }
            };
        this.queue.push(fadeOut);
        return this;
    };
    JetElem.prototype.fadeIn = function (speed, display) {
        var disp = display || "flex";
        arrs(this, speed, disp, null);
        var th = checkForIndex(this),
            fadeIn = function (speed, display) {
                var speed = (1000 / speed) * 16.7 || 15,
                    i;
                for (i = 0; i < th.length; i += 1) {
                    th[i].style.opacity = 0;
                    th[i].style.display = disp;
                }
                for (i = 0; i < th.length; i += 1) {
                    (function () {
                        th[i].style.display = display;
                        var fpsInterval = 1000 / speed,
                            elem = th[i],
                            then = Date.now(),
                            ani;
                        function animate() {
                            ani = requestAnimationFrame(animate);
                            var now = Date.now(),
                                elapsedTime = now - then;
                            if (elapsedTime > fpsInterval) {
                                var op = (parseFloat(elem.style.opacity));
                                if (op >= 1) {
                                    cancelAnimationFrame(ani);
                                } else {
                                    elem.style.opacity = op + 0.1;
                                    then = now - (elapsedTime % fpsInterval);
                                }
                            }
                        }
                        ani = requestAnimationFrame(animate);
                    }());
                }
            };
        this.queue.push(fadeIn);
        return this;
    };
    JetElem.prototype.fadeTo = function (speed, opacity) {
        var opac = opacity || 1;
        arrs(this, speed, opac, null);
        var th = checkForIndex(this),
            fadeTo = function (speed, opacity) {
                var speed = (1000 / speed) * 16.7 || 15,
                    i;
                for (i = 0; i < th.length; i += 1) {
                    (function () {
                        var fpsInterval = 1000 / speed,
                            elem = th[i],
                            then = Date.now(),
                            ani;
                        function animate() {
                            ani = requestAnimationFrame(animate);
                            var now = Date.now(),
                                elapsedTime = now - then;
                            if (elapsedTime > fpsInterval) {
                                var currOpac = window.getComputedStyle(elem).getPropertyValue("opacity");
                                if (currOpac >= opacity) {
                                    elem.style.display = "block";
                                    if (currOpac <= opacity) {
                                        cancelAnimationFrame(ani);
                                    } else {
                                        elem.style.opacity = currOpac - 0.1;
                                        then = now - (elapsedTime % fpsInterval);
                                    }
                                } else if (currOpac <= opacity) {
                                    if (currOpac >= opacity) {
                                        cancelAnimationFrame(ani);
                                    } else {
                                        elem.style.opacity = parseFloat(currOpac) + 0.1;
                                        then = now - (elapsedTime % fpsInterval);
                                    }
                                }
                            }
                        }
                        ani = requestAnimationFrame(animate);
                    }());
                }
            };
        this.queue.push(fadeTo);
        return this;
    };
    JetElem.prototype.find = function (el) {
        var sel = this.selector;
        arrs(this, 0, el, sel);
        this.selector = this.selector + " " + el;
        this.queue.push(placeHold);
        return this;
    };
    JetElem.prototype.get = function (url, callback, type) {
        var type = type || "json",
            request = new XMLHttpRequest();
        this.getting = true;
        request.open('Get', url);
        if (type === "json") {
            request.setRequestHeader('Content-Type', 'application/json');
        } else if (type === "html") {
            request.responseType = "document";
        } else {
            request.setRequestHeader('Content-Type', 'text/xml');
        }
        request.onreadystatechange = function() {
            if(request.readyState === 4) {
                if (typeof callback === "function") {
                    callback(request);
                }
            }
        };
        request.send(null);
        return this;
    };
    JetElem.prototype.hasClass = function (classs) {
        if (classs.constructor === Array) {
            var i;
            var elemClasses = this.element[0].classList;
            for (i = 0; i < classs.length; i += 1) { 
                if (elemClasses.contains(classs[i])) {
                    return true;
                }
            }
        } else {
            var elemClass = this.element[0].classList;
            if (elemClass.contains(classs)) {
                return true;
            }
        }
        return false;
    };
    JetElem.prototype.hide = function () {
        arrs(this, 0, null, null);
        var th = checkForIndex(this),
            hide = function () {
                var i;
                for (i = 0; i < th.length; i += 1) {
                    th[i].style.display = "none";
                }
            };
        this.queue.push(hide);
        return this;
    };
    JetElem.prototype.html = function (html) {
        var th = checkForIndex(this);
        arrs(this, 0, html, this.selector);
        var htm = function (speed, html, th) {
                var i;
                var elems = document.querySelectorAll(th);
                for (i = 0; i < elems.length; i += 1) {
                    elems[i].innerHTML = html;
                }
            };
        this.queue.push(htm);
        return this;
    };
    JetElem.prototype.index = function (input) {
        var targ = this.element[0],
            sel = this.selector.split('.')[1],
            that = this;
        if (input === true) {
            var th = checkForIndex(this),
                all = document.getElementsByClassName(sel);
            Array.from(th).forEach(function (elem, index) {
                if (targ === elem) {
                    that.indexNum = index;
                }
            });
        } if (typeof input === 'undefined') { //IF NO USER INPUT INDEX NUMBER
            arrs(this, 0, targ, sel);
            var children = targ.parentElement.children,
                num = 0,
                i;
            for (i = 0; i < children.length; i += 1) {
                if (children[i] === targ) {
                    that.indexNum = num;
                } else {
                    if (children[i].nodeType === 1) {
                        num++;
                    }
                }
            }
            this.queue.push(placeHold);
        } else { //IF USER HAS INPUTTED AN INDEX NUMBER
            arrs(this, 0, null, null);
            this.indexInput = input;
            this.queue.push(placeHold);
        }
        return this;
    };
    JetElem.prototype.isVisible = function (ind) {
        var th = checkForIndex(this),
            that = this,
            ind = ind || 0;
        arrs(this, 0, th, null);
        (function () {
            var r = th[ind].getBoundingClientRect(),
                viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            if (!(r.bottom < 0 || r.top - viewHeight >= 0)) {
                that.visible = true;
            } else {
                that.visible = false;
            }
        }());
        this.queue.push(placeHold);
        return this;
    };
    JetElem.prototype.prepend = function (html) {
        arrs(this, 0, html, null);
        var th = checkForIndex(this),
            prepend = function () {
                var i;
                for (i = 0; i < th.length; i += 1) {
                    th[i].innerHTML = html + th[i].innerHTML;
                }
            };
        this.queue.push(prepend);
        return this;
    };
    JetElem.prototype.remove = function () {
        var i,
            el = document.querySelectorAll(this.selector);
        for (i = 0; i < el.length; i += 1) {
            el[i].parentElement.removeChild(el[i]);
        }
    };
    JetElem.prototype.scrollTo = function (speed, offset) {
        var offset = offset || 0,
            elem = this.element[0];

        arrs(this, speed, offset, null);
        var scroller = function (speed, offset) {
            var offset = offset || 0;
            (function () {
                var start = window.pageYOffset,
                    startTime = new Date().getTime(),
                    documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
                    windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight,
                    destinationOffset =  elem.offsetTop,
                    destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset),
                    ani;
                function animate() {
                    var now = new Date().getTime(),
                        time = Math.min(1, ((now - startTime) / speed)),
                        scrollAmt = Math.ceil((easeInOutQuad(time) * (destinationOffsetToScroll - start)) + start + offset);
                    ani = requestAnimationFrame(animate);
                    window.scroll(0, scrollAmt);
                    if (window.pageYOffset + offset === destinationOffset || window.pageYOffset + offset === destinationOffset - elem.scrollHeight) {
                        cancelAnimationFrame(ani);
                    }
                    setTimeout(function () {
                        cancelAnimationFrame(ani);
                    }, speed + 40);
                }
                ani = requestAnimationFrame(animate);
            }());
        };
        this.queue.push(scroller);
        return this;
    };
    var methods = {
        slideUp: function(first, second, third, obj) {
            var speeds = first * 0.001 || 0.500,
                trans = speeds + "s",
                i;
            for (i = 0; i < third.length; i += 1) {
                (function () {
                    var elem = third[i];
                    var initialHeight = elem.offsetHeight + "px";
                    elem.setAttribute('data-initial-height', initialHeight);
                    elem.style.webkitTransition = 'initial';
                    elem.style.transition = 'initial';
                    elem.style.maxHeight = initialHeight;
                    elem.style.webkitTransition = "max-height " + trans;
                    elem.style.transition = "max-height " + trans;
                    setTimeout(function () {
                        elem.style.maxHeight = '0';
                    });
                }());
            }
        }
    }
    JetElem.prototype.slideUp = function () {
        arrs(this, 0, this.element[0], checkForIndex(this));
        this.queue.push(methods.slideUp);
        return this;
        
    };    
    JetElem.prototype.slideDown = function (speed, display) {
        var disp = display || "flex";
        arrs(this, speed, disp, null);
        var th = checkForIndex(this),
            slideDown = function (speed, display) {
                var speeds = speed * 0.001 || 0.500,
                    trans = speeds + "s",
                    i;
                for (i = 0; i < th.length; i += 1) {
                    (function () {
                        var elem = th[i];
                        elem.style.webkitTransition = "max-height " + trans;
                        elem.style.transition = "max-height " + trans;
                        setTimeout(function () {
                            elem.style.display = display;
                            if (elem.hasAttribute('data-initial-height')) {
                                elem.style.maxHeight = elem.getAttribute('data-initial-height');
                            } else {
                                elem.style.maxHeight = "1000px";
                            }
                        });
                    }());
                }
            };
        this.queue.push(slideDown);
        return this;
    };
    JetElem.prototype.show = function (display) {
        var disp = display || "flex";
        arrs(this, 0, disp, null);
        var th = checkForIndex(this),
            show = function () {
                var i;
                for (i = 0; i < th.length; i += 1) {
                    th[i].style.display = "block";
                }
            };
        this.queue.push(show);
        return this;
    };
    JetElem.prototype.text = function (text) {
        arrs(this, 0, text, null);
        var th = checkForIndex(this);
        var txt = function (speed, txt, tertiary) {
                var i;
                for (i = 0; i < th.length; i += 1) {
                    th[i].textContent = text;
                }
            };
        this.queue.push(txt);
        return this;
    };
    JetElem.prototype.val = function (newVal) {
        arrs(this, 0, newVal, null);
        var th = checkForIndex(this),
            val = function (speed, val) {
                var i;
                for (i = 0; i < th.length; i += 1) {
                    return (newVal !== undefined ? th[i].value = val : th[i].value);
                }
            };
        this.queue.push(val);
        return this;
    };
    JetElem.prototype.end = function () {
        var delay = function delay(ms) {
            return new Promise(function (resolve) {
                if (ms !== null) {
                    return setTimeout(resolve, ms);
                } else {
                    return resolve;
                }
            });
        },
            speeds = this.speeds,
            second = this.secondary,
            third = this.tertiary,
            th = this;
        this.queue.reduce(function (promise, functionName, index) {
            var thar = th;
            return promise.then(function () {
                var firstParameter = speeds[index],
                    secondParameter = second[index],
                    thirdParameter = third[index];
                return Promise.all([delay(firstParameter), functionName(firstParameter, secondParameter, thirdParameter, thar)]);
            });
        }, Promise.resolve());
        if (this.indexNum >= 0) {
            return this.indexNum;
        }
        if (typeof this.visible === 'boolean') {
            return this.visible;
        }
        if (this.attribute !== null) {
            return this.attribute;
        }
        return this;
    };
    JetElem.prototype.init = function () { //INITIALIZATION
        if (this.selector !== null) {
            switch (this.selector[0]) {
            case undefined:
                this.element = [this.selector];
                this.selector = this.selector.id.length > 0 ? this.selector.id : "." + this.selector.classList[0];
                break;
            case '<': //create element
                var matches = this.selector.match(/<([\w-]*)>/);
                if (matches === null || matches === undefined) {
                    throw 'Invalid Selector / Node';
                }
                var nodeName = matches[0].replace('<', '').replace('>', '');
                this.element = document.createElement(nodeName);
                break;
            default:
                this.element = Array.prototype.slice.call(document.querySelectorAll(this.selector));
            }
        } else {
            this.element = document;
        }
    };
    j = function (selector) {
        var el = new JetElem(selector); // new JetElem
        el.init(); // initialize the JetElem
        return el; //return the JetElem
    };
    return JetElem;
}(window));