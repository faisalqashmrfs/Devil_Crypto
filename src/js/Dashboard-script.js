let selectedOption = localStorage.getItem("selectedOption");
  if (selectedOption) {
    document.getElementById("dropdown").value = selectedOption;
  }
  document.getElementById("dropdown").addEventListener("change", function() {
    let selectedValue = document.getElementById("dropdown").value;
    localStorage.setItem("selectedOption", selectedValue);
  });
  // Calling data from the financial company
const financialData = [
  { date: '1', value: 100 },
  { date: '2', value: 120 },
  { date: '3', value: 90 },
  { date: '4', value: 30 },
  { date: '5', value: 60 },
  { date: '6', value: 150 },
  { date: '7', value: 40 },
  { date: '8', value: 120 },
  { date: '9', value: 80 },
  { date: '10', value: 130 },
  { date: '11', value: 80 },
  { date: '12', value: 40 },
  { date: '13', value: 100 },
  { date: '14', value: 140 },
  { date: '15', value: 120 },
  { date2: '1', value2: 120 },
  { date2: '5', value2: 120 },
  { date2: '15', value2: 120 },
];

// Extracting dates and values from the data
const dates = financialData.map(data => data.date);
const values = financialData.map(data => data.value);
// Creating the chart using Chart.js.
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [{
      label: 'Stock value',
      data: values,
      backgroundColor: 'rgba(22, 93, 255, 1)',
      borderColor: 'rgba(22, 93, 255, 1)',
      borderWidth: 1
      
    }]
  },
  options: {
    tension: 0.4,
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  }
});
// const dates2 = financialData.map(data => data.date2);
// const values2 = financialData.map(data => data.value2);

// const ctx2 = document.getElementById('myChart').getContext('2d');
// const myChart2 = new Chart1(ctx2, {
//   type: 'line',
//   data: {
//     labels: dates2,
//     datasets: [{
//       label: 'Stock value',
//       data: values2,
//       backgroundColor: 'rgba(52, 93, 255, 1)',
//       borderColor: 'rgba(52, 93, 255, 1)',
//       borderWidth: 1
      
//     }]
//   },
//   options: {
    
//     responsive: true,
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//           text: 'Date'
//         }
//       },
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: 'Value'
//         }
//       }
//     }
//   }
// });