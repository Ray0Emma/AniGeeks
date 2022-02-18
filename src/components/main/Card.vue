<template>
  <div
    class="mt-12 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 place-content-center"
  >
    <div v-for="(media, index) in medias" :key="index">
      <div
        class="transform hover:scale-105 transition ease-in-out duration-500"
      >
        <!-- media link -->
        <a :href="media.id">
          <img
            :src="media.coverImage.large"
            :alt="
              media.title.english === null
                ? media.title.romaji
                : media.title.english
            "
            class="relative h-60 w-full object-cover object-top shadow-xl rounded"
          />

          <p
            v-if="media.averageScore"
            class="absolute left-1 bottom-1 text-xs text-yellow-500"
          >
            <Icon icon="fa-solid:star" class="inline mb-1 mr-2" />{{
              media.averageScore
            }}%
          </p>
        </a>
      </div>
      <p class="font-semibold text-gray-600 mt-3 mb-3 capitalize truncate">
        {{
          media.title.english === null
            ? media.title.romaji
            : media.title.english.toLowerCase()
        }}
      </p>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Card",
  props: {
    medias: Array,
    // mediaId: {
    //   type: Number,
    //   default: 0,
    //   requred: true,
    // },
    mediaType: {
      type: String,
      default: "ANIME",
    },
  },
  components: {
    Icon,
  },
};
</script>
