<template>
    <section class="swiper">
        <h1>swiper</h1>
        <swiper
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :modules="modules"
            :navigation="navigation"
            :pagination="pagination"
            :scrollbar="scrollbar"
            class="mySwiper"
            >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
            <swiper-slide>Slide 10</swiper-slide>
            <swiper-slide>Slide 11</swiper-slide>
            <swiper-slide>Slide 12</swiper-slide>
            <swiper-slide>Slide 13</swiper-slide>
            <swiper-slide>Slide 14</swiper-slide>
        </swiper>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

/*
* https://swiperjs.com/vue
*/
export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper:any) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            navigation: true,
            pagination: { 
                dynamicBullets: true,
                clickable: true,
            },
            scrollbar:{ draggable: true },
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
})
</script>
<style lang="css" scoped>
h1 {
    margin-bottom: 20px;
    font-family: 'Lifeplus'; font-weight:600; font-size: 36px; color: #000;
}
table + h1 {margin-top:30px;}
table {margin-top: 10px;}
thead th {border-bottom: 2px solid #adadad;}
th, td {padding: 15px 10px; border:1px solid #ccc;font-size: 15px;}
th {
    line-height: 1.6em;
    color: #000; 
    background-color: #f1f1f1;
}
</style>