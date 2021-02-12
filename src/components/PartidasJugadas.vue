<template>
  <v-chip color="grey" text-color="white">
    <v-avatar left class="grey darken-4"> {{ partidasJugadas }} </v-avatar>
    Partidas
  </v-chip>
</template>
<script>
export default {
  name: "partidasJugadas",
  props: {
    partidasJugadas: {
      type: Number,
    },
  },
  methods: {},
};
</script>