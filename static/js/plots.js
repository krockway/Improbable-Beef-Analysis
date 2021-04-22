//Render an inital visualization when the page loads
function init() {
    //Select the dropdown menu & assign to new variable "selector"
    var selector = d3.select("#selDataset");

    // Read the json file and assign ito new argument "data" (arbitrary name)
    d3.json("samples.json").then((data) => {
        console.log(data);
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
})};
init();

//Display the metadata for each Subject ID
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
      // In HTML find id="sample-metadata" & assign this div to variable panel
      var PANEL = d3.select("#sample-metadata");
    
      //Erase whatever was in here before
      PANEL.html("");
      //Display the user details
    //   console.log(result)
    //   PANEL.append("h6").text("ID: " + result.id);
    //   PANEL.append("h6").text("ETHNICITY: " + result.ethnicity);
    //   PANEL.append("h6").text("GENDER: " + result.gender);
    //   PANEL.append("h6").text("AGE: " + result.age);
    //   PANEL.append("h6").text("LOCATION: " + result.location);
    //   PANEL.append("h6").text("BBTYPE: " + result.bbtype);
      PANEL.append("h6").text("WFREQ: " + result.wfreq);

    });
  }


//Triggered by a selection in the dropdown
function optionChanged(newSample) {
    // newSample here is = this.value in html (aka the new selection in the dropdown)
    buildMetadata(newSample);
//    buildCharts(newSample);
  }

