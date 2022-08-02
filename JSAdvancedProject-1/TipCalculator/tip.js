const tip = document.getElementById("range");
const tit = document.querySelector(".ran");

const tipmat = document.querySelector(".tipamt");
const amt = document.querySelector(".bill");

tip.addEventListener("input", function(e) {
    let inp = document.getElementById("num").value;
    let tipam = e.target.value;
    // console.log(inp);

    if (inp === "") {
        alert("Amount Required");
    } else {
        tit.textContent = `${tipam}%`;
        tipmat.textContent = `${tipam}%`;
        amt.textContent = tipCalc(parseFloat(inp), parseFloat(tipam));
    }


})

function tipCalc(amt, tip) {
    let tipc = (amt * tip / 100);
    return tipc + amt;
}