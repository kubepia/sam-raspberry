<template>
  <div id="app">
    <section class="hero is-primary">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <nav class="main-nav navbar">
          <div class="container">
            <div class="navbar-start">
              <router-link class="navbar-item" to="/">
                <img src="img/logo.png" alt class="logo" />
              </router-link>
              <router-link class="navbar-item" to="/">Home</router-link>
              <router-link class="navbar-item" to="/all">영화</router-link>
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
              <router-link class="navbar-item" to="/account">signup</router-link>
            </div>
          </div>
        </nav>
      </div>
      <router-view />

      <Footer />
    </section>
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
</style>
