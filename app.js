const products = {
  "milk": { carbon: "High", recyclable: "Yes", alternative: "Almond Milk", points: 5 },
  "shampoo": { carbon: "Medium", recyclable: "No", alternative: "Eco Shampoo", points: 3 },
  "plastic bottle": { carbon: "Very High", recyclable: "No", alternative: "Glass Bottle", points: 10 },
  "bread": { carbon: "Low", recyclable: "Yes", alternative: "Whole Grain Bread", points: 2 },
  "soap": { carbon: "Low", recyclable: "Yes", alternative: "Organic Soap", points: 2 }
};

const productInput = document.getElementById("productInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");
const alternative = document.getElementById("alternative");
const points = document.getElementById("points");
const totalPointsDiv = document.getElementById("totalPoints");
const resetBtn = document.getElementById("resetBtn");

// Initialize total points from localStorage
let totalPoints = parseInt(localStorage.getItem("greenPoints")) || 0;
updateTotalPoints();

checkBtn.addEventListener("click", () => {
  const name = productInput.value.trim().toLowerCase();
  if(!name) {
    result.textContent = "Please enter a product name!";
    alternative.textContent = "";
    points.textContent = "";
    return;
  }

  if(products[name]) {
    const prod = products[name];
    result.textContent = `Eco Score: ${prod.carbon} carbon footprint | Recyclable: ${prod.recyclable}`;
    alternative.textContent = `Try this eco-friendly alternative: ${prod.alternative}`;
    points.textContent = `You earn ${prod.points} Green Points! 🌱`;

    totalPoints += prod.points;
    localStorage.setItem("greenPoints", totalPoints);
    updateTotalPoints();
  } else {
    result.textContent = "Product not found in database.";
    alternative.textContent = "";
    points.textContent = "";
  }
});

resetBtn.addEventListener("click", () => {
  totalPoints = 0;
  localStorage.setItem("greenPoints", totalPoints);
  updateTotalPoints();
  result.textContent = "";
  alternative.textContent = "";
  points.textContent = "";
  productInput.value = "";
});

function updateTotalPoints() {
  totalPointsDiv.textContent = `Total Green Points: ${totalPoints} 🌱`;
}
