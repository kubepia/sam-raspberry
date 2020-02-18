<template>
  <form action="/" v-model="login_form">
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
        </div>''
        <div class="column is-4-widescreen">
          <label class="title-color3">
            <input type="checkbox" />
            자동 로그인
          </label>
        </div>
      </div>
    </div>''
    <br />
    <div class="field">
      <button class="button is-fullwidth is-rounded grey-color" v-on:click="login">로그인</button>
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
      user_email: "",
      user_pw: ""
      //movies: [],
      //count: 0
    };
  },
  created() {
    // this.getMovies('action')
  },
  methods: {
    login: function(event) {
      var url = "http://localhost:8090/users/" + this.user_email;

      axios
        .get(url)
        .then(res => {
          console.log(res.data);
          //this.count = res.data.length;
          //this.movies = res.data;
        })
        .catch(error => {
          console.log(error);
        });
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
      //alert(url);

      // `event` 는 네이티브 DOM 이벤트입니다
      if (event) {
        //alert(event.target.tagName);
      }
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
