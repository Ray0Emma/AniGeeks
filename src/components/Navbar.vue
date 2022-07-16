<template>
  <nav
    class="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-40"
  >
    <div class="max-w-6xl mx-auto px-4">
      <!-- Website Logo -->
      <div class="flex justify-center py-6 px-2">
        <router-link to="/">
          <img
            src="../assets/img/logo/torii-gate.png"
            alt="torii-gate logo"
            class="h-8 w-8 mr-2 inline"
          />
          <span class="font-semibold text-gray-700 text-xl">AniGeeks</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
