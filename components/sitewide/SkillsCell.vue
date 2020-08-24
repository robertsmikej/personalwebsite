<template>
    <div class="res__skills__cell">
        <div class="res__skills__cell__header">
            <div class="res__skills__cell__header__img">
                <img :src="skill.skillset_image" :alt="skill.skill">
            </div>
            <div class="res__skills__cell__header__text">
                <h4>{{ skill.skill }}</h4>
                <p>{{ skill.skill_description }}</p>
            </div>
        </div>
    </div>
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