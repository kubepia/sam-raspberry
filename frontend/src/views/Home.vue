<template>
  <div class="home">
    <Hero />
    <br>
    <ContentCarouselOffering displayName="고객님의 취향저격 베스트"/><br>
    <ContentCarousel displayName="한국 영화 베스트" category="korean"/><br>
    <ContentCarousel displayName="액션 베스트" category="action"/><br>
    <ContentCarousel displayName="SF/Fantasy 베스트" category="sf_fantasy"/><br>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import ContentCarousel from '@/components/ContentCarousel.vue'
import ContentCarouselOffering from '@/components/ContentCarouselOffering.vue'

export default {
  name: "Home",
  components: {
    Hero,
    ContentCarousel,
    ContentCarouselOffering,
  }
};
</script>
