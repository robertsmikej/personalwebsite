<template>
    <div v-if="cell.year_number === lineyear" class="res__timeline__cell">
        <div class="res__timeline__cell__marker__div">
            <div class="res__timeline__line__marker"></div>
            <div class="res__timeline__line__marker__month">{{ cell.month_number }}</div>
        </div>
        <div class="res__timeline__cell__header__container">

            <h4 class="res__timeline__cell__header">{{ cell.header_text }}</h4>
            <h4 class="res__timeline__cell__header">{{ cell.sub_header_text }}</h4>
        </div>
        <div class="res__timeline__cell__img__div">
            <img v-if="cell.cell_image !== 'null'" :src="cell.cell_image" alt="" class="res__timeline__cell__img">
        </div>
        <div class="res__timeline__cell__text__div">
            <p class="res__timeline__para">{{ cell.main_text }}</p>
            <a v-if="cell.link !== 'null'" :href="cell.link" class="res__timeline__cell__link">{{ cell.link_description }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cell: Object,
        images: Object,
        lineyear: String
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