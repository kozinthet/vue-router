<template>
<div>
    <div v-for="promotion in promotions" :key="promotion.nid">
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
    </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'CategoryPromotions',
    data() {
        return {
            promotions: '',
            params: ''
        }
    },
    methods: {
        getPromotions() {
            // console.log('as')
            Axios
            .get('http://localhost/askpromo-api/api/categories/'  + this.$route.params.CategoryID)
            .then((resp) => this.promotions = resp.data)
        }
    },
    created() {
        this.getPromotions()
    }
}
</script>