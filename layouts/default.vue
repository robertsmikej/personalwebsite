<template>
    <div>
        <!-- <Nav :dataObj="sitewide.nav"/> -->
        <Nuxt />
    </div>
</template>

<script>
export default {
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        }
    }
}
</script>

<style>
body, html {
    margin: 0;
    /* width: 100vw;
    height: 100vh; */
}
html {
    font-family: Raleway, Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.res__body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: space-between;
    font-family: Raleway;
}
h1 {
    margin: 0;
    font: 300 30px/34px Raleway, Arial, sans-serif;
    white-space: nowrap;
    padding: 0 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
}
h4 {
    font: 500 17px/17px Raleway, Arial, sans-serif;
}
p {
    margin: 5px 0;
    font: 300 16px/28px Raleway, Arial, sans-serif;
}
a {
    display: block;
    margin: 10px 0;
    font: 300 18px/18px Raleway, Arial, sans-serif;
    cursor: pointer;
    color: #FFF;
    text-decoration: none;
}


/*MAIN SECTION*/
.res__main__content {
    width: 100%;
    margin: 0 0 0 auto;
    position: relative;
    z-index: 1;
    background-color: #000;
}
.res--overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: .35;
}
.res__section__intro {
    width: 100%;
    height: 100vh;
    background-attachment: fixed;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-color: #FFF;
}
.res__intro__text__container {
    position: -webkit-sticky;
    position: sticky;
    top: 50%;
    -webkit-transform: translate(0%, -50%);
    transform: translate(0%, -50%);
    text-align: center;
    margin: 0 auto;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.res__intro__welcome {
    color: #FFF;
    font: 600 24px/24px "Josefin Sans", Arial, sans-serif;
    letter-spacing: 3px;
    padding: 0;
    margin-bottom: 0;
    text-shadow: 1px 1px 1px #232323;
    -ms-flex-item-align: center;
    align-self: center;
}
.res__intro__name {
    color: #FFF;
    -ms-flex-item-align: center;
    align-self: center;
    font: 600 72px/72px "Josefin Sans", Arial, sans-serif;
    letter-spacing: 3px;
    text-align: center;
    padding: 16px 20px 2px;
    border: 1px solid #FFF;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px #232323;
    align-self: center;
}
.res__section {
    min-height: 50vh;
    position: relative;
    padding: 50px 5% 50px 5%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.res__section:nth-of-type(odd) {
    background: #e1e8f0;
}
.res__section:nth-of-type(even) {
    color: #FFF;
}
.res__section p {
    width: 100%;
    max-width: 84%;
    min-width: 300px;
    -ms-flex-item-align: center;
    align-self: center;
    margin: 0 auto 10px;
}
.res__section__small__large {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.res__section:nth-of-type(even).res__section__small__large {
    flex-direction: row-reverse;
}
.res__section__small {
    width: 350px;
    min-width: 350px;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
/*
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
*/
    text-align: center;
    height: auto;
    margin: 40px 0 20px;
    position: -webkit-sticky;
    position: sticky;
    top: 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-item-align: start;
    align-self: center;
}
.res__section__small__timeline {
    -ms-flex-item-align: start;
    align-self: flex-start;
}
.res__section__large {
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
    padding: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.res__section__header {
    text-transform: uppercase;
    padding: 0px 30px;
    margin: 0;
    text-align: center;
    font-size: 3.3em;
    -ms-flex-item-align: center;
    align-self: center;
}

/*ABOUT*/
/*
.res__about__text p:nth-of-type(n + 2) {
    margin: 24px 0 0;
    text-align: left;
}
*/

/*TIMELINE*/
/*
.res__section__timeline {
    flex-direction: column;
    padding: 50px 30px 50px 30px;
}
*/

.res__section__timeline .res__section__large {
    -ms-flex-item-align: center;
    align-self: center;
    position: relative;
}
.res__section__large__timeline {
    max-width: 900px;
    -ms-flex-item-align: start;
    align-self: flex-start;
    position: relative;
    margin: 0 auto;
    position: relative;
    padding: 0;
}
.res__timeline__line__container {
    width: auto;
    height: calc(100% - 40px);
    position: absolute;
    top: 24px;
    left: 70px;
}
.res__timeline__line {
    width: 6px;
    height: 100%;
    background: #000;
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    z-index: 1;
}

.res__timeline__year__cell {
    position: relative;
    width: 900px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    z-index: 3;
}
.res__timeline__and__markers {
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, 0%);
    transform: translate(-50%, 0%);
    height: 100%;
    display: block;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    width: 60px;
    z-index: 4;
}
.res__timeline__year__marker {
    position: -webkit-sticky;
    position: sticky;
    top: 15%;
    left: 0;
    margin: 0;
    z-index: 6;
    height: 60px;
    width: 60px;
    min-width: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 1000px;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    color: #FFF;
    -webkit-transition: top .2s, background-color .2s, opacity .2s;
    transition: top .2s, background-color .2s, opacity .2s;
    background-color: #F95F29;
    opacity: 0;
}

[data-year="2019"] .res__timeline__cell__header__container, [data-year="2019"] .res__timeline__line__marker__month, [data-ball-year="2019"] {
    background-color: #6ed3cf;
}
[data-year="2018"] .res__timeline__cell__header__container, [data-year="2018"] .res__timeline__line__marker__month, [data-ball-year="2018"] {
    background-color: #F95F29;
}
[data-year="2017"] .res__timeline__cell__header__container, [data-year="2017"] .res__timeline__line__marker__month, [data-ball-year="2017"] {
    background-color: #F7B733;
}
[data-year="2016"] .res__timeline__cell__header__container, [data-year="2016"] .res__timeline__line__marker__month, [data-ball-year="2016"] {
    background-color: #98dafc;
}
[data-year="2015"] .res__timeline__cell__header__container, [data-year="2015"] .res__timeline__line__marker__month, [data-ball-year="2015"] {
    background-color: #e0474c;
}
[data-year="2014"] .res__timeline__cell__header__container, [data-year="2014"] .res__timeline__line__marker__month, [data-ball-year="2014"] {
    background-color: #7A9D96;
}
[data-year="2013"] .res__timeline__cell__header__container, [data-year="2013"] .res__timeline__line__marker__month, [data-ball-year="2013"] {
    background-color: #a39274;
}
[data-year="2012"] .res__timeline__cell__header__container, [data-year="2012"] .res__timeline__line__marker__month, [data-ball-year="2012"] {
    background-color: #9068be;
}
.res__timeline__marker__start {
    position: absolute;
    top: 0px;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    z-index: 4;
    width: 30px;
    height: 30px;
    border-radius: 1000px;
    -ms-flex-item-align: center;
    align-self: center;
    background-color: #6ed3cf;
}
.res__timeline__marker__end {
    position: absolute;
    bottom: 0px;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    z-index: 4;
    width: 30px;
    height: 30px;
    border-radius: 1000px;
    -ms-flex-item-align: center;
    align-self: center;
    background-color: #9068be;
}



.res__section__large__timeline {
    
}





/*INDIVIDUAL CELLS*/
.res__timeline__cell {
    width: 340px;
/*    height: 400px;*/
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-transition: all 1s;
    transition: all 1s;
    margin: 20px 20px;
    position: relative;
    z-index: 1;
}

.res__timeline__cell__marker__div {
    z-index: 0;
    background-color: transparent;
    position: absolute;
    height: 34px;
    width: 108px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.res__timeline__cell:nth-of-type(odd) .res__timeline__cell__marker__div {
    top: 30%;
    right: -108px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}
.res__timeline__cell:nth-of-type(even) .res__timeline__cell__marker__div {
    bottom: 30%;
    left: -108px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.res__timeline__line__marker {
    height: 5px;
    width: 100%;
    background: #000;
    z-index: 1;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    margin: 0 auto;
    display: block;
    -ms-flex-item-align: center;
    align-self: center;
    z-index: 1;
}
.res__timeline__cell:nth-of-type(odd) .res__timeline__line__marker__month {
    margin-right: 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.res__timeline__cell:nth-of-type(even) .res__timeline__line__marker__month {
    margin-left: 20px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.res__timeline__line__marker__month {
    min-width: 38px;
    height: 34px;
    background: #000;
    border-radius: 1000px;
    text-align: center;
    color: #FFF;
    line-height: 33px;
    z-index: 1;
}

.res__timeline__cell__content {
    z-index: 1;
}

.res__timeline__cell__header__container {
    text-align: center;
    min-height: 60px;
    padding: 14px 0;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 15px 15px 0 0;
    position: relative;
}
.res__timeline__cell__type__img {
    -o-object-fit: contain;
    object-fit: contain;
    -ms-flex-item-align: start;
    align-self: flex-start;
    position: absolute;
    top: 7px;
    left: 8px;
    width: 23px;
}
.res__timeline__cell__header {
    text-align: center;
    padding: 0 8px;
    margin: 0px 0 4px 0;
    color: #FFF;
    font-size: 18px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: .5px;
}
.res__timeline__cell__header:nth-of-type(2) {
    text-align: center;
    padding: 0;
    margin: 0px 0 0;
    color: #FFF;
    font-weight: 200;
    text-transform: capitalize;
    font-size: 16px;
}
.res__timeline__cell__img__div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #E0E0E0;
    background: #FFF;
    overflow: hidden;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 180px;
    z-index: 2;
}

.res__timeline__cell__img {
    max-width: 100%;
    max-height: 95%;
    height: 100%;
    width: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    -webkit-transition: all .6s;
    transition: all .6s;
    margin: 0 auto;
    -ms-flex-item-align: center;
    align-self: center;
}
.res__timeline__cell__text__div {
    background-color: #FFF;
    padding: 10px 10px;
    border-radius: 0 0 15px 15px;
/*    height: 140px;*/
    position: relative;
    overflow: hidden;
    z-index: 2;
}
p.res__timeline__para {
    max-width: 100%;
    font-size: 16px;
    line-height: 21px;
    overflow: hidden;
    max-width: 94%;
}
p.res__timeline__para__hidden {
    max-height: 0;
    opacity: 0;
    overflow: visible;
    -webkit-transition: all .6s;
    transition: all .6s;
}
p.res__timeline__para__hidden--add { 
    max-height: 100%;
    opacity: 1;
}
.res__timeline__cell__link {
    display: block;
    margin: 0;
    font-size: 16px;
    line-height: 22px;
    color: #729f98;
    text-align: right;
}

.timeline__large__cell {
    width: 94%;
    max-width: 1000px;
    height: auto;
    position: fixed;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    top: 140px;
    z-index: 7;
    display: none;
}
.timeline__large__cell .res__timeline__cell__img__div {
    height: auto;
    max-height: 300px;
    padding: 14px;
}
.timeline__large__cell .res__timeline__cell__img {
    max-height: 270px;
}
.timeline__large__cell .res__timeline__cell__marker__div {
    display: none;
}
.timeline__large__cell .res__timeline__learn__more {
    display: none;
}

/*SKILLS*/
.res__section__large__skills {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
}
.res__skills__cell {
    width: 300px;
    padding: 2px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    overflow: hidden;
    margin: 20px 14px;
}
.res__skills__cell__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    width: 100%;
/*    height: 60px;*/
}
.res__skills__cell__header__img {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 60px;
    min-width: 60px;
}
.res__skills__cell__header__img img {
    -ms-flex-item-align: start;
    align-self: flex-start;
    -o-object-fit: contain;
    object-fit: contain;
    max-height: 54px;
    max-width: 54px;
}
.res__skills__cell__header__text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 0 5px 8px;
}
.res__skills__cell__header__text h4 {
    margin: 0;
}
.res__skills__cell__header__text p {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    margin: 3px 0 0;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
}
.res__skills__cell__bar {
    width: 100%;
    margin: 8px 0 10px;
    height: 16px;
}
.res__skills__cell__bar__inner {
    height: 100%;
    max-width: 1%;
}

/*CONTACT*/
.res__contact__cells {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row-reverse;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    width: 300px;
    margin: 20px 0;
}
.res__section__large__contact h4 {
    text-align: center;
    max-width: 600px;
    margin: 5px 0;
    text-transform: capitalize;
    line-height: 22px;
}
.res__section__large__contact h4:nth-of-type(2) {
    margin: 15px 0 5px;
}
.res__contact__cells a {
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
    -webkit-transform: scale(.85);
    transform: scale(.85);
}
.res__contact__cells a:hover {
    -webkit-transform: scale(1);
    transform: scale(1);
}

/* ----------------------------  MEDIA QUERY ------------------------------ */
/*START MOBILE-ISH SECTION*/
@media screen and (max-width:1380px) { 
    .res__section {
        padding: 0px 20px 40px 20px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse;
    }
    .res__section__small {
        margin: 54px auto 10px;
        position: relative;
        top: auto;
        width: 100%;
    }
    .res__section__large {
        -ms-flex-item-align: center;
        align-self: center;
        width: 100%;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:900px) {
    /*GENERAL*/
    .res__section {
        padding: 30px 20px 40px;
    }
    .res__section__large {
        padding: 0;
    }
    .res__section__small {
        margin: 0 0 20px;
        width: 100%;
    }
    .res__opac--zero {
        opacity: 1;
    }
    /*TIMELINE*/
    .res__section__timeline {
        padding: 20px 10px;
    }
    .res__timeline__year__cell {
        width: 100%;
    }
    .res__timeline__cell {
        margin: 20px;
        width: 40%;
/*        height: 300px;*/
    }
    .res__timeline__cell__header {
        font: 400 16px/20px Raleway, Arial, sans-serif;
    }
    .res__timeline__cell__type__img {
        width: 20px;
    }
    .res__timeline__cell__marker__div {
        width: auto;
    }
    .res__timeline__line__marker {
        display: none;
    }
    .res__timeline__cell:nth-of-type(even) .res__timeline__cell__marker__div {
        left: 0;
        right: 0;
    }
    .res__timeline__cell:nth-of-type(odd) .res__timeline__cell__marker__div {
        margin: 0;
        left: 0;
        right: 0;
    }
    .res__timeline__cell:nth-of-type(even) .res__timeline__line__marker__month {
        margin: 0 0px 0 -36px;
        width: 36px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
    }
    .res__timeline__cell:nth-of-type(odd) .res__timeline__line__marker__month {
        margin: 0 -36px 0 0;
        width: 36px;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .res__timeline__cell__img__div {
        height: 140px;
        min-height: 140px;
    }
    .res__timeline__cell__img {
        max-height: 100%;
    }
    .res__section p {
        max-width: 98%;
        min-width: 0;
    }
    p.res__timeline__para {
        max-width: 100%;
        font-size: 15px;
        line-height: 19px;
        overflow: hidden;
    }
     .res__intro__name {
        font: 600 62px/62px "Josefin Sans", Arial, sans-serif;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 768px) {
    a {
        font: 300 16px/16px Raleway, Arial, sans-serif;
    }
    .res__section:nth-of-type(even).res__section__small__large {
        flex-direction: column-reverse;
    }
    .res__section {
        min-height: 100px
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:750px) {
    .res__section__intro {
        background-attachment: scroll;
    }
    .res__intro__name {
        font: 600 50px/52px "Josefin Sans", Arial, sans-serif;
        letter-spacing: 2px;
        padding: 10px 10px 2px;
    }
    .res__nav__cell, .res__nav__name {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        padding: 0 8px;
        font: 600 17px/17px Raleway, Arial, sans-serif;
        -webkit-transition: color .3s, text-shadow .3s, -webkit-box-flex .4s, -webkit-transform .4s;
        transition: color .3s, text-shadow .3s, -webkit-box-flex .4s, -webkit-transform .4s;
        transition: color .3s, flex .4s, transform .4s, text-shadow .3s;
        transition: color .3s, flex .4s, transform .4s, text-shadow .3s, -webkit-box-flex .4s, -ms-flex .4s, -webkit-transform .4s;
    }
    .res__navbar {
        padding: 0 10px 0 0;
        -webkit-transition: background-color .4s, max-width .6s, -webkit-transform .3s;
        transition: background-color .4s, max-width .6s, -webkit-transform .3s;
        transition: background-color .4s, transform .3s, max-width .6s;
        transition: background-color .4s, transform .3s, max-width .6s, -webkit-transform .3s;
    }
    .res__section__timeline .res__section__large__timeline {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -ms-flex-item-align: start;
        align-self: flex-start;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
    .res__timeline__years {
        -ms-flex-item-align: start;
        align-self: flex-start;
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
        z-index: 5;
        
    }
    .res__timeline__year__cell {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        overflow: auto;
    }
    .res__timeline__and__markers {
        position: absolute;
        left: auto;
        -webkit-transform: none;
        transform: none;
        right: 4%;
        height: 100%;
        display: block;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        width: 60px;
        z-index: 4000;
    }
    .res__timeline__line {
        width: 4px;
        position: absolute;
        top: 0;
        left: 50%;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
    }
    .res__timeline__year__marker {
        position: -webkit-sticky;
        position: sticky;
        left: 0;
        right: 0;
        top: 25%;
        margin: 0;
        -ms-flex-item-align: start;
        align-self: flex-start;
    }
    .res__timeline__marker__start, .res__timeline__marker__end {
        left: 50%;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
    }
    .res__timeline__marker__start {
        top: 0px;
    }
    .res__timeline__marker__end {
        bottom: 0px;
    }
    .res__timeline__line__marker__month {
        min-width: 34px;
    }
    .res__timeline__cell:nth-of-type(even) .res__timeline__line__marker__month {
        margin: 0 -36px 0 0;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .res__timeline__cell:nth-of-type(odd) .res__timeline__cell__marker__div, .res__timeline__cell:nth-of-type(even) .res__timeline__cell__marker__div {
        top: 25%;
        z-index: 0;
    }
    .res__timeline__cell:nth-of-type(even) .res__timeline__cell__marker__div {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        
    }
    .res__timeline__cell__marker__div {
        width: 100%;
        z-index: 0;
    }
    .res__timeline__year__cell {
        width: 100%;
        -ms-flex-item-align: start;
        align-self: flex-start;
    }
    .res__timeline__cell {
        margin: 20px 0;
        -ms-flex-item-align: center;
        align-self: center;
        width: 82%;
        -ms-flex-item-align: start;
        align-self: flex-start;
    }
    .res__timeline__cell__img {
        max-height: 95%;
    }
    .res__section__timeline .res__section__small {
        margin-top: 10px;
    }
    .res__timeline__cell__text__div {
        max-height: 106px;
    }
    .res__skills__cell__header__text p {
        max-width: 100%;
    }
    
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:550px) {
    .res__timeline__and__markers {
        right: 0;
        -webkit-transform: none;
        transform: none;
        width: 46px;
    }
    .res__timeline__cell {
        width: 84%;
    }
    .res__timeline__year__marker {
        width: 46px;
        min-width: 46px;
        height: 46px;
        font-size: 16px;
        right: auto;
        left: 50%;
        margin: 0 auto;
    }
     .res__intro__name {
        font: 600 40px/40px "Josefin Sans", Arial, sans-serif;
        letter-spacing: 2px;
        padding: 10px 10px 2px;
    }
    .res__section__header {
        font: 600 30px/30px "Josefin Sans", Arial, sans-serif;
    }
    .res__intro__welcome {
        display: none;
    }
    .res__contact__cells {
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }
    .res__timeline__cell__header:nth-of-type(2) {
        font-size: 15px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:450px) {
    .res__intro__name {
        white-space: normal;
        max-width: 94%;
        padding: 10px;
        border: none;
    }
    .res__nav__cell {
        font-size: 16px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:410px) {
    .res__timeline__cell {
        width: 80%;
    }
    .res__nav__cell {
        padding: 0 5px;
        font-size: 15px;
    }
    .res__navbar__below .res__nav__name {
        padding: 0 10px;
        font: 300 28px/28px Raleway, Arial, sans-serif;
        -ms-flex-line-pack: center;
        align-content: center;
    }
    .res__section__small {
        min-width: 0;
    }
}







</style>
