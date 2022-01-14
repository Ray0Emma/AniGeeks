<template>
  <Navbar />
  <main class="container mx-auto px-8">
    <SearchBar />
  </main>
  <router-view class="container mx-auto px-8" />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import SearchBar from "./components/main/SearchBar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    SearchBar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
