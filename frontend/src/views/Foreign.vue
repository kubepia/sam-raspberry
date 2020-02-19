<template>
    <div class>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">해외 영화관</h1>
                    <h2 class="subtitle">고전부터 최신 해외영화를 만나보세요 !</h2>
                </div>
            </div>
        </section>
        <ContentList displayName="전체" category="korean" condition="f"/>
    </div>
</template>
<script>
import ContentList from "@/components/ContentList.vue";
export default {
    name: "Foreign",

    components: {
        ContentList
    }
};
</script>
