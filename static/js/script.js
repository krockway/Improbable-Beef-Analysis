//Listen for any changes in the HTML body
d3.selectAll("body").on("change", updatePage);

function updatePage() {
  // Select the dropdown with id = selectOption
  var dropdownMenu = d3.selectAll("#selectOption").node();
  // Assign the ID from dropdownMenu to dropdownMenuID
  var dropdownMenuID = dropdownMenu.id;
  //Whatever is selected from dropdown, the value is assigned
  var selectedOption = dropdownMenu.value;

  //Print the values
  console.log(dropdownMenuID);
  console.log(selectedOption);
};