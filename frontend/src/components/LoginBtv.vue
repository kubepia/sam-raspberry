<template>
  <form @submit.prevent="login">
    <div class="field">
      <div class="control has-icons-left">
        <input type="email" placeholder="이메일을 입력해주세요." v-model="user_email" class="input" required />
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <div class="control has-icons-left">
        <input type="password" placeholder="비밀번호를 입력해주세요." v-model="user_pw" class="input" required />
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <div class="columns is-left is-gapless">
        <div class="column is-4-widescreen">
          <label class="title-color3">
            <input type="checkbox" />
            아이디 저장
          </label>
        </div>
        <div class="column is-4-widescreen">
          <label class="title-color3">
            <input type="checkbox" />
            자동 로그인
          </label>
        </div>
      </div>
    </div>
    <br />
    <div class="field">
      <button class="button is-fullwidth is-rounded grey-color">로그인</button>
    </div>
    <div class="columns is-centered is-gapless">
      <div class="column">
        <a class="title-color3" to="#">아이디 찾기</a>
      </div>
      <div class="column">
        <a class="title-color3" to="#">비밀번호 재설정</a>
      </div>
      <div class="column">
        <a class="title-color3" to="#">회원가입</a>
      </div>
    </div>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "LoginBtv",
  data: () => {
    return {
      errors: [],
      user_email: "a@g",
      user_pw: "passw0rd"
    };
  },
  created() {
    // this.getMovies('action')
  },
  methods: {
    login: function(event) {
      //post_url
      var post_url = "/api/login/";
      //파라메터
      var params = new URLSearchParams();
      params.append("user_email", this.user_email);
      params.append("user_pw", this.user_pw);
      alert(this.user_email);
      let router = this.$router;

      axios
        .post(post_url, params)
        .then(res => {
          //console.log(res.data);
          if (res.data.status == "ok") {
            //console.log(res.data.data);
            router.go(-1);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


<style lang="scss">
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
  background: #272b30;
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
.title-color3 {
  color: #ffffff;
}
</style>
