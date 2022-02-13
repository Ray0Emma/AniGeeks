<!-- eslint-disable -->
<template>
  <footer class="bg-white mt-9 inset-x-0 bottom-0">
    <div class="container flex items-center justify-center px-4 py-8 mx-auto">
      <div class="flex flex-wrap justify-center">
        <ul class="flex items-center space-x-4">
          <li>
            <a href="https://github.com/Ray0Emma">
              <Icon
                icon="entypo-social:github-with-circle"
                :inline="true"
                width="27"
                height="27"
              />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/farah.a.elahmadi">
              <Icon
                icon="entypo-social:facebook-with-circle"
                :inline="true"
                width="27"
                height="27"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ahmadiF__">
              <Icon
                icon="entypo-social:twitter-with-circle"
                :inline="true"
                width="27"
                height="27"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/farah-ahmadi/">
              <Icon
                icon="entypo-social:linkedin-with-circle"
                :inline="true"
                width="27"
                height="27"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<!-- eslint-disable -->
<script>
import { Icon } from "@iconify/vue";
/* eslint-disable */
export default {
  name: "Footer",
  components: {
    Icon,
  },
};
</script>
