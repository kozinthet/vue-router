<template>
    <ul class="list-inline">
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <li>
            <router-link :to="{ name: 'AllPromotions'}">
                All
            </router-link>
        </li>
        <li v-show="isLoading">
            <p>Loading</p>
        </li>
        <li v-for="category in categories" :key="category.tid">
            <router-link :to="{ name: 'CategoryPromotions', params: { CategoryID: category.tid }}">
                {{ category.name }}
            </router-link>
        </li>
    </ul>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AllCategories',
    data() {
        return {
            categories: '',
            isLoading: true,
            errored: false
        }
    },
    methods: {
        getCategories() {
            axios
            .get('http://localhost/askpromo-api/api/categories/')
            .then(response => {
                this.categories = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.isLoading = false)
        }
    },
    created() {
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
