<template>
    <div id="app">
        <div class="section" style="min-height:800px;">
            <section class="hero is-primary">
                <!-- Hero header: will stick at the top -->
                <div class="hero-head">
                    <nav class="main-nav navbar">
                        <div class="container">
                            <div class="navbar-brand log-background">
                                <router-link class="navbar-item" to="/">
                                    <span style="width:100px">
                                        <!-- <i class="fas fa-tv"></i> -->
                                        <b>KUBE TV</b>
                                    </span>
                                </router-link>
                            </div>
                            <div class="navbar-start">
                                <router-link class="navbar-item" to="/">Home</router-link>
                                <router-link class="navbar-item" to="/local">국내</router-link>
                                <router-link class="navbar-item" to="/foreign">해외</router-link>
                            </div>
                            <span class="navbar-toggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div class="navbar-end navbar-menu">
                                <router-link class="navbar-item" to="/login">login</router-link>
                                <router-link class="navbar-item" to="/login">signup</router-link>
                                <router-link class="navbar-item" to="/account">
                                    <span class="icon has-text-white">
                                        <i class="fas fa-lg fa-user"></i>
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <router-view />
        </div>

        <Footer />
    </div>
</template>
<script>
// @ is an alias to /src
import Footer from "@/views/Footer.vue";

export default {
    name: "Home",
    components: {
        Footer
    }
};
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.log-background {
    background-color: #f2540a;
}
</style>
