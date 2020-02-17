<template>
  <form action="/" class="box">
    <label for class="label title-color2">SNS계정으로 로그인</label>
    <br />
    <div class="button is-rounded is-widescreen" to="#">
      <span class="icon">
        <i class="fab fa-twitter"></i>
      </span>
      <span>{{title}}</span>
    </div>
  </form>
</template>
<script>
export default {
  //props: ["title", "bgColor", "linkURL"]
  props: ["sns_btns"]
};
</script>
