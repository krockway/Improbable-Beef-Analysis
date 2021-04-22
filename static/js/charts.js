//Render an inital visualization when the page loads
function init() {
    //Select the dropdown menu & assign to new variable "selector"
    var selector = d3.select("#selDataset");

  // Read the json file and assign ito new argument "data" (arbitrary name)
  d3.json("samples.json").then((data) => {
    //Print the names (aka ID #s), which will be used for the dropdown menu
    var sampleNames = data.names;

    // For each element in sampleNames, the dropdown menu option will be appended
    //Prevents us from having to hard-code the dropdown list, generates dynamically
    //Example: <option value="940">940</option>
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

//Triggered by a selection in the dropdown
function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel - display metadata for each Subject ID

//Take the ID # (sample) from the dropdown change
function buildMetadata(sample) {
  //Import the JSON & call it data from now on
  d3.json("samples.json").then((data) => {
    // From the data array, pull the metadata field
    var metadata = data.metadata;
    //Filter the metadata array who's id property = sample (aka the id # passed into buildMetadate)
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    //Since the above returns an array, give us the 1st record only
    var result = resultArray[0];
    // In HTML find id="sample-metadata", use D3 to select & assign this div to variable panel
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    
    // --------Gather Data--------
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    var wfSamples = data.metadata;

    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var samplesArray = samples.filter(sampleObj => sampleObj.id == sample);
    var wfSamplesArray = wfSamples.filter(sampleObj => sampleObj.id == sample);

    //  5. Create a variable that holds the first sample in the array.
    var result = samplesArray[0];
    console.log(result);
    var wfResult = wfSamplesArray[0];
    console.log(wfResult);

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;
    var wfreq = wfResult.wfreq;

    // --------Create Bar Chart--------
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`);

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: sample_values.slice(0,10).reverse(),
      y: yticks.slice(0,10).reverse(),
      text: otu_labels.slice(0,10).reverse(),
      type: "bar", 
      orientation: "h"
    }];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: {title: "Sample Values"},
      yaxis: {title: "OTU IDs"}     
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    // --------Create Bubble Chart--------
    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth',
      }
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      yaxis: {title: "Sample Values"},
      xaxis: {title: "OTU IDs"},
      hovermode: 'closest'
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // --------Create Gauge Chart--------
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: {
        x:[0,1],
        y: [0,1]},
      value: wfreq,
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: {
          range: [null, 10],
          tickmode: 'linear',
          tickwid: 0,
          dtick: 2},
        bar: {color: "black"},
        steps:[
          {range: [0, 2], color: "red"},
          {range: [2, 4], color: "orange"},
          {range: [4, 6], color: "yellow"},
          {range: [6, 8], color: "lime"},
          {range: [8, 10], color: "green"}
        ],
      }
    }
        
    ];

    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per week"
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);

  });
}