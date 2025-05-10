// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};

// In your CodePen, change the given date output to 
// this format: mon dd, year 
// (for example, Apr 04, 2024)

// Question #1
today1.innerHTML = new Date().toLocaleDateString("en-US", options);

// Question #2

/*
Replace this concatenated string 
using a template literal.

Algorithm:
Replace concatenated string using template literal.
*/
today2.innerHTML = `<strong>Volume</strong>: ${volume} liters`;

// Question #3

/*
Declare a variable named quantity and assign it 
the value of the HTML input element with an id 
of q using the querySelector method.

Algorithm:
Declare a variable named quantity and 
assign as it's value the retrieved value of 
an HTML input element with an idvalue "q" 
using the querySelector method
*/
let quantity = document.querySelector("#q").value;

// Question #4

/*
Output this string, "Welcome to <mark>our</mark> 
neighborhood!", to the first <aside> in the document.
*/
aside = document.querySelector("aside");
aside.innerHTML = `Welcome to <mark>our</mark> neighborhood!`

// Question #5

/*
Output the returned value of a function named 
getCelsius to an HTML input element with an id 
of temp. Feed the getCelsius literal value of 33 
(which represents 33°F). The getCelsius function 
is already included in the provided CodePen code.
*/

let celcsiusValue = getCelsius(33);
let temperature = document.querySelector("#temp");
console.log(celcsiusValue)

temperature.value = `${Math.round(celcsiusValue)}°C`;  // celcsiusValue.toFixed(1)

// Question #6

/*
Select all the div elements in a document and 
assign the result to a const variable named divs 
using querySelectorAll. Output to the provided div 
element with an id of divs in the CodePen.
*/
const divs = document.querySelectorAll("div");
document.querySelector("#divs").textContent = `There are ${divs.length} div element in the HTML document`;
//divs.setAttribute("id", "div")

// Question #7

/*
Filter an array named citynames to return only city 
names in the array that start with the letter "C" 
and store the resulting array into a variable named 
filterC. Output to the provided div element with an 
id of c-names in the CodePen.
*/
let cityNameFilterC = citynames.filter((name) => {
    return name.match(/^C/) // OR /^C/.test(name); // Use regex to test if the name starts with 'C'
});
//console.log(cityNameFilterC);

let ctyList = cityNameFilterC.map((city) => {
    return `<li>${city}</li>`
}).join("");
//console.log(ctyList);

citynamesEl = document.querySelector("#c-names");
citynamesEl.innerHTML = ctyList;