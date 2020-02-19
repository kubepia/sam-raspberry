<template>
    <section class="container">
        <div class="has-text-left">
            <h1 class="is-size-3">{{displayName}}</h1>
        </div>
        <div class>
            <carousel :navigationEnabled="true" :perPage="5">
                <slide v-for="movie in movies" v-bind:key="movie.id">
                    <Card :movie="movie"/>
                </slide>
            </carousel>
        </div>
    </section>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import Card from "@/components/Card.vue"
import axios from "axios";
export default {
    name: "ContentCarousel",
    props: ["displayName", "category"],
    computed: {},
    data: () => {
        return {
            movies: [],
        };
    },
    created() {
        axios
            .get(`/api/best/${this.category}`)
            .then(res => {
                this.movies = res.data;
            })
            .catch(error => {});
    },

    mounted() {},
    components: {
        Carousel,
        Slide,
        Card
    },
    methods: {
        geturl:(movie)=>{
            return `${movie.id}.jpg`
        }
    }
};
</script>

<style lang="scss">

</style>