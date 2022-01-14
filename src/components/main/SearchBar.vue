<template>
  <div class="h-56 pt-20 border-t border-red-300">
    <form action="">
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
export default {};
</script>
