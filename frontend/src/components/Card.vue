<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-2by3 is-covered">
                <img v-bind:src="'img/content/'+image" alt />
            </figure>
            <div
                class="content is-vcentered"
                style="position:absolute;top:0px;width:100%;height:100%"
            >
                <div class="container has-text-centered has-text-white-bis">
                    <p>
                        <b>감독: 총감독</b>
                    </p>
                    <p>
                        <b>주연: 남배우, 여배우</b>
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
        <div class="card-content">
            <div class="item__title">{{title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Card",
    props: ["image", "title"],
};
</script>
<style lang="scss" scoped>
.card {
    padding: 10px 10px 0 10px;
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
</style>