<template>
  <div>
    <v-card class="mt-5 mb-10 pb-10" outlined>
      <v-toolbar color="indigo" dark flat height="300">
        <v-btn class="mx-auto" to="/" outlined color="white">
          <v-icon class="mr-3">mdi-arrow-left</v-icon> Kembali ke daftar
          pengguna</v-btn
        >
      </v-toolbar>
      <v-card class="mx-auto" max-width="600" style="margin-top: -65px;">
        <v-toolbar flat class="mx-4">
          Informasi detail
          <v-spacer></v-spacer>
          <span class="green--text text--darken-3 font-weight-bold">
            Balance: {{ user.balance }}</span
          >
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <div
            class="overline mb-4 ml-3 d-md-flex flex-no-wrap justify-sm-space-between"
          >
            <span>Registered at {{ user.registered }}</span>
          </div>

          <div class="d-md-flex flex-no-wrap">
            <v-avatar class="ma-3" size="180" tile>
              <v-img :src="user.picture"></v-img>
            </v-avatar>

            <div>
              <v-card-title
                class="display-1 text--primary"
                style="margin-bottom:-1rem"
                >{{ user.name }}</v-card-title
              >
              <v-card-subtitle class="mt-1 text--primary"
                ><strong>Age:</strong> {{ user.age }}
                <br />
                <strong>Company:</strong> {{ user.company }}
                <br />
                <strong>Phone:</strong> {{ user.phone }}
                <br />
                <strong>Address:</strong> {{ user.address }}
                <br />
                <strong>Email:</strong> {{ user.email }}
              </v-card-subtitle>
            </div>
          </div>

          <v-divider class="mt-3 mb-5 mx-3"></v-divider>

          <div class="text--primary px-3 my-2">
            {{ user.about }}
          </div>

          <div class="pa-3 chips">
            <strong>Tags: </strong>
            <v-chip
              small
              color="indigo"
              dark
              v-for="(tag, index) in user.tags"
              :key="index"
              >{{ tag }}</v-chip
            >
          </div>
        </v-card-text>
      </v-card>

      <v-card class="my-10 mx-auto" max-width="600">
        <v-card-text><h2 class="heading">Lokasi pengguna</h2> </v-card-text>
        <div class="maps">
          <GmapMap
            :center="{ lat: user.latitude, lng: user.longitude }"
            :zoom="7"
            map-type-id="terrain"
            style="width: 100%; height: 320px"
          >
            <!-- <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center = m.position"
            /> -->
          </GmapMap>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  components: {},
  data() {
    return {
      user: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/users?_id=" + this.id)
      .then(response => {
        this.user = response.data[0];
        console.log(this.user);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.chips > * {
  margin-right: 0.65rem;
  margin-top: 0.65rem;
  vertical-align: -10px;
}
</style>
