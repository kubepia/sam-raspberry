<template>
  <div class="home">
    <Hero />
    <br>
    <ContentMenu genreName="B TV 인기 컨텐츠"/><br>
    <ContentMenu genreName="고객님의 취향저격 베스트"/><br>
    <ContentMenu genreName="액션 베스트"/><br>
    <ContentMenu genreName="로맨스"/><br>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import ContentMenu from '@/components/ContentMenu.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    ContentMenu
  }
}
</script>
