<template>
  <div class="pt-1 pb-4 flex items-center sm:space-x-10 md:space-x-24">
    <div class="md:space-y-8 space-y-4">
      <p class="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        accusantium exercitationem!
        <span class="hidden md:flex"
          >ipsam fugit nesciunt laborum, consectetur libero adipisci unde ullam
          consectetur adipisicing elit. Dicta voluptates!</span
        >
      </p>
      <button
        type="button"
        @click="showModal"
        class="px-4 py-2 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
      >
        Start Searching
      </button>
      <SearchModal v-show="isModalVisible" @close="closeModal" />
    </div>
    <div class="flex-shrink-0">
      <img
        class="lg:h-96 md:h-80 h-60 object-cover"
        alt="Girl in Red kimono"
        src="../assets/img/circulo_2.png"
      />
    </div>
  </div>
</template>

<script>
import SearchModal from "../components/Modal/SearchModal.vue";
export default {
  name: "Home",
  components: {
    SearchModal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.bubble::before {
  content: "";
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  /* position: absolute; */
  bottom: 0;
  z-index: -1;
  width: 100%;
  background-color: #0f0f10;
  height: 85%;
}
</style>
