// from data.js
var tableData = data;

//Get a reference to the table body
var tbody = d3.select("tbody");
console.log(tableData);

var ufodata = (rowdata ) => {
    tbody.html("");
    rowdata.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell. text(value);
        });
    });
};
ufodata(tableData);

//---------------------------------------------------------


// Select the button
var button = d3.select("#filter-btn");
// Select the form
//var form = d3.select(".filters");

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
 
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(filteredData);
    ufodata(filteredData);  

};
button.on("click", runEnter);