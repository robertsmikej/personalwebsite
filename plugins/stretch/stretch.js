(function () {
    function checkVisible(el) {
        var rect = el.getBoundingClientRect(),
            viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }
    function throttle(fn, wait) {
        var time = Date.now();
        return function () {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        };
    }
    function stretchIt() {
        var opt = this.options,
            elem = document.querySelectorAll(opt.elements),
            i,
            stretchHandle = function () {
                for (i = 0; i < elem.length; i += 1) {
                    if (checkVisible(elem[i]) === true) {
                        elem[i].classList.add('stretch__initial');
                        elem[i].removeEventListener('scroll', stretchHandle);
                    }
                }
            };
        window.addEventListener('scroll', throttle(stretchHandle, 400));
    }
    this.Stretch = function () {
        var defaults = { //Default Options
            elements: ".stretch__me"
        };
        function extendDefaults(source, properties) {
            var property;
            for (property in properties) {
                if (properties.hasOwnProperty(property)) {
                    source[property] = properties[property];
                }
            }
            return source;
        }
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }
        stretchIt.call(this);
    };
}());