// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];


// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`

//bonus challenge
// 8. Reverse the drop down order so that the sun is first.
planets.reverse();
  
function addPlanet(planet) {

  var newPlanet = document.createElement("option");
  newPlanet.setAttribute("value",planet[0]);
  newPlanet.text = planet[0];

  planetTag.appendChild(newPlanet);
}

const planetTag = document.getElementById("planets");
planets.forEach(function(elem) {
  addPlanet(elem);
})


// 2. Write the code to return the correct weight
function calculateWeight(weight, planetName) {
  var multiplier = 0;
  //There's probably a more efficient way to do this
  for(var i = 0; i < planets.length; i++) {
    if(planets[i][0] == planetName) {
      multiplier = planets[i][1];
      break;
    }
  }
  
  return weight * multiplier;
}
  
function handleClickEvent(e) {
  // 3. Create a variable called userWeight and assign the value of the user's weight.
  var userWeight = Number(document.getElementById("user-weight").value);
  //Don't do anything if a weight hasn't been typed in
  if (userWeight == NaN) return;
  
  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  //"inspiration" from https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
  var x = document.getElementById("planets");
  var planetName = x.options[x.selectedIndex].text;

  // 5. Create a variable called result and assign the value of the new calculated weight.
  var result = calculateWeight(userWeight,planetName);
  
  // 6. Write code to display the message shown in the screenshot.
  const displayText = "If you were on " + planetName + ", you would weigh " + result +"lbs!";
  document.getElementById("output").innerHTML = displayText;
}

   // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
document.getElementById("calculate-button").onclick = handleClickEvent;

function AddClickEvent(e) {
  var newName = document.getElementById("new-planet-input").value;
  var newMultiplier = Number(document.getElementById("input-multiplier").value);

  //we need both inputs filled correctly
  if (newName == undefined || newMultiplier == NaN) {
    return;
  }
  planets.push([newName, newMultiplier]);
  addPlanet(planets[planets.length - 1]);
}

document.getElementById("pluto-killer").onchange = function(elem) {
  var planetSelector = document.getElementById("planets");
  if(document.getElementById("pluto-killer").checked) {
    var items = document.getElementsByTagName("option");
    for (var i = 0; i < items.length; i++) {
      if (items[i].value == "Pluto") {
        break;
      }
    }
    if (i != items.length) planetSelector.removeChild(items[i]);
    return;
  }
  else {
    planets.forEach(function(elem) {
      if(elem[0] == "Pluto") {
        addPlanet(elem);
      }
    });
  }
}

document.getElementById("input-button").onclick = AddClickEvent;

//decorative things
document.body.style.backgroundColor = "#101040";
document.getElementById("large-header").style.color = "White";
var smallHeaders = document.getElementsByClassName("small-header");
for(var i = 0; i < smallHeaders.length; i++) {
  smallHeaders[i].style.color = "White";
}

document.getElementById("output").style.color = "White";
document.getElementById("pluto-label").style.color = "White";
