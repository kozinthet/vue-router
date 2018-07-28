<template>
    <ul class="list-inline">
        <li>
            <router-link :to="{ name: 'AllPromotions'}">
                All
            </router-link>
        </li>
        <li v-for="category in categories" :key="category.tid">
            <a :to="'/category/' + category.tid" :key="category.id">
                {{ category.name }}
            </a>
        </li>
    </ul>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AllCategories',
    data() {
        return {
            categories: ''
        }
    },
    methods: {
        getCategories() {
            axios
            .get('http://localhost/askpromo-api/api/categories/')
            .then((resp) => this.categories = resp.data)
        }
    },
    mounted() {
        this.getCategories()
    }
}
</script>

<style>
ul li {
    display: inline-block;
    padding: 0 10px;
}
</style>
