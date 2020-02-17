<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
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
              <router-link class="navbar-item" to="/">signup</router-link>
            </div>
          </div>
        </nav>
      </div>
      <router-view/>
      <!-- Hero content: will be in the middle -->
      <!-- <div class="hero-body">
        <div class="container">
          <div class="card">
            <div class="card-image">
              <figure class="image is-3by1">
                <img src="img/content/parasite.png" alt="Placeholder image" />
              </figure>
            </div>
            <div style="position: absolute;bottom: 3em;left:3em">
              기생충 이벤트 보기
            </div>
          </div>
        </div>
      </div> -->
    </section>
  </div>
</template>

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
