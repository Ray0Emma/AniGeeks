<template>
  <div>
    <Header />
    <main>
      <TopAnime />
      <TopManga />
    </main>
  </div>
</template>

<script>
import Header from "../components/main/Header.vue";
import TopAnime from "../components/main/TopAnime.vue";
import TopManga from "../components/main/TopManga.vue";
export default {
  name: "Home",
  components: {
    Header,
    TopAnime,
    TopManga,
  },
};
</script>

<style scoped></style>
