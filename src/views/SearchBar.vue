<template>
  <div class="container mx-auto px-8 mb-20">
    <vue-progress-bar v-if="loading"></vue-progress-bar>
    <div v-if="animeResult.length && mangaResult.length">
      <div class="my-10 text-2xl">
        Results for
        <span class="text-red-700 text-3xl font-extrabold capitalize">{{
          input
        }}</span>
      </div>
      <div class="" v-if="animeResult.length">
        <div
          class="py-2 text-xl w-2/12 font-semibold rounded text-white bg-red-600 border-transparent"
        >
          Anime
        </div>
        <Card :medias="animeResult" :mediaType="type.toLowerCase()" />
      </div>
      <div class="" v-if="mangaResult.length">
        <div
          class="mt-20 py-2 text-xl w-2/12 font-semibold rounded text-white bg-red-600 border-transparent"
        >
          Manga
        </div>
        <Card :medias="mangaResult" :mediaType="mangatype" />
      </div>
    </div>
    <div v-else>
      <div class="my-10 text-2xl">
        No Results for
        <span class="text-red-700 text-3xl font-extrabold capitalize">{{
          input
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/main/Card.vue";
import apiData from "../sevices/apiData";
export default {
  name: "SearchBar",
  data() {
    return {
      input: this.$route.query.search,
      loading: false,
      totalResult: 0,
      type: "ANIME",
      mangatype: "manga",
      animeResult: [],
      mangaResult: [],
    };
  },

  async created() {
    this.loading = true;
    this.$Progress.start();
    const query = `
        query ($id: Int, $page: Int, $perPage: Int, $search: String, $type: MediaType) {
          Page(page: $page, perPage: $perPage) {
            pageInfo {
              total
              currentPage
              lastPage
              hasNextPage
              perPage
            }
            media(id: $id, search: $search, type: $type, sort: POPULARITY_DESC) {
              id
              idMal
              title {
                romaji
                english
                native
              }
              type
              endDate {
                year
                month
                day
              }
              startDate {
                year
                month
                day
              }
              studios(isMain: true) {
                nodes {
                  name
                }
              }
              isAdult
              source
              genres
              volumes
              episodes
              chapters
              siteUrl
              status
              averageScore
              meanScore
              popularity
              description
              favourites
              coverImage {
                extraLarge
                medium
                large
                color
              }
            }
          }
    }`;

    let variables = {
      search: this.input,
      type: this.type,
      page: 1,
      perPage: 6,
    };

    let result = await apiData
      .getTitle({
        query,
        variables,
      })
      .catch((err) => console.log(err));

    this.totalResult = result.data.data.Page.media.length;
    this.animeResult = result.data.data.Page.media;

    variables = {
      search: this.input,
      type: "MANGA",
      page: 1,
      perPage: 6,
    };

    result = await apiData
      .getTitle({
        query,
        variables,
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      this.$Progress.finish();
      this.loading = false;
    }, 300);
    if (this.$Progress.finish()) {
      this.loading = false;
    }

    this.mangaResult = result.data.data.Page.media;
  },

  components: {
    Card,
  },
  methods: {},
};
</script>
