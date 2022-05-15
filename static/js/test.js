function handleClick() {
  // Grab the datetime value from the filter
  let dateInput = formatDate(d3.select("#datetime").node().value);
  let cityInput = d3.select("#city").node().value;
  let stateInput = d3.select("#state").node().value;
  let countryInput = d3.select("#country").node().value;
  let shapeInput = d3.select("#shape").node().value;

  let filteredData = tableData;
  // Check to see if a date was entered and filter the
  // data using that date.
  if (dateInput) {
    filteredData = filteredData.filter((row) => row.datetime === dateInput);
    console.log("shapeInput filered= " + filteredData.length);
  }
  if (cityInput && cityInput != "") {
    filteredData = filteredData.filter((row) => row.city == cityInput);
    console.log("cityInput filered= " + filteredData.length);
  }
  if (stateInput && stateInput != "") {
    filteredData = filteredData.filter((row) => row.state == stateInput);
    console.log("stateInpute filered= " + filteredData.length);
  }
  if (countryInput && countryInput != "") {
    filteredData = filteredData.filter((row) => row.country == countryInput);
    console.log("countryInput filered= " + filteredData.length);
  }
  if (shapeInput && shapeInput != "") {
    filteredData = filteredData.filter((row) => row.shape == shapeInput);
    console.log("shapeInput filered= " + filteredData.length);
  }
  buildTable(filteredData);
}

function dateFormatTest(date) {
  //date = 2010-01-10 returns 1/9/2010  ???
  const usDate = new Date(date);
  return new Intl.DateTimeFormat("en-US").format(usDate);
}
//d3.selectAll("input").on("change", handleClick);

// function getMinDate(){
//   var tempDates = []
//   tableData.forEach((dataRow) => {
//     Object.values(dataRow.datetime).forEach((val) => {
//       tempDates.push(val)
//     });
//   });
//   console.log("test array= " + tempDates.length);
//   return tempDates;
// }