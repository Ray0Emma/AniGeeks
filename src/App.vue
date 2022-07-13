<template>
  <Navbar />
  <router-view class="container mx-auto" />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
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

::-webkit-scrollbar {
  width: 9px;
  height: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #e74242;
}
</style>
