<template>
    <section class="container">
        <div class="has-text-left">
            <h1 class="is-size-3">{{displayName}}</h1>
        </div>
        <div class>
            <carousel :navigationEnabled="true" :perPage="5">
                <slide v-for="movie in movies" v-bind:key="movie.id">
                    <Card :image="geturl(movie)" :title="movie.title" :membership="movie.membership"/>
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