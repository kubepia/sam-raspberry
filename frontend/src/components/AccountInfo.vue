<template>
    <div >
        <div class="columns is-centered">
            <div class="column is-5-widescreen box">
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">이름</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded has-icons-left">
                                <input
                                    class="input"
                                    type="text"
                                    placeholder="Name"
                                    v-model="user_name"
                                    readonly
                                    disabled
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">이메일</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded has-icons-left has-icons-right">
                                <input
                                    class="input is-success"
                                    type="email"
                                    v-model="user_email"
                                    readonly
                                    disabled
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">휴대폰</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded has-icons-left has-icons-right">
                                <input
                                    class="input"
                                    type="tel"
                                    placeholder="휴대폰 번호를 입력해주세요."
                                    v-model="user_tel"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-mobile-alt"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">닉네임</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded has-icons-left has-icons-right">
                                <input
                                    class="input"
                                    type="text"
                                    placeholder="닉네임을 입력해주세요."
                                    v-model="user_nickname"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-mobile-alt"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">멤버쉽</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded has-icons-left has-icons-right">
                                <input
                                    class="input"
                                    type="text"
                                    v-model="membership_title"
                                    readonly
                                    disabled
                                />
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label">
                        <!-- Left empty for spacing -->
                    </div>
                    <div class="field-body">
                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-primary" v-on:click="accountUpdate">수 정</button>
                            </div>
                            <div class="control">
                                <button class="button is-primary" v-on:click="cancel">취 소</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "AccountInfo",
    data: () => {
        return {
            errors: [],
            user_email: "a@g",
            user_tel: "",
            user_name: "",
            user_nickname: "",
            membership: "",
            membership_title: "X"
        };
    },
    created() {
        this.user_email = this.$store.state.userEmail;
        //post_url
        var apiUrl = `/api/user/${this.user_email}`;
        let self = this;
        axios
            .get(apiUrl)
            .then(res => {
                console.log(res);
                if (res.status == 200) {
                    self.user_name = res.data.userName;
                    self.user_email = res.data.userEmail;
                    self.user_tel = res.data.userTel;
                    self.user_nickname = res.data.userNickName;
                    self.membership = res.data.membership;
                    self.membership = !!self.membership ? "O" : "X";
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        cancel: function(event) {
            let router = this.$router;

            router.go(-1);
        },
        accountUpdate: function(event) {
            //post_url
            var apiUrl = "/api/user";
            //파라메터
            var params = new URLSearchParams();
            params.append("user_email", this.user_email);
            params.append("user_tel", this.user_tel);
            params.append("user_nickname", this.user_nickname);
            let self = this;
            axios
                .post(apiUrl, params)
                .then(res => {
                    // alert("2");
                    //console.log(res.data);
                    if (res.status == 200) {
                        self.user_name = res.data.userName;
                        self.user_email = res.data.userEmail;
                        self.user_tel = res.data.userTel;
                        self.user_nickname = res.data.userNickName;
                        self.membership = res.data.membership;
                        self.membership = !!self.membership ? "O" : "X";
                    }
                    
                })
                .catch(error => {
                    // alert("3");
                    console.log(error);
                });
        }
    }
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