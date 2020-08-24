(function () { //PLUG IN THAT CONTROLS THE SCROLLING ANIMATIONS ON PAGE, LIKE TIMELINE YEAR BALL THAT FOLLOWS PAGE, AND BACKGROUND AT TOP THAT CHANGES SIZE WITH SCROLL
    var yearArray;
//    function percentageOfWayDownContainer(el, cont) {
//        var elem = el.getBoundingClientRect(),
//            viewHeight = document.documentElement.clientHeight,
//            container = cont.getBoundingClientRect();
//        return (1000 - (elem.top) - elem.height / viewHeight) * 0.1;
//    }
    function pixelsUntilBottomOfContainer(el) {
        var rect = el.getBoundingClientRect(),
            viewHeight = document.documentElement.clientHeight;
        return (rect.top / rect.height) * -100;
    }
    function checkWhichContainerElementIsIn(elem, cells) {
        var elemTop = elem.offsetTop,
            topArr = [],
            i;
        for (i = 0; i < cells.length; i += 1) {
            if (typeof cells[i + 1] === 'undefined') {
                return cells.length - 1;
            } else {
                if (elemTop >= cells[i].offsetTop && elemTop <= cells[i + 1].offsetTop) {
                    return i;
                }
            }
        }
    }
    function followPath() {
        var opt = this.options,
            elem = document.querySelector(opt.element),
            yearcells = document.querySelectorAll('.res__timeline__year__cell'),
            container = document.querySelector(opt.container),
            i,
            yearArray = [],
            years = document.querySelectorAll(opt.yearCells);
        for (i = 0; i < years.length; i += 1) {
            yearArray.push(years[i].getAttribute('data-year'));
        }
        var follow = function () {
            if (pageFunctions.utilities.checkVisible(container) === false) {
                elem.style.opacity = "0";
            } else {
                var indexnum = checkWhichContainerElementIsIn(elem, yearcells);
                elem.style.opacity = 1;
                elem.setAttribute('data-ball-year', yearArray[indexnum]);
                elem.textContent = yearArray[indexnum];
            }
        };
        if (pageFunctions.utilities.isMobile()) {
            window.addEventListener('scroll', pageFunctions.utilities.throttle(follow, 100));
        } else {
            window.addEventListener('scroll', pageFunctions.utilities.throttle(follow, 40));
        }
        
    }
    this.Yearly = function () {
        var defaults = { //Default Options
            element: ".res__timeline__year__marker",
            container: ".res__section__large__timeline",
            cells: ".res__timeline__cell",
            yearCells: ".res__timeline__year__cell"
        };
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = pageFunctions.utilities.extendDefaults(defaults, arguments[0]);
        }
        followPath.call(this);
    };
}());