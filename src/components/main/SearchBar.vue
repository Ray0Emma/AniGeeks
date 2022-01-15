<template>
  <div class="h-56 pt-20 border-t border-red-300">
    <form action="" @submit.prevent="getAnime">
      <div class="grid grid-cols-7 gap-4 place-content-center">
        <input
          type="text"
          placeholder="Type your anime name here"
          class="col-start-3 col-span-2 rounded-lg shadow-md py-2 px-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
        />
        <button
          class="col-start-5 col-span-1 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-600"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    getAnime() {
      // Here we define our query as a multi-line string
      // Storing it in a separate .graphql/.gql file is also possible
      let query = `
      query ($id: Int) {
        Media (id: $id, type: MANGA) { 
          id
          title {
            romaji
            english
            native
          }
          type
          genres
          episodes
          coverImage {
            extraLarge
            medium
            color
          }
          bannerImage
          averageScore
        }
      }
      `;

      // Define our query variables and values that will be used in the query request
      let variables = {
        id: 98569,
      };

      // Define the config we'll need for our Api request
      let url = "https://graphql.anilist.co",
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
      fetch(url, options)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);

      function handleResponse(response) {
        console.log("hi1");
        return response.json().then(function (json) {
          return response.ok ? json : Promise.reject(json);
        });
      }

      function handleData(data) {
        console.log("hi2");
        console.log(data);
      }

      function handleError(error) {
        console.log("hi3");
        alert("Error, check console");
        console.error(error);
      }
    },
  },
};
</script>
