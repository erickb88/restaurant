// function displayRestaurants() {
//   clearResults();
//   const display = document.getElementById("restaurant");
//   const restaurantNames = [
//     "Cimbru",
//     "Olivo",
//     "Jaxx",
//     "Garlic",
//     "Toulouse",
//     "Visuin",
//     "Transylvania Steakhouse",
//   ];
//   const steakPrices = [];
//   const removedRestaurants = [];
//   for (let i = 0; i < restaurantNames.length; i++) {
//     const price = Math.floor(Math.random() * (200 - 50 + 1) + 50);
//     steakPrices.push(price);
//   }
//   for (let i = 0; i < steakPrices.length; i++) {
//     if (steakPrices[i] > 150) {
//       removedRestaurants.push(restaurantNames[i]);
//       steakPrices.splice(i, 1);
//       restaurantNames.splice(i, 1);
//       i--;
//     }
//   }
//   display.innerHTML += "Steak prices for most popular restaurants in Cluj: <br>";
//   for (let i = 0; i < restaurantNames.length; i++) {
//     display.innerHTML += `${restaurantNames[i]}: ${steakPrices[i]} Lei <br>`;
//   }
//   display.innerHTML += "<br>";
//   const expensive = document.getElementById("expensive");
//   if (removedRestaurants.length > 0) {
//     for (let i = 0; i < removedRestaurants.length; i++) {
//       expensive.innerHTML += removedRestaurants[i] + " is overpriced <br>";
//     }
//   }
//   display.innerHTML += "<br>";
//   const name =document.getElementById("name").value;
//   const winner =
//     restaurantNames[Math.floor(Math.random() * restaurantNames.length)];
//   const winnerDisplay = document.getElementById("winner");
//   winnerDisplay.innerHTML += `${name}'s choice is: ${winner}`;
// }

// const button = document.getElementById("local");
// button.addEventListener("click", displayRestaurants);

// function clearResults() {
//   const display = document.getElementById("restaurant");
//   const expensive = document.getElementById("expensive");
//   const winnerDisplay = document.getElementById("winner");
  
//   display.innerHTML = "";
//   expensive.innerHTML = "";
//   winnerDisplay.innerHTML = "";
// }

function displayRestaurants() {
  clearResults();
  const display = document.getElementById("restaurant");
  const restaurantNames = [
    "Cimbru",
    "Olivo",
    "Jaxx",
    "Garlic",
    "Toulouse",
    "Visuin",
    "Transylvania Steakhouse",
  ];
  const steakPrices = [];
  const removedRestaurants = [];
  const name =document.getElementById("name").value;
  if (!name) {
    display.innerHTML += "<span style='color: red;'>Please enter your name!👀</span>";
    return;
  }
  for (let i = 0; i < restaurantNames.length; i++) {
    const price = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    steakPrices.push(price);
  }
  for (let i = 0; i < steakPrices.length; i++) {
    if (steakPrices[i] > 150) {
      removedRestaurants.push(restaurantNames[i]);
      steakPrices.splice(i, 1);
      restaurantNames.splice(i, 1);
      i--;
    }
  }
  display.innerHTML += "Steak prices for most popular restaurants in Cluj: <br>";
  for (let i = 0; i < restaurantNames.length; i++) {
    display.innerHTML += `${restaurantNames[i]}: ${steakPrices[i]} Lei <br>`;
  }
  display.innerHTML += "<br>";
  const expensive = document.getElementById("expensive");
  if (removedRestaurants.length > 0) {
    for (let i = 0; i < removedRestaurants.length; i++) {
      expensive.innerHTML += removedRestaurants[i] + " is overpriced <br>";
    }
  }
  display.innerHTML += "<br>";
  const winner =
    restaurantNames[Math.floor(Math.random() * restaurantNames.length)];
  const winnerDisplay = document.getElementById("winner");
  winnerDisplay.innerHTML += `${name}'s choice is: ${winner}`;
}

const button = document.getElementById("local");
const nameInput = document.getElementById("name");
button.addEventListener("click", displayRestaurants);
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
  }
});

function clearResults() {
  const display = document.getElementById("restaurant");
  const expensive = document.getElementById("expensive");
  const winnerDisplay = document.getElementById("winner");
  
  display.innerHTML = "";
  expensive.innerHTML = "";
  winnerDisplay.innerHTML = "";
}
