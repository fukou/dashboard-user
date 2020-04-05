import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB6zDUcKAP_amQ75PgHEfnLdT9ssRxNsV4",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
