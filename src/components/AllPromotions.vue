<template>
<div class="prmotions">
    <div v-for="promotion in promotions" :key="promotion.nid">
        <router-link :to="{ name: 'SinglePromotion', params: { PromotionID: promotion.nid }}">
            <h1 v-html="promotion.title"></h1>
        </router-link>
        <p v-html="promotion.field_promotion_category"></p>
    </div>
</div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'AllPromotions',
    data() {
        return {
            promotions: ''
        }
    },
    methods: {
        getAllPromotions() {
            Axios
            .get('http://localhost/askpromo-api/api/promotions')
            .then((resp) => this.promotions = resp.data)
        }
    },
    created() {
        this.getAllPromotions()
    }
}
</script>