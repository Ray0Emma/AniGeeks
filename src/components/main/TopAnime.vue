<template>
  <div>
    <h5 class="font-semibold text-4xl">
      <Icon icon="mdi:fire" class="text-red-700 inline" />
      Top <span class="text-red-700">6</span> Anime
    </h5>
    <p class="text-gray-400 mt-4">Based on users rating</p>
    <div class="mt-12 grid grid-cols-6 gap-2 place-content-center">
      <div v-for="(media, index) in medias" :key="index">
        <div>
          <img
            src="Hero.jpg"
            alt=""
            max-height="400"
            max-width="240"
            class="shadow"
          />
          <p>{{ media.title }}</p>
          <p>{{ media.rating }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
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
  },
};
</script>
