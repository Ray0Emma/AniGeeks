<template>
  <div class="modal-backdrop">
    <div
      class="modal shadow-md h-24 w-2/4 py-2 px-4 rounded place-content-center"
    >
      <slot name="header">
        <button type="button" class="btn-close" @click="close">x</button>
      </slot>

      <form @submit.prevent="search">
        <input
          class="border-b w-10/12 border-gray-600 focus:outline-none leading-3"
          v-on:keyup.enter="search"
          type="text"
          placeholder="Search..."
          spellcheck="false"
          autofocus
          v-model="searchText"
        />
        <button
          class="ml-4"
          type="submit"
          :disabled="buttonDisabled"
          role="button"
        >
          <Icon
            icon="fluent:send-24-filled"
            :inline="true"
            width="27"
            height="27"
          />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "SearchModal",
  data() {
    return {
      buttonDisabled: true,
      searchText: "",
      searchResult: [],
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },

    search() {
      this.$router.push({
        path: "/search",
        query: { search: this.searchText },
      });
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.781);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

/* .modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
} */

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #e74242;
  background: transparent;
}
</style>
