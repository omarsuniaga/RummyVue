import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment";
import cronometro from "@/modulos/cronometro"
import sockets from "@/modulos/sockets"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    estado: false,
    hora: moment().format(),
    inicio: '',
    time: '',
    indice: 0,
    contadorTurno: 0,
    contadorRonda: 0,
    partida: 0,
    id: "",
    rj: 30,
    h: 0,
    m: 0,
    s: 0,
    jugador: null,
    tiempoRonda: "",
    jugadores: [],
    quien: '',

  },
  mutations: {
    iniciar(state) {
      if (state.jugadores.length > 0) {
        state.estado = true;
        state.contadorTurno++;
        state.contadorRonda++;
        
        state.quien = state.jugadores[state.indice].nombre;
        this.commit('cronometrar')
        // this.getters['cronometro/cronometrar'];
        console.log("Inicio en ", state.inicio);
        console.log("Ronda : ", state.contadorRonda);
        console.log("Turno de ", state.quien);
        state.indice++
        // this.editar = true;
      } else {
        // this.cronometro();
        return alert("No puede empezar partida sin jugadores");
      }
    },
    reiniciar(state) {
      if (state.indice >= state.jugadores.length) {
           (state.indice = 0);
          }
      clearInterval(state.id);
      state.contadorTurno++
          
      state.rj = 30;
      let turnoFin = Date.now();
      let diff = (turnoFin - state.inicio) / 1000;
      state.quien = state.jugadores[state.indice].nombre;
      state.jugadores[state.indice].historialVelocidad.push(diff);


      console.log("Historial de Velocidad",state.jugadores[state.indice].historialVelocidad);
      console.log("Turno ",state.jugadores[state.indice].nombre);
      console.log("Num Turno ",state.contadorTurno);
      console.log("Num Ronda ",state.contadorRonda);
      this.commit('cronometrar')
      // this.getters['cronometro/cronometrar'];
      state.indice++; //Jugadores+1
    },
    terminar(state) {
      state.estado = false;
      clearInterval(state.id);
      let turnoFin = Date.now();
      let diff = (turnoFin - state.inicio) / 1000;
      state.quien = state.jugadores[state.indice].nombre;
      state.jugadores[state.indice].historialVelocidad.push(diff);
    },
    agregarJugador(state) {
      state.jugadores = [state.jugador, ...state.jugadores]
    },
    cronometrar( state ) {
      state.inicio = Date.now();
      let hAux, mAux, sAux;
      let miliseg = 0;
      let seg = state.rj;
      let color = "#64DD17";
      console.log(color);
      const degToRoad = (degree) => {
        let factor = Math.PI / 180;
        return factor * degree;
      };
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 10; //Linea circular
      ctx.lineCap = "round"; //puntas de la linea redondeada
      ctx.shadowBlur = 10; //Sombra de la linea
      
      const renderTime = () => {
        ctx.shadowColor = color; //degradado
        ctx.strokeStyle = color; //Color de la linea
        miliseg++;
        if (miliseg > 99) {
          state.s++;
          seg--;
          miliseg = 0;
          // console.log(seg);
        }
        if (seg < 30 && seg >= 25) {
          color = "#64DD17";
        } else if (seg <= 15 && seg >= 6) {
          color = "#FFB74D";
        } else if (seg <= 5 && seg >= 0) {
          color = "#BF360C";
        } else if (seg === -1) {
          alert("Acepta para continuar");
          seg = 30;
          color = "green";
        }
        if (state.s > 59) {
          state.m++;
          state.s = 0;
        }
        if (state.m > 59) {
          state.h++;
          state.m = 0;
        }
        state.h > 24 ? (state.h = 0) : NaN;
        state.s < 10 ? (sAux = "0" + state.s) : (sAux = state.s);
        state.m < 10 ? (mAux = "0" + state.m) : (mAux = state.m);
        state.h < 10 ? (hAux = "0" + state.h) : (hAux = state.h);
        let newSconds = seg - miliseg / 100;
        //background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 500, 500);
        //seconds
        ctx.beginPath();
        // ctx.arc(x,y,grosor,inicio,fin));
        ctx.arc(200, 165, 120, degToRoad(270), degToRoad(newSconds * 12 - 90));
        ctx.stroke();
        //date
        ctx.fillStyle = color;
        ctx.font = "40px Arial";
        //X . Y
        ctx.fillText(seg, 180, 175);
        return (state.time = `${hAux}:${mAux}:${sAux}`);
      };
      state.id = setInterval(renderTime, 10);
    },
  },
  actions: {
    agregarJugadorAcciones(context) {
      context.commit('agregarJugador')
    },
    iniciarCronometro({commit}){
      commit('iniciar')
      
      
    },
    reiniciarCronometro({commit}){
      commit('reiniciar')
      
    }
    // IniciarCronometro(context) {
    //   context.commit('cronometro')
    // }
  },
  modules: {
    sockets,
    cronometro
  },
  getters: {

  }
})