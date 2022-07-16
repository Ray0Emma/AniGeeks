<template>
  <div>
    <div v-if="img != ''" class="w-full">
      <img :src="img" class="object-fill w-full shadow-xl rounded" />
    </div>
    <!-- {{ medias.coverImage.extraLarge }} -->
  </div>
</template>
<script>
//
import apiData from "../sevices/apiData";
// import { Icon } from "@iconify/vue";
export default {
  data() {
    return {
      medias: [],
      mediaType: this.$route.params.type.toUpperCase(),
      mediaId: this.$route.params.id,
      img: String,
    };
  },
  async mounted() {
    console.log(this.mediaType);
    let query = `
          query ($id: Int, $type: MediaType) {
              Media (id: $id, type: $type) {         
                title {
                    english
                    romaji
                    native
                }
                status
                startDate {
                    year
                }
                type
                genres
                episodes
                id
                isFavourite
                chapters
                duration
                status
                nextAiringEpisode {
                    airingAt
                }
                relations {
                    nodes {
                        id
                        type
                        title {
                            english
                            romaji
                        }
                        coverImage {
                            extraLarge
                            medium
                            large
                            color
                        } 
                    }
                }
                description (asHtml: true)
                startDate {
                    day
                    month
                    year
                }
                endDate {
                    day
                    month
                    year
                }
                coverImage {
                    extraLarge
                    medium
                    color
                }
                bannerImage
                averageScore
                characters(sort: FAVOURITES_DESC) {
                    nodes {
                        name {
                            first
                            last
                        }
                        image {
                            medium
                            large
                        }
                        id
                    }
                }
                streamingEpisodes {
                    title
                    thumbnail
                    url
                }
              }
    }`;

    let variables = {
      id: this.mediaId,
      type: this.mediaType,
    };

    const result = await apiData
      .getTitle({
        query,
        variables,
      })
      .catch((err) => console.log(err));

    this.medias = result.data.data.Media;

    this.img = result.data.data.Media.bannerImage;
    console.log(this.img);
  },

  components: {
    // Icon,
  },
};
</script>
