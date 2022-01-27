<template>
  <div
    class="mt-12 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 place-content-center"
  >
    <div v-for="(media, index) in medias" :key="index">
      <div>
        <div class="relative">
          <img
            :src="media.coverImage.large"
            :alt="
              media.title.english === null
                ? media.title.romaji
                : media.title.english
            "
            max-height="400"
            max-width="240"
            class="shadow"
          />
          <p class="absolute left-1 bottom-1 text-xs">
            <Icon icon="akar-icons:star" class="inline mb-1 mr-2" />{{
              media.rating
            }}
          </p>
        </div>
        <p class="font-semibold text-gray-500 mt-3 mb-3">
          {{
            media.title.english === null
              ? media.title.romaji
              : media.title.english
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Card",
  props: {
    medias: Array,
  },
  components: {
    Icon,
  },
};
</script>
