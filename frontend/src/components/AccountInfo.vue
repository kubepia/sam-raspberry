<template>
    <div class="columns is-centered">
        <div class="column">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">이름</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded has-icons-left">
                            <input class="input" type="text" placeholder="Name" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control is-expanded has-icons-left has-icons-right">
                            <input
                                class="input is-success"
                                type="email"
                                placeholder="Email"
                                value="alex@smith.com"
                            />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label">efe</div>
                <div class="field-body">
                    <div class="field is-expanded">
                        <div class="field has-addons">
                            <p class="control">
                                <a class="button is-static">010</a>
                            </p>
                            <p class="control is-expanded">
                                <input class="input" type="tel" placeholder="Your phone number" />
                            </p>
                        </div>
                        <p class="help">Do not enter the first zero</p>
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
                            <button class="button is-primary ">수 정</button>
                        </div>
                        <div class="control">
                            <button class="button is-primary ">취 소</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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