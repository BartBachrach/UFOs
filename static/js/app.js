// import the data from data.js
var tableData = data;
// reference the HTML table using D3
var tbody = d3.select("tbody");

// will fill the table with DATA ONLY
function buildTable(data) {
    // clear the table data
    tbody.html(""); //tbody.html references the table, pointing JS directly to the table in the html page we're gonna build; tells JS to use an empty string when creating the table; basically create a blank canvas
    // now loop through each item in the data set
    data.forEach((dataRow) => { // we've chained a for loop to our data and added the argument dataRow wich represents each row of the data
        let row = tbody.append("tr"); // this line tells JS to find the <tbody> tage within the HTML code and and add a table row "tr" (<tr> tag)
        Object.values(dataRow).forEach((val) => { // telling JS to reference one object from the data array; adding dataRow as the argument means we want the values to go into the dataRow, and forEach(val) means we want one object per row
            let cell = row.append("td");
            cell.text(val);
        });
    });
};        

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

// example JS if-statement syntax:
// if ( condition ) { code to execute }

// pseudocode practice 
// if ( a date is entered ) {
    //Filter the default data to show only the date entered
//};

    if (date) {
            filteredData = filteredData.filter(row => row.datetime === date);
    };
    
    //Rebuild the table using the filtered data
    // @NOTE: if not date was entered, then filteredData will
    // just be the original table data
    buildTable(filteredData);
};
d3.selectAll("#filter-btn").on("click", handleClick);


buildTable(tableData);
