
<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: "BarChart",
  props: ["data"],
  mounted() {
    // reformat in the way the lib wants
    let chartData = {
      labels: [],
      datasets: [
        {
          label: "Jumlah orang berdasarkan range",
          backgroundColor: "#f87979",
          data: []
        }
        // {
        //   label: "Old",
        //   backgroundColor: "#c0c0c0",
        //   data: []
        // }
      ]
    };

    for (let i = 0; i < this.data.length; i++) {
      chartData.labels.push(this.data[i].age);
      chartData.datasets[0].data.push(this.data[i].count);
      //   chartData.datasets[1].data.push(this.data[i].old);
    }

    this.renderChart(chartData, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ],
        yAxes: [
          {
            stacked: true
          }
        ]
      }
    });
  }
};
</script>
