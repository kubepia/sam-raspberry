<template>
  <div class="main-div">
    <form action="/" class="box">
      <div class="field">
        <div class="control columns is-gapless is-multiline is-mobile">
          <div class="column is-one-quarter">이름</div>
          <div class="column is-fullwidth">
            <input
              type="text"
              class="input"
              style="background-color: transparent;"
              v-bind:value="name"
              readonly
            />
          </div>
        </div>
        <div class="control columns is-gapless is-multiline is-mobile">
          <div class="column is-one-quarter">생년월일</div>
          <div class="column is-fullwidth">
            <input
              type="text"
              class="input"
              style="background-color: transparent;"
              v-bind:value="birth"
              readonly
            />
          </div>
        </div>
        <div class="control columns is-gapless is-multiline is-mobile">
          <div class="column is-one-quarter">이름</div>
          <div class="column is-fullwidth">
            <input
              type="text"
              class="input"
              style="background-color: transparent;"
              v-bind:value="name"
              readonly
            />
          </div>
        </div>
        <div class="control has-icons-left">생년월일</div>
        <div class="control has-icons-left">
          성별
          <input
            type="text"
            class="input"
            style="background-color: transparent;"
            v-bind:value="gender"
            readonly
          />
        </div>
        <div class="control has-icons-left">
          휴대폰
          <input
            type="num"
            placeholder="휴대폰 번호를 입력해주세요."
            class="input"
            v-bind:value="hp"
            required
          />
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
        </div>
        <div class="control has-icons-left">
          이메일
          <input
            type="email"
            placeholder="이메일을 입력해주세요."
            class="input"
            v-bind:value="email"
            required
          />
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
        </div>
      </div>
      <br />
      <div class="field">
        <button class="button is-fullwidth is-rounded grey-color">수정</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["name", "birth", "gender", "hp", "email"]
};
</script>
<style scoped>
.main-div {
  padding: 20px;
}
.field {
  padding: 10px;
}
.control {
  padding-bottom: 10px;
}
</style>