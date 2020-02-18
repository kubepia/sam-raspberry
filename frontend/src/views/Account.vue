
<template>
  <div class="container">
    <div class="container">
      <AccountInfo />
    </div>
  </div>
</template>

<script>
import AccountInfo from "@/components/AccountInfo.vue";

export default {
  data: () => {
    return {
      sns_btns: [
        {
          id: 0,
          linkURL: "img/content/facebook.png",
          title: "페이스북"
        }
      ]
    };
  },
  components: {
    AccountInfo
  }
};
</script>

<style scoped>
p {
  padding-top: 10px;
  padding-bottom: 10px;
}
.main-div {
  padding-top: 20px;
  padding-bottom: 20px;
}
.fullheight {
  height: 100%;
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
