<template>
  <div class="mx-auto">
    <v-chip color="green" text-color="white">
      <v-avatar left class="green darken-4"> {{ victorias }} </v-avatar>
      Victorias
    </v-chip>
  </div>
</template>
<script>
export default {
  name: "victoriasJugador",
  props: {
    victorias: {
      type: Number,
    },
  },
  methods: {},
};
</script>