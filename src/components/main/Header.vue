<template>
  <div class="pt-1 pb-4 flex items-center sm:space-x-10 md:space-x-24">
    <div>
      <p class="text-gray-500">
        Search, and descaver your favorite anime or manga!
        <span class="hidden md:flex mx"
          >Here is where you can find more informations abour your favorite
          anime or manga!</span
        >
      </p>
      <button
        type="button"
        @click="showModal"
        class="px-4 py-2 md:mt-8 mt-4 text-sm hover:text-red-600 font-semibold rounded-full border hover:border-red-200 text-white bg-red-600 hover:bg-transparent focus:outline-none focus:ring-1 focus:ring-red-600 focus:ring-offset-2"
      >
        Start Searching
      </button>
      <SearchModal v-show="isModalVisible" @close="closeModal" />
    </div>
    <div class="flex-shrink-0">
      <img
        class="lg:h-96 md:h-80 h-60 object-cover"
        alt="Girl in Red kimono"
        src="../../assets/img/circulo_2.png"
      />
    </div>
  </div>
</template>

<script>
import SearchModal from "../Modal/SearchModal.vue";

export default {
  name: "Header",
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
