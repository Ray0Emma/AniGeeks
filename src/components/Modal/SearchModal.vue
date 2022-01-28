<template>
  <div class="modal-backdrop">
    <div class="modal">
      <slot name="header">
        <button type="button" class="btn-close" @click="close">x</button></slot
      >

      <form @submit.prevent="search">
        <input
          type="text"
          placeholder="Search..."
          spellcheck="false"
          autofocus
          v-model="searchText"
        />
        <button class="ml-2" type="submit" :disabled="buttonDisabled">
          <Icon icon="fluent:send-24-filled" />
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
    };
  },
  methods: {
    close() {
      this.$emit("close");
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
  background-color: rgba(0, 0, 0, 0.3);
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

.modal-header,
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

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
