<template>
    <div class>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">국내 영화관</h1>
                    <h2 class="subtitle">아카데미 수상작 '기생충'을 특가에 만나보세요</h2>
                </div>
            </div>
        </section>
        <ContentList genreName="전체" />
    </div>
</template>
<script>
import ContentList from "@/components/ContentList.vue";
export default {
    name: "Local",

    components: {
        ContentList
    }
};
</script>
