<template>
  <div class="button is-rounded is-widescreen" to="#">
      <a href="#">
      <span class="icon">
        <i class="fab fa-twitter"></i>
      </span>
      <span>{{title}}</span>
      </a>
      
    </div>
</template>
<script>
export default {
  //props: ["title", "bgColor", "linkURL"]
  props: ["title", "linkURL"]
};
</script>
