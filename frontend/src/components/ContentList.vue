<template>
    <section class="container">
        <div class="has-text-left">
            <h1 class="is-size-3">{{genreName}}</h1>
        </div>
        <div class="columns is-multiline is-left is-variable is-0">
            <div class="column is-2" v-for="movie in movies" v-bind:key="movie.id">
                <Card v-bind:image="movie.image" v-bind:title="movie.title" />
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
    props: ["genreName", "genre"],
    computed: {},
    data: () => {
        return {
            movies: [],
            count: 0
        };
    },
    created() {
        console.log(`title is ${this.title}`);
        console.log(`count of movies is ${this.movies.length}`);
        // this.getMovies('action')
        axios
            .get("/api/movies/action")
            .then(res => {
                this.count = res.data.length;
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
        // getMovies:(genre)=>{
        //     axios.get('/api/movies/action')
        //     .then(res=>{
        //         console.log(res.data);
        //         console.log(`!!!!count of movies is ${res.data.length}`);
        //         this.count = res.data.length
        //         this.movies=res.data;
        //         console.log('=======');
        //     })
        //     .catch(error=>{
        //     })
        // }
    }
};
</script>

<style lang="scss">
</style>