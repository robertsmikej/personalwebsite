<template>
    <div class="res__body vue__container">
        <div class="res__main__content">
            <Hero :dataObj="pageData.hero"/>
            <section class="res__section res__section__about res__section__small__large">
                <section-title :dataObj="pageData.sections.about"></section-title>
                <div class="res__section__large res__about__text">
                    <div v-html="pageData.sections.about.section_text.html"></div>
                </div>
            </section>

            <!-- <section class="res__section res__section__timeline res__section__small__large">
                <section-title :dataObj="timelineElements"></section-title>
                <div class="res__section__large res__section__large__timeline">
                    <div class="res__timeline__and__markers">
                        <div class="res__timeline__line"></div>
                        <div class="res__timeline__year__marker"><p>2019</p></div>
                        <div class="res__timeline__marker__start"></div>
                        <div class="res__timeline__marker__end"></div>
                    </div>
                    <div class="res__timeline__years">
                        <timeline-year :year="2019" :timeline="timelineCellElements" :images="commonImages"></timeline-year>
                        <timeline-year :year="2018" :timeline="timelineCellElements" :images="commonImages"></timeline-year>
                        <timeline-year :year="2017" :timeline="timelineCellElements" :images="commonImages"></timeline-year>
                        <timeline-year :year="2016" :timeline="timelineCellElements" :images="commonImages"></timeline-year>
                        <timeline-year :year="2015" :timeline="timelineCellElements" :images="commonImages"></timeline-year>
                        <timeline-year :year="2014" :timeline="timelineCellElements" :images="commonImages"></timeline-year>
                        <timeline-year :year="2013" :timeline="timelineCellElements" :images="commonImages"></timeline-year>
                        <timeline-year :year="2012" :timeline="timelineCellElements" :images="commonImages"></timeline-year>
                    </div>
                </div>
            </section>

             <section class="res__section res__section__small__large">
                <section-title :dataObj="skillsetElements"></section-title>
                <div class="res__section__large res__section__large__skills">
                    <skills-cell v-for="skill in skillsetCellElements" :skill="skill"></skills-cell>
                </div> 
            </section> -->

            <section class="res__section res__section__small__large">
                <section-title :dataObj="pageData.sections.contact"></section-title>
                <div class="res__section__large res__section__large__contact">
                    <div v-html="pageData.sections.contact.section_text.html"></div>
                    <a href="mailto:michael@robertsmj.com">michael@robertsmj.com</a>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageName: "index"
        };
    },
    transition: 'bounce',
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageData: function () {
            return this.$store.state.pages[this.pageName]
        }
    },
    methods: {

    },
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
            title: "Michael Roberts | Boise, ID | Senior Front End Developer",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: ""
                },
                { hid: 'robots', name: 'robots', content: 'index, follow' }
            ]
        };
    }
}
</script>

<style>

</style>
