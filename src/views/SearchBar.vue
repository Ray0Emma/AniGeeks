<template>
  <div class="container mx-auto px-8">
    <div class="my-5">Anime Results for {{ input }}.</div>
    <Card :medias="animeResult" />
    <div class="my-5">Manga Results for {{ input }}.</div>
    <Card :medias="mangaResult" />
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
      totalResult: 0,
      type: "ANIME",
      animeResult: [],
      mangaResult: [],
    };
  },

  async created() {
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

    this.mangaResult = result.data.data.Page.media;
  },

  components: {
    Card,
  },
  methods: {},
};
</script>
