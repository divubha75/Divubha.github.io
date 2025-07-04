
document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("sip-table");
  let invested = 10000;
  for (let day = 1; day <= 5; day++) {
    let profit = invested * 0.015;
    invested += profit;
    const row = `<tr><td>${day}</td><td>₹${(invested - profit).toFixed(2)}</td><td>₹${profit.toFixed(2)}</td></tr>`;
    table.innerHTML += row;
  }
});
