// Initialize the gauge chart with a default value of 0
var gaugeData = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      title: { text: "Belly Button Washing Frequency" },
      type: "indicator",
      mode: "gauge+number", // couldn't figure out how to get the gauge represented properly or the color scheme out
      gauge: {
        axis: { range: [1, 10] }, // Set the gauge range from 0 to 9
        bar: { color: "lightgray" },
        steps: [
          { range: [0, 1], text: "0-1", color: "rgba(255, 0, 0, 0.1)" },
          { range: [1, 2], text: "1-2", color: "rgba(144, 0, 0, 0.2)" },
          { range: [2, 3], text: "2-3", color: "rgba(255, 0, 0, 0.3)" },
          { range: [3, 4], text: "3-4", color: "rgba(255, 0, 0, 0.4)" },
          { range: [4, 5], text: "4-5", color: "rgba(255, 0, 0, 0.5)" },
          { range: [5, 6], text: "5-6", color: "rgba(255, 0, 0, 0.6)" },
          { range: [6, 7], text: "6-7", color: "rgba(255, 0, 0, 0.7)" },
          { range: [7, 8], text: "7-8", color: "rgba(255, 0, 0, 0.8)" },
          { range: [8, 9], text: "8-9", color: "rgba(255, 0, 0, 0.9)" },
        ],
      },
    },
  ];
  
  var gaugeLayout = { width: 400, height: 300, margin: { t: 25, b: 25 } };
  
  // Create the initial gauge chart
  Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  
  
  // Function to update the gauge chart based on the washing frequency
function updateGaugeChart(washingFrequency) {
    // Update the gauge chart value with the new washing frequency
    Plotly.update("gauge", { value: washingFrequency });
}


  