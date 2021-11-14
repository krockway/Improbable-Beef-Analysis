# Improbable-Beef-Analysis

## Purpose

Improbable Beef is interested in proteins that taste like beef; other labs have had success synthesizing meat from algae, bacteria and fungi found on plant roots. Roza and her team have partnered with Improbable Beef to research alternative candidate species.

The human body is a source of thousands of types of bacteria and Roza suspects that the perfect missing protein may come from bacteria found in human belly buttons. To test her hypothesis, Roza has sampled the navels of participants across the country to identify different bacteria types.

The interactive dashboards display her findings.

Each participant shown is anonymous; participants have been supplied with an ID number to identify themselves & their personal bacteria analysis. Scientists and researchers can use the anonymous data for further research.

## Process

The first step was to print a dynamic list of the Test Subject IDs (ex. 940) from samples.json into a dropdown list.

![Dropdown list](https://github.com/krockway/Improbable-Beef-Analysis/blob/main/images/dropdowns.png)

Once the Test Subject ID is selected from the dropdown list, the following steps happen in tandem.

On the leftside of the page, the demographic information loads.

![Demographic information](https://github.com/krockway/Improbable-Beef-Analysis/blob/main/images/demographics.png)

The graphic visualizations are created using the charts.js script.

The horizontal bar chart, Top 10 Bacteria Cultures Found, displays the top 10 bacterial species (OTUs) for a given individual. The most commonly found OTU is found at the top of the chart, with decreasing frequency as you move down the y-axis.

The gauge chart, Belly Button Washing Frequency, displays the frequency which the user washes their belly button.

The bubble chart, Bacteria Cultures per Sample, displays the bacteria IDs along the x-axis and the sample values along the y-axis. The size of the bubble is dictated by the sample value and the color is dictated by the bacteria IDs.

Subject 940 Analysis

![Charts for Subject 940](https://github.com/krockway/Improbable-Beef-Analysis/blob/main/images/subject940.png)

Subject 1275 Analysis

![Charts for Subject 1275](https://github.com/krockway/Improbable-Beef-Analysis/blob/main/images/subject1275.png)

The script will recreate these steps each time the Test Subject ID is changed.

## Tools & Languages

* HTML
* JavaScript
* JSON
* Plotly

## Analysis

[Link to dashboard] (https://krockway.github.io/Improbable-Beef-Analysis/)

## Results

## Challenges & Next Steps

