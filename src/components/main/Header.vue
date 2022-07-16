<template class="relative">
  <div class="pt-1 flex pb-4 items-center sm:space-x- md:space-x- px-10">
    <div class="bg-red-600 -z-10 w-8 sm:w-20">
      <div class="">
        <img
          class="object-cover"
          alt="Girl in Red kimono"
          src="https://img.icons8.com/emoji/96/000000/white-flower.png"
        />
      </div>
      <div class="">
        <img
          class="object-cover"
          alt="Girl in Red kimono"
          src="https://img.icons8.com/emoji/96/000000/white-flower.png"
        />
      </div>
      <div class="">
        <img
          class="object-cover bg-opacity-40"
          alt="Girl in Red kimono"
          src="https://img.icons8.com/emoji/96/000000/white-flower.png"
        />
      </div>
      <div class="hidden md:flex">
        <img
          class="object-cover"
          alt="Girl in Red kimono"
          src="https://img.icons8.com/emoji/96/000000/white-flower.png"
        />
      </div>
      <div class="hidden md:flex">
        <img
          class="object-cover"
          alt="Girl in Red kimono"
          src="https://img.icons8.com/emoji/96/000000/white-flower.png"
        />
      </div>
    </div>

    <div class="mx-auto">
      <h1 class="text-md sm:text-3xl md:text-5xl lg:text-7xl font-semibold">
        Your Portal to the <br />
        <span class="">Anime World </span>
      </h1>
      <button
        type="button"
        @click="showModal"
        class="md:px-8 md:py-4 px-2 py-2 md:mt-8 mt-4 text-xs md:text-sm hover:text-red-600 font-semibold rounded-full border hover:border-red-200 text-white bg-red-600 hover:bg-transparent focus:outline-none focus:ring-1 focus:ring-red-600 focus:ring-offset-2"
      >
        Start Searching
      </button>
      <SearchModal v-show="isModalVisible" @close="closeModal" />
    </div>
    <div class="bg-red-600 -z-10 w-8 sm:w-20">
      <div class="">
        <img
          class="object-cover"
          alt="Girl in Red kimono"
          src="https://img.icons8.com/emoji/96/000000/white-flower.png"
        />
      </div>
      <div class="">
        <img
          class="object-cover"
          alt="Girl in Red kimono"
          src="https://img.icons8.com/emoji/96/000000/white-flower.png"
        />
      </div>
      <div class="">
        <img
          class="object-cover bg-opacity-40"
          alt="Girl in Red kimono"
          src="https://img.icons8.com/emoji/96/000000/white-flower.png"
        />
      </div>
      <div class="hidden md:flex">
        <img
          class="object-cover"
          alt="Girl in Red kimono"
          src="https://img.icons8.com/emoji/96/000000/white-flower.png"
        />
      </div>
      <div class="hidden md:flex">
        <img
          class="object-cover"
          alt="Girl in Red kimono"
          src="https://img.icons8.com/emoji/96/000000/white-flower.png"
        />
      </div>
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
