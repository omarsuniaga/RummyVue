<template>
  <v-chip color="red" text-color="white">
    <v-avatar left class="red darken-4"> {{ derrotas }} </v-avatar>
    Derrotas
  </v-chip>
</template>
<script>
export default {
  name: "derrotas",
  props: {
    derrotas: {
      type: Number,
    },
  },
  methods: {},
};
</script>