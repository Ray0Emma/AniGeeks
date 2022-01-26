<template>
  <div>
    <h5 class="font-semibold text-4xl">
      <Icon icon="mdi:fire" class="text-red-700 inline" />
      Top <span class="text-red-700">6</span> Anime
    </h5>
    <p class="text-gray-400 mt-4">Based on users rating</p>
    <Card :medias="medias" />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import Card from "./Card.vue";
export default {
  data() {
    return {
      medias: [
        {
          title: "Hunter x Hunter",
          src: "",
          rating: "9,96",
        },
        {
          title: "Hunter x Hunter",
          src: "src/assets/img/hero.jpg",
          rating: "9,96",
        },
        {
          title: "Hunter x Hunter",
          src: "src/assets/img/hero.jpg",
          rating: "9,96",
        },
        {
          title: "Hunter x Hunter",
          src: "src/assets/img/hero.jpg",
          rating: "9,96",
        },
        {
          title: "Hunter x Hunter",
          src: "src/assets/img/hero.jpg",
          rating: "9,96",
        },
        {
          title: "Hunter x Hunter",
          src: "src/assets/img/hero.jpg",
          rating: "9,96",
        },
      ],
    };
  },

  components: {
    Icon,
    Card,
  },
};
</script>
