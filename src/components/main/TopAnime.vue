<template>
  <div>
    <h5 class="font-semibold text-4xl">
      <Icon icon="mdi:fire" class="text-red-700 inline" />
      Top <span class="text-red-700">6</span> Anime
    </h5>
    <p class="text-gray-400 mt-4">Based on users rating</p>
    <Card :medias="topAnime" />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import Card from "./Card.vue";
// import apiData from "../../sevices/apiData";
export default {
  data() {
    return {
      topAnime: [],
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
                  media(type: ANIME, sort: TRENDING_DESC) {
                    id
                    title {
                      romaji
                      english
                    }
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

    // Define the config we'll need for our Api request
    var url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      };

    // Make the HTTP Api request
    await fetch(url, options)
      .then(handleResponse)
      .then((data) => (this.topAnime = data.data.Page.media))
      .catch(handleError);

    function handleResponse(response) {
      return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
      });
    }

    function handleError(error) {
      alert("Error, check console");
      console.error(error);
    }

    // const result = apiData
    //   .getTitle({
    //     query,
    //     variables,
    //   })
    //   .catch((err) => console.log(err));

    // this.topAnime = result.data.data.Page.media.filter((a) => {
    //   return a.isAdult === false;
    // });
  },

  components: {
    Icon,
    Card,
  },
};
</script>
