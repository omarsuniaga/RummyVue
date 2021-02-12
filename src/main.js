import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')


// const cronometro = () =>{
//   this.inicio = Date.now();
//   if (this.indice !== 0) {
//     //si es igual al total de jugadores, lo mandamos al inicio o sea, al primer jugador
//     this.indice++;
//     // this.partida.numRonda++
//   }
//   // this.quien = this.jugadores[this.indice].nombre;
//   // console.log("turno de ",this.jugadores[this.indice].nombre);
//   // console.log('entre a escribir');
//   let hAux, mAux, sAux;
//   let miliseg = 0,
//     seg = this.rj,
//     color = "#64DD17";

//   let canvas = document.getElementById("canvas");
//   let ctx = canvas.getContext("2d");
//   ctx.lineWidth = 10; //Linea circular
//   ctx.lineCap = "round"; //puntas de la linea redondeada
//   ctx.shadowBlur = 10; //Sombra de la linea

//  return this.id = setInterval(renderTime, 10);
// }
// const renderTime = () => {
//   ctx.shadowColor = color; //degradado
//   ctx.strokeStyle = color; //Color de la linea
//   miliseg++;
//   if (miliseg > 99) {
//     this.s++;
//     seg--;
//     miliseg = 0;
//     // console.log(seg);
//   }
//   if (seg < 30 && seg >= 25) {
//     color = "#64DD17";
//   } else if (seg <= 15 && seg >= 6) {
//     color = "#FFB74D";
//   } else if (seg <= 5 && seg >= 0) {
//     color = "#BF360C";
//   } else if (seg === -1) {
//     alert("Acepta para continuar");
//     seg = 30;
//     color = "green";
//   }
//   if (this.s > 59) {
//     this.m++;
//     this.s = 0;
//   }
//   if (this.m > 59) {
//     this.h++;
//     this.m = 0;
//   }
//   this.h > 24 ? (this.h = 0) : NaN;
//   this.s < 10 ? (sAux = "0" + this.s) : (sAux = this.s);
//   this.m < 10 ? (mAux = "0" + this.m) : (mAux = this.m);
//   this.h < 10 ? (hAux = "0" + this.h) : (hAux = this.h);
//   let newSconds = seg - miliseg / 100;
//   //background
//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, 500, 500);
//   //seconds
//   ctx.beginPath();
//   // ctx.arc(x,y,grosor,inicio,fin));
//   ctx.arc(200, 165, 120, degToRoad(270), degToRoad(newSconds * 12 - 90));
//   ctx.stroke();
//   //date
//   ctx.fillStyle = color;
//   ctx.font = "40px Arial";
//   //X . Y
//   ctx.fillText(seg, 180, 175);
//   return (this.time = `${hAux}:${mAux}:${sAux}`);
// };
//   const degToRoad = (degree) => {
//     let factor = Math.PI / 180;
//     return factor * degree;
//   };