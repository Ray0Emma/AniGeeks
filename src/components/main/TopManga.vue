<template>
  <div class="mt-12 mb-12">
    <h5 class="font-semibold text-4xl">
      <Icon icon="mdi:fire" class="text-red-700 inline" />
      Top <span class="text-red-700">6</span> Manga
    </h5>
    <p class="text-gray-400 mt-4">Based on users rating</p>
    <Card :medias="topManga" :mediaType="mediaType" />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import Card from "./Card.vue";
import apiData from "../../sevices/apiData";
export default {
  name: "TopManga",
  data() {
    return {
      topManga: [],
      mediaType: "MANGA",
    };
  },

  async mounted() {
    let query = `
          query ($page: Int, $perPage: Int) {
              Page(page: $page, perPage: $perPage) {
                pageInfo {
                  total
                  currentPage
                  lastPage
                  hasNextPage
                  perPage
                }
                  media(type: MANGA, sort: TRENDING_DESC) {
                    id
                    title {
                      romaji
                      english
                    }
                    averageScore
                    siteUrl
                    isAdult
                    coverImage {
                      extraLarge
                      large
                      medium
                    }
                }
      }
    }`;

    let variables = {
      page: 1,
      perPage: 6,
    };

    const result = await apiData
      .getTitle({
        query,
        variables,
      })
      .catch((err) => console.log(err));

    this.topManga = result.data.data.Page.media.filter((a) => {
      return a.isAdult === false;
    });
  },

  components: {
    Icon,
    Card,
  },
};
</script>
