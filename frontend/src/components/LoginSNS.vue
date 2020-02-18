<template>
  <div class="container">
    <div class="button is-rounded is-fullwidth" to="#">
      <a href="#">
        <span class="icon">
          <i class="fab bgColor"></i>
        </span>
        <span>{{title}} 로그인</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  //props: ["title", "bgColor", "linkURL"]
  props: ["title", "linkURL", "bgColor"]
};
</script>
<style>
.bgColor {
  
}
.button {
  margin-bottom: 10px;
}
</style>
