<template>
  <div>
    <v-col>
      <v-card class="mx-auto">
        <v-app-bar dark color="purple darken-1">
          <v-toolbar-title>Marcadores</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-app-bar>
        <v-card-title> Turno de {{ quien }}</v-card-title>
        <v-card-title> </v-card-title>
        <!-- <v-card-title>
            Cronometro
            {{ this.$store.getters["cronometro/cronometrar"] }}</v-card-title
          > -->
        <v-card-title> </v-card-title>
        <div>
          <v-card-text> Contador de turnos: {{ contadorTurno }} </v-card-text>
        </div>
        <v-btn @click="iniciarC">cronometro</v-btn>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "marcadores",
  computed: {
    // ...mapState("cronometro", ["ms"]),
    // ...mapState("cronometro", ["ex"]),
    ...mapState(["contadorTurno", "quien"]),
  },
  methods: {
    ...mapActions("cronometro", ["iniciarC"]),
  },
};
</script>

<style>
</style>