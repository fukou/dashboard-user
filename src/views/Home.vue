<template>
  <div>
    <v-card class="mt-5 mb-10 pb-10" flat outlined>
      <v-toolbar color="indigo" dark flat height="300">
        <v-toolbar-title class="mx-auto">
          <h1 class="display-6">Daftar Pengguna</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card class="mx-auto" max-width="900" style="margin-top: -65px;">
        <v-data-table :headers="headers" :items="users" :items-per-page="7" class="elevation-1">
          <template v-slot:item.actions="{ item }">
            <v-btn class="ma-2" outlined color="indigo" @click="showData(item._id)">
              <v-icon class="mr-3">mdi-eye</v-icon>Lihat data
            </v-btn>
          </template>
        </v-data-table>
      </v-card>

      <v-container class="mt-10" style="max-width:920px">
        <v-row>
          <v-col>
            <v-card elevation="5">
              <v-toolbar flat class="mx-4">
                <div class="display-6">Data berdasarkan jenis kelamin</div>
              </v-toolbar>
              <v-divider></v-divider>
              <v-card-text>
                <PieChart v-if="loaded" :data="sortGender" />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="5">
              <v-toolbar flat class="mx-4">
                <div class="display-6">Data berdasarkan warna mata</div>
              </v-toolbar>
              <v-divider></v-divider>
              <v-card-text>
                <PieChart v-if="loaded" :data="sortEye" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-card class="mt-5" elevation="5">
          <v-toolbar flat class="mx-4">
            <div class="display-6">Data berdasarkan jumlah range umur</div>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-text>
            <BarChart v-if="loaded" :data="groupAge" />
          </v-card-text>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import PieChart from "../components/PieCharts";
import BarChart from "../components/BarCharts";

export default {
  components: { PieChart, BarChart },
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name"
        },
        { text: "Age", value: "age" },
        { text: "Company", value: "company" },
        { text: "Gender", value: "gender" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      users: [],
      loaded: false,
      sortGender: null,
      sortEye: null,
      groupAge: null
    };
  },
  async mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/users")
        .then(res => {
          this.loaded = true;
          this.users = res.data;
          // this.sortGender = { ...res.data.map(a => a.gender) };
          var genderCount = res.data.reduce(function(a, c) {
            a[c.gender] = (a[c.gender] || 0) + 1;
            return a;
          }, {});

          var eyeCount = res.data.reduce(function(a, c) {
            a[c.eyeColor] = (a[c.eyeColor] || 0) + 1;
            return a;
          }, {});

          // const groupByAge = res.data.reduce((acc, it) => {
          //   acc[it.age] = acc[it.age] + 1 || 1;
          //   return acc;
          // }, {});

          // console.log(groupByAge);
          const age = res.data.map(a => a.age);
          console.log(age);

          const ranges = {
            "0-19 tahun": { min: 0, max: 19 },
            "20-25 tahun": { min: 20, max: 25 }
          };

          const sumAge = {};
          for (const datum of age) {
            var range =
              Object.keys(ranges).find(
                r => ranges[r].min <= datum && ranges[r].max >= datum
              ) || "Lebih dari 25 tahun";
            let entry = sumAge[range];
            if (entry) {
              ++entry.count;
            } else {
              sumAge[range] = { age: range, count: 1 };
            }
          }

          console.log(Object.values(sumAge));

          this.sortGender = genderCount;
          this.sortEye = eyeCount;
          this.groupAge = Object.values(sumAge);
        })
        .catch(err => {
          console.log(err);
        });
    },
    showData(id) {
      this.$router.push("/user/" + id);
      console.log("Berhasil...");
    }
  }
};
</script>
