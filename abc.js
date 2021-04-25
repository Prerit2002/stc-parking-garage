
let num = 1;
let totalPrice = 0;

const parking = () => {
    let hours = prompt('Hours parked by customer')
    const price = totalcost(hours);
    const table = document.querySelector("table")
    const total = document.querySelector(".total")
   const row = document.createElement("tr")
    const td1 = document.createElement("td")
    td1.innerText = num
    const td2 = document.createElement("td")
    td2.innerText = price
    row.appendChild(td1)
    row.appendChild(td2)
    table.appendChild(row)
    totalPrice += price
    total.innerHTML = totalPrice

    num++;
}
const totalcost = (hours) => {
    while (hours < 0) {
        prompt('Please enter correct input')
    }
    price = 0
    if (hours > 0) price += 2
    if (hours > 3) price += (hours - 3) * 0.5
    if (price > 10) price = 10
    return price
}



