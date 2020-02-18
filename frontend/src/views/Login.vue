
<template>
    <div >
        <section class="hero  is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">로그인</h1>
                </div>
            </div>
        </section>
        <div class="columns is-centered">
            <div class="column is-4-widescreen">
                <div class="box fullheight">
                    <p class="label has-text-weight-bold has-text-white is-size-4">Btv계정으로 로그인</p>
                    <LoginBtv />
                </div>
            </div>

            <div class="column is-4-widescreen">
                <div class="box fullheight">
                    <p class="label has-text-weight-bold has-text-white is-size-4">SNS계정으로 로그인</p>
                    <LoginSNS
                        v-for="btn in sns_btns"
                        v-bind:key="btn.id"
                        :title="btn.title"
                        :iconName="btn.iconName"
                    />
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
                    title: "페이스북",
                    iconName: "facebook"
                },
                {
                    id: 1,
                    title: "트위터",
                    iconName: "twitter"
                },
                {
                    id: 2,
                    title: "구글",
                    iconName: "google"
                }
            ]
        };
    },
    components: {
        LoginSNS,
        LoginBtv
    }
};
</script>

<style lang="scss">
p {
    padding-top: 10px;
    padding-bottom: 10px;
}
.main-div {
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
