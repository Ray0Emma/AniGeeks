<template>
  <div>
    <div v-for="(media, index) in medias" :key="index">
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
        class="absolute left-1 bottom-1 text-xs text-black"
      >
        {{
          media.title.english === null
            ? media.title.romaji
            : media.title.english
        }}
      </p>
    </div>
  </div>
</template>
<script>
// import { Icon } from "@iconify/vue";
export default {
  data() {
    return {};
  },
  name: "MediaFullPage",
  props: {
    medias: Array,
    mediaId: {
      type: Number,
      default: 0,
      requred: true,
    },
    mediaType: {
      type: String,
    },
  },
  components: {
    // Icon,
  },
};
</script>
