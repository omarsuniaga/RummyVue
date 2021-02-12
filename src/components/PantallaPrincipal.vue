<template>
  <v-container>
    <v-col class="d-flex justify-center">
      <div v-if="!estado">
        <div @click="iniciarCronometro" class="red darken-2 text-center">
          <canvas id="canvas" width="400" height="300"></canvas>
        </div>
      </div>
      <div v-else>
        <div @click="reiniciarCronometro" class="success darken-2 text-center">
          <canvas id="canvas" width="400" height="300"></canvas>
        </div>
      </div>
    </v-col>
    <div v-if="estado">
      <marcadores />
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Marcadores from "./Marcadores.vue";
export default {
  components: { Marcadores },
  name: "PantallaPrincipal",
  computed: {
    ...mapState(["estado", "contadorTurno"]),
  },
  methods: {
    ...mapActions(["iniciarCronometro", "reiniciarCronometro"]),
  },
};
</script>