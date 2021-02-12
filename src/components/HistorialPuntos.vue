<template>
  <div class="wrapper">
    <div v-for="item of this.items" :key="item">
      <div class="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistorialPuntos",
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      i: "",
    };
  },
};
</script>

<style>
.wrapper {
  display: flex;
  max-height: 40px;
  border: 1px solid rgb(68, 64, 64);
  overflow-x: auto;
}
.wrapper::-webkit-scrollbar {
  width: 0;
}

.wrapper .item {
  min-width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: rgba(38, 46, 48, 0.726);
  margin-right: 1px;
}
</style>