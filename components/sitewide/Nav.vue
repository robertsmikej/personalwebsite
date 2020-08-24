<template>
    <nav>
        <h3>Michael Roberts</h3>
        <ul>
            <li v-for="link in dataObj" :key="link.title">
                <nuxt-link :to="link.link">{{ link.title }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        dataObj: Array
    }
}
</script>

<style>
    nav {
        width: 100vw;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: flex-start;
        background-color: #202128;
        color: #FFF;
        padding: 10px 30px 8px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    }
    nav h3 {
        text-align: left;
        margin: 0;
        white-space: nowrap;
    }
    nav ul {
        width: 100%;
        margin: 6px 10px 6px auto;
        align-self: center;
        padding: 0 6px;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: flex-end;
        list-style: none;
    }
    nav ul li {
        font-size: 1em;
        line-height: 1em;
        margin: 5px;
        padding: 0;
        display: block;
        white-space: nowrap;
    }
    nav a {
        color: #FFF;
        margin: 3px 10px;
        text-decoration: none;
        transition: all .3s;
    }
    nav a:hover {
        text-decoration: underline;
        color: #FFF;
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 768px) {
        nav {
            padding: 6px 14px 6px;
        }
        nav a {
            margin: 3px 6px;
        }
    }
</style>