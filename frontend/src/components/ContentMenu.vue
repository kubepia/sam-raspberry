<template>
    <section class="container">
        <div class="has-text-left">
            <h1 class="is-size-3">{{title}}</h1>
        </div>
        <div class>
            <carousel :navigationEnabled="true" :perPage="6">
                <slide v-for="movie in movies" v-bind:key="movie.id">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-2by3 is-covered">
                                <img v-bind:src="'img/content/'+movie.image" alt />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="item__title">{{movie.description}}</div>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
    </section>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import axios from 'axios'
export default {
    name: 'ContentMenu',
    props: ["title", "genre"],
    computed: {
        
    },
    data: () => {
        return {
            movies: [],
            count:0
        };
    },
    created() {
        console.log(`title is ${this.title}`);
        console.log(`count of movies is ${this.movies.length}`);
        // this.getMovies('action')
        axios.get('/api/movies/action')
            .then(res=>{
                this.count = res.data.length
                this.movies=res.data;
            })
            .catch(error=>{

            })
    },
    
    mounted() {
        
    },
    components: {
        Carousel,
        Slide
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