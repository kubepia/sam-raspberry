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
              <router-link class="navbar-item" to="/">국내</router-link>
              <router-link class="navbar-item" to="/">해외</router-link>
              <router-link class="navbar-item" to="/">Live</router-link>
            </div>
            <span class="navbar-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="navbar-end navbar-menu">
              <router-link class="navbar-item" to="/">login</router-link>
              <router-link class="navbar-item" to="/">signup</router-link>
            </div>
          </div>
        </nav>
      </div>
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container">
          <div class="card">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="img/parasite.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="img/parasite.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
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
