<template>
    <section class="container">
        <div class="has-text-left">
            <h1 class="is-size-3">{{displayName}}</h1>
        </div>
        <div class="columns is-multiline is-left is-variable is-0">
            <div class="column is-2" v-for="movie in movies" v-bind:key="movie.id">
                <Card :movie="movie"/>
            </div>
        </div>
    </section>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import Card from "@/components/Card.vue";
import axios from "axios";
export default {
    name: "ContentList",
    props: ["displayName", "category", "condition"],
    computed: {},
    data: () => {
        return {
            movies: [],
        };
    },
    created() {
        axios
            .get(`/api/content/0/${this.category}/${this.condition}`)
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