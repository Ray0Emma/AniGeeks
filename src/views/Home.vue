<template>
  <div class="pt-1 flex items-center space-x-24">
    <div class="space-y-8">
      <p class="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        accusantium exercitationem ipsam fugit nesciunt laborum, consectetur
        libero adipisci unde ullam voluptates corporis, mollitia non ipsum
        ratione similique quos animi tenetur!
      </p>
      <button
        class="px-4 py-2 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
      >
        Start Searching
      </button>
    </div>
    <div class="flex-shrink-0">
      <img
        class=""
        alt="Girl in Red kimono"
        src="../assets/img/circulo_2.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
