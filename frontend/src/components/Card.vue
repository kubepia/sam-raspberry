<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-2by3 is-covered">
                <img :src="'img/content/'+geturl(this.movie)" alt />
            </figure>
            
            <div
                class="content is-vcentered"
                style="position:absolute;top:0px;width:100%;height:100%"
            >
                <div class="container has-text-centered has-text-white-bis">
                    <p>
                        <b>감독: {{this.movie.director}}</b>
                    </p>
                    <p>
                        <b>주연: {{this.movie.actors}}</b>
                    </p>
                </div>
                <div class="container has-text-centered">
                    <a>
                        <span class="icon is-large">
                            <i class="fas fa-play"></i>
                        </span>
                    </a>
                    <a>
                        <span class="icon is-large">
                            <i class="fas fa-plus-circle"></i>
                        </span>
                    </a>
                    <a>
                        <span class="icon is-large">
                            <i class="fas fa-heart"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div v-if="movie.membership" style="position:absolute;top:2rem;left:1rem" class="event-label">
                <span>T 할인특가</span>
            </div>
        <div class="card-content">
            <div class="item__title">{{movie.name}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Card",
    props: {
        movie : {
            type: Object
        }
        },
    methods: {
        geturl:(movie)=>{
            return `${movie.id}.jpg`
        }
    },
};
</script>
<style lang="scss" scoped>
.card {
    padding: 10px 10px 0 10px;
}
.card:hover{
    transform: scale(1.1, 1.1);
}
.card:hover .event-label{
    transform: rotate(-5deg);
}
a.is-borderless {
    border: none;
}
.content.is-vcentered {
    display: flex;
    flex-wrap: wrap;
    align-content: center; /* commenting this out, the multiple lines will have gaps */
    align-items: center; /* commenting this out, the one-line will not align */
    opacity: 0;
    background-color: darkgray;
}
.content.is-vcentered:hover {
    opacity: 0.8;
}
.event-label{
    padding: 5px;
    color: white;
    background-color: #F2540A;
    font-size: 1.22em;
}
</style>