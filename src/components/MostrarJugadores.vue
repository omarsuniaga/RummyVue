<template>
  <v-container>
    <div>
      <v-col v-for="(jugador, i) in this.$store.state.jugadores" :key="i">
        <v-card class="mx-auto">
          <v-toolbar :color="jugador.color" dark>
            <detalles-jugadores />

            <v-toolbar-title v-text="jugador.nombre"></v-toolbar-title>

            <v-spacer></v-spacer>

            <eliminar-jugador :id="jugador.id" />
          </v-toolbar>

          <v-container fluid>
            <v-row dense>
              <v-col>
                <v-card>
                  <v-img
                    :src="jugador.avatar"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.5)"
                    height="200px"
                  >
                    <v-card-title v-text="jugador.descripcion"></v-card-title>
                    <v-card-title v-text="jugador.totalPuntos"></v-card-title>
                    <v-container fluid>
                      <v-sparkline
                        :line-width="2"
                        :padding="0"
                        :smooth="10"
                        :value="jugador.historialVelocidad"
                        auto-draw
                      ></v-sparkline>
                    </v-container>
                  </v-img>

                  <v-card-actions>
                    <div class="wrapper">
                      <div class="span">
                        <victorias-jugador :victorias="jugador.victorias" />
                      </div>
                      <div class="span">
                        <derrotas :derrotas="jugador.derrotas" />
                      </div>
                      <div class="span">
                        <partidas-jugadas
                          :partidasJugadas="jugador.partidasJugadas"
                        />
                      </div>
                      <div class="span">
                        <partidas-jugadas
                          :partidasJugadas="jugador.partidasJugadas"
                        />
                      </div>
                      <div class="span">
                        <partidas-jugadas
                          :partidasJugadas="jugador.partidasJugadas"
                        />
                      </div>
                    </div>
                  </v-card-actions>
                  <v-card-actions>
                    <!-- <v-btn icon @click="guardar">
                      <v-icon>mdi-content-save</v-icon>
                    </v-btn> -->
                  </v-card-actions>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <agregar-puntos :id="jugador.id" :i="i" />
                  </v-card-actions>
                </v-card>
                <historial-puntos :items="jugador.puntajes" />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import AgregarPuntos from "./agregarPuntos.vue";
import Derrotas from "./Derrotas.vue";
import DetallesJugadores from "./DetallesJugadores.vue";
import EliminarJugador from "./EliminarJugador.vue";
import HistorialPuntos from "./HistorialPuntos.vue";
import PartidasJugadas from "./PartidasJugadas.vue";
import VictoriasJugador from "./VictoriasJugador.vue";
export default {
  components: {
    EliminarJugador,
    DetallesJugadores,
    AgregarPuntos,
    VictoriasJugador,
    Derrotas,
    PartidasJugadas,
    HistorialPuntos,
  },
  name: "MostrarJugadores",
  data() {
    return {
      puntosPadre: "",
    };
  },
  methods: {
    guardar() {
      console.log("guardando...", this.puntosPadre);
    },
  },
};
</script>

<style>
.wrapper {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;
  max-height: 85px;
  border: 1px solid rgb(255, 253, 253);
  overflow-x: auto;
  margin-top: 5px;
  margin-bottom: 1px;
}
.wrapper::-webkit-scrollbar {
  width: 0;
}

.wrapper .item {
  min-width: 50px;
  border-radius: 10%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: rgba(68, 64, 64, 0.24);
  margin-right: 2px;
}
.wrapper .span {
  min-width: 100px;
  height: 50px;
  line-height: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.24);
  margin-right: 1px;
}
</style>