<template>
    <header class="res__section__intro" :style="{backgroundImage: 'url(' + dataObj.background_image + ')'}">
        <div class="res--overlay"></div>
        <div class="res__intro__text__container">
            <h2 v-if="dataObj.sub_header.length > 0" class="res__intro__welcome">{{ dataObj.sub_header }}</h2>
            <h1 class="res__intro__name">{{ dataObj.header }}</h1>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        dataObj: Object
    },
    data() {
        return {

        };
    },
    methods: {
        
    }
}
</script>

<style>
    
</style>