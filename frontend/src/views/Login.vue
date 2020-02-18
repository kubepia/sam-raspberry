
<template>
  <div class="container">
    <p class="title-color title1">로그인</p>
    <div class="container is-widescreen  is-fullheight">
      <div class="columns is-centered is-fullheight">
        <div class="column is-10-widescreen is-fullheight">
          <div class="box">
            <p class="label title-color2">Btv계정으로 로그인</p>
            <LoginBtv />
          </div>
        </div>

        <div class="column is-10-widescreen is-fullheight">
          <div class="box">
            <p class="label title-color2">SNS계정으로 로그인</p>
            <LoginSNS
              v-for="btn in sns_btns"
              v-bind:key="btn.id"
              :title="btn.title"
              :linkURL="btn.linkURL"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginBtv from "@/components/LoginBtv.vue";
import LoginSNS from "@/components/LoginSNS.vue";

export default {
  data: () => {
    return {
      sns_btns: [
        {
          id: 0,
          linkURL: "img/content/facebook.png",
          title: "페이스북"
        },
        { id: 1, linkURL: "img/content/naver.png", title: "네이버", bgColor:"#" },
        { id: 2, linkURL: "img/content/kakao.png", title: "카카오", bgColor:"#" },
        { id: 3, linkURL: "img/content/google.png", title: "구글", bgColor:"#" },
        { id: 4, linkURL: "img/content/skt.png", title: "T아이디", bgColor:"#" }
      ]
    };
  },
  components: {
    LoginSNS,
    LoginBtv
  }
};
</script>

<style scoped>
p {
  padding-top: 20px;
  padding-bottom: 20px;
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
</style>
