// from data.js
var tableData = data;

//Get a reference to the table body
var tbody = d3.select("tbody");
console.log(tableData);

// Create function to create table
function ufodata(rowdata) {
    tbody.html("");
    //Loop through 'data' 
    rowdata.forEach((ufoReport) => {
        //Append the table row 'tr
        var row = tbody.append("tr");
        //Use Object.entries to ceach UFO report value
        Object.entries(ufoReport).forEach(([key, value]) => {
            // Append one cell per UFO report value
            var cell = row.append("td");
            // Update each cells text with UFO report value
            cell. text(value);
        });
    });
};
// Build and show table
ufodata(tableData);


// Select the button
var button = d3.select("#filter-btn");

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
 
    //console.log(inputValue);
    //console.log(tableData);

    // Get the filtered data and console.log filteredData
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
    
    //// Build and show table
    ufodata(filteredData);  
};

// Create on function to attach an even to the runEnter function
button.on("click", runEnter);