<template>
<div class="promotions">
    <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <div v-for="promotion in promotions" :key="promotion.nid" v-if="promotions[0]">
        <router-link :to="{ name: 'SinglePromotion', params: { PromotionID: promotion.nid }}">
            <h1 v-html="promotion.title"></h1>
        </router-link>
        <p v-html="promotion.field_promotion_category"></p>
    </div>
    <div v-show="isLoading">
        <p>Loading</p>
    </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'CategoryPromotions',
    data() {
        return {
            promotions: null,
            isLoading: true,
            errored: false
        }
    },
    methods: {
        getPromotions() {
            Axios
            .get('http://localhost/askpromo-api/api/categories/'  + this.$route.params.CategoryID)
            .then(response => {
                this.promotions = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.isLoading = false)
        }
    },
    created() {
        this.getPromotions()
    }
}
</script>