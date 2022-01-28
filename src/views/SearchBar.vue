<template>
  <div class="container mx-auto px-8">
    <div class="mb-5">
      {{ input }}
    </div>
    <Card :medias="searchResult" />
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
      searchResult: [],
    };
  },

  async created() {
    const query = `
        query ($id: Int, $page: Int, $perPage: Int, $search: String) {
          Page(page: $page, perPage: $perPage) {
            pageInfo {
              total
              currentPage
              lastPage
              hasNextPage
              perPage
            }
            media(id: $id, search: $search, sort: POPULARITY_DESC) {
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
      page: 1,
      perPage: 6,
    };

    const result = await apiData
      .getTitle({
        query,
        variables,
      })
      .catch((err) => console.log(err));

    this.searchResult = result.data.data.Page.media;
  },

  components: {
    Card,
  },
  methods: {},
};
</script>
