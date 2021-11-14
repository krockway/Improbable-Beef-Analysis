# Improbable-Beef-Analysis

## Purpose

Improbable Beef is interested in proteins that taste like beef; other labs have had success synthesizing meat from algae, bacteria and fungi found on plant roots. Roza and her team have partnered with Improbable Beef to research alternative candidate species.

The human body is a source of thousands of types of bacteria and Roza suspects that the perfect missing protein may come from bacteria found in human belly buttons. To test her hypothesis, Roza has sampled the navels of participants across the country to identify different bacteria types.

The [interactive dashboard](https://krockway.github.io/Improbable-Beef-Analysis/) displays her findings.

Each participant shown is anonymous; participants have been supplied with an ID number to identify themselves & their personal bacteria analysis. Scientists and researchers can use the anonymous data for further research.

## Process

The first step was to print a dynamic list of the Test Subject IDs (ex. 940) from the supplied, samples.json into a dropdown list.

Once the Test Subject ID is selected from the dropdown list, the following steps happen in tandem.

On the leftside of the page, the demographic information loads.

In the center of the page, three graphic visualizations are created using the charts.js script: a horizontal bar chart, a gauge chart and a bubble chart.

The scripts will recreate these steps each time the Test Subject ID is changed.

## Tools & Languages

* HTML
* JavaScript
* JSON
* Plotly

## Analysis & Results

[Link to dashboard](https://krockway.github.io/Improbable-Beef-Analysis/)

![Full Page View](https://github.com/krockway/Improbable-Beef-Analysis/blob/main/images/fullpage.png)

![Dropdown list](https://github.com/krockway/Improbable-Beef-Analysis/blob/main/images/dropdowns.png)

![Demographic information](https://github.com/krockway/Improbable-Beef-Analysis/blob/main/images/demographics.png)

### Subject 1275 Analysis

![Charts for Subject 1275](https://github.com/krockway/Improbable-Beef-Analysis/blob/main/images/subject1275.png)

### Subject 1574 Analysis

![Charts for Subject 1574](https://github.com/krockway/Improbable-Beef-Analysis/blob/main/images/subject1574.png)

The horizontal bar chart, <b>Top 10 Bacteria Cultures Found</b>, displays the top 10 bacterial species (OTUs) for a given individual. The most commonly found OTU is found at the top of the chart, with decreasing frequency as you move down the y-axis.

The gauge chart, <b>Belly Button Washing Frequency</b>, displays the frequency (per week) which the user washes their belly button.

The bubble chart, <b>Bacteria Cultures per Sample</b>, displays the bacteria IDs along the x-axis and the sample values along the y-axis. The size of the bubble is dictated by the sample value and the color is dictated by the bacteria IDs.

## Challenges & Next Steps

Currently the dashboard is designed for individual test subjects to view their personal results; with more time, I would create summary visualizations that allow results to be amalgamated, this would help researchers see similarities on a larger scale.

I would also allow researchers to view results by bacteria type. Knowing that OTU 1167 is a common bacteria for many test subjects, it may be helpful to see a list of all subjects that contain this particular bacterial species to help identify similarities in demographics or bacteria types commonly found together.
