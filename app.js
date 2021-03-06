// import the data from data.js
//D3=DATA-Driven Documents
//SVG = scalor vector graphic
const tableData = data;
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

function handleClick() {
  // Grab the datetime value from the filter
  // let theElement = document.getElementById("datetime").value;
  let date = d3.select("#datetime").node().value;
  if (date == "") {
    console.log("Date = " + date);
    date = "01/10/2010";
  }
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    //before filter
  /*  for (i = 0; i < tableData.length; i++) {
      let item = tableData[i];
      if (item.datetime > date) {
        console.log("Match = " + item.datetime);
      }else{
        console.log("Not Match = " + item.datetime);
      }
    }
  */
    filteredData = filteredData.filter((row) => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);


// 2. Attach an event to listen for changes to each filter 
    d3.selectAll("input").on("change", handleClick);  