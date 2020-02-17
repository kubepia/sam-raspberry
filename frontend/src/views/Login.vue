
<template>
  <div class="container">
    <p class="title-color">로그인</p>
    <div class="container is-widescreen">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <LoginBtv />
        </div>

        <div class="column is-10-widescreen">
          <LoginSNS v-bind:btns="sns_btns" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginBtv from "@/components/LoginBtv.vue";
import LoginSNS from "@/components/LoginSNS.vue";

var sns_btns = [
  { id: 0, linkURL: "img/content/facebook.png", title: "페이스북" },
  { id: 1, linkURL: "img/content/naver.png", title: "네이버" },
  { id: 2, linkURL: "img/content/kakao.png", title: "카카오" },
  { id: 3, linkURL: "img/content/google.png", title: "구글" },
  { id: 4, linkURL: "img/content/skt.png", title: "T아이디" }
];

export default {
  components: {
    LoginSNS,
    LoginBtv
  }
};
</script>

<style scoped>
.facebook-color {
  background: #3b5998;
  color: #ffffff;
  font-weight: bold;
}
.naver-color {
  background: #2db400;
  color: #ffffff;
  font-weight: bold;
}
.kakao-color {
  background: #f7e600;
  color: #000000;
  font-weight: bold;
}
.normal-color {
  background: #ffffff;
  color: #000000;
  font-weight: bold;
}
.grey-color {
  background: #333333;
  color: #ffffff;
  font-weight: bold;
}
.title-color {
  color: #ffffff;
  font-weight: bold;
  font-size: 40px;
}
.title-color2 {
  color: #ffffff;
  font-weight: bold;
}
</style>
