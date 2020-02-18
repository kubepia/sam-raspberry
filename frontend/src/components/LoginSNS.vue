<template>
  <div class="container">
    <div class="button is-rounded is-fullwidth" to="#">
        <span v-if="iconName=='facebook'" class="icon">
          <i class="fab fa-facebook fa-lg"></i>
        </span>
        <span v-if="iconName=='twitter'" class="icon">
          <i class="fab fa-twitter fa-lg"></i>
        </span>
        <span v-if="iconName=='google'" class="icon">
          <i class="fab fa-google fa-lg"></i>
        </span>
        <span>{{title}} 로그인</span>
    </div>
  </div>
</template>
<script>
export default {
  //props: ["title", "bgColor", "linkURL"]
  props: ["title", "iconName"]
};
</script>
<style lang="scss">
.button {
  margin-bottom: 10px;
}
</style>
