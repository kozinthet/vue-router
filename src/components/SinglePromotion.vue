<template>
<div class="promotion">
    <div v-for="promotion in promotions" :key="promotion.nid" class="promotions">
        <h3>Promotion Title</h3> 
        <div v-html="promotion.title"></div>
        <h3>Promotion Description</h3> 
        <div v-html="promotion.body"></div>
        <h3>Promotion Date</h3> 
        <div v-html="promotion.field_promotion_date"></div>
        <h3>Promotion Category</h3> 
        <div v-html="promotion.field_promotion_category"></div>
        <h3>Promotion From</h3> 
        <div v-html="promotion.field_information_from"></div>
        <h3>Promotion Banner</h3>
        <img :src="promotion.field_pro" alt="">
    </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'SinglePromotion',
    data() {
        return {
            promotions: ''
        }
    },
    methods: {
        getPromotion() {
            Axios
            .get('http://localhost/askpromo-api/api/promotions/' + this.$route.params.PromotionID)
            .then((resp) => this.promotions = resp.data)
        }
    },
    created() {
        this.getPromotion()
    }
}
</script>