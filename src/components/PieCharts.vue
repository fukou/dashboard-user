
<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  name: "PieChart",
  props: ["data"],
  mounted() {
    // color list below came from https://stackoverflow.com/a/45489530/52160
    // reformat in the way the lib wants
    let chartData = {
      labels: [],
      datasets: [
        {
          label: "Views by Gender",
          data: [],
          backgroundColor: [
            "#0074D9",
            "#FF4136",
            "#2ECC40",
            "#FF851B",
            "#7FDBFF",
            "#B10DC9",
            "#FFDC00",
            "#001f3f",
            "#39CCCC",
            "#01FF70",
            "#85144b",
            "#F012BE",
            "#3D9970",
            "#111111",
            "#AAAAAA"
          ]
        }
      ]
    };

    for (let category in this.data) {
      chartData.labels.push(category);
      chartData.datasets[0].data.push(this.data[category]);
    }

    this.renderChart(chartData, {
      responsive: true,
      maintainAspectRatio: false
    });
  }
};
</script>
