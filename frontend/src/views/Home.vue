<template>
  <div class="home">
    <Hero />
    <br>
    <ContentMenu title="B TV 인기 컨텐츠"/><br>
    <ContentMenu title="고객님의 취향저격 베스트"/><br>
    <ContentMenu title="액션 베스트"/><br>
    <ContentMenu title="로맨스"/><br>
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
