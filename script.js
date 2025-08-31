// heart number count
let hearts = document.getElementsByClassName("heartBtn");

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    let heartNumber = document.getElementById("heartNumber");
    let heartNumberConvert = Number(heartNumber.innerText);
    let numberIncrease = heartNumberConvert + 1;
    heartNumber.innerText = numberIncrease;
  });
}


// call button functionality
let callBtns = document.getElementsByClassName("callBtn");

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    let cardHeadline =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;
    let CardSubTitle =
      callBtn.parentNode.parentNode.children[1].children[1].innerText;
    let CardNumber =
      callBtn.parentNode.parentNode.children[1].children[2].innerText;

    let coinNumber = document.getElementById("coinNum");
    let coinNumberConvert = Number(coinNumber.innerText);

    // 🔴 Check first
    if (coinNumberConvert < 20) {
      alert("Insufficient coin!");
      return; // ⛔ Stop here, no append
    }

    // ✅ Decrease coin
    let coinDecrease = coinNumberConvert - 20;
    coinNumber.innerText = coinDecrease;

    // ✅ Get time
    let currentTime = new Date();
    let getTime = currentTime.toLocaleTimeString();

    alert(
      `<i class="fa-regular fa-clock "></i> ${cardHeadline},${CardSubTitle},${CardNumber}`
    );
    // ✅ Append new call history item
    let callListBoard = document.getElementById("callHistory");
    let div = document.createElement("div");
    div.className =
      "bg-[#FAFAFA] border border-transparent rounded-lg px-6 py-4 mb-4 shadow-sm";
    div.innerText = `${cardHeadline}, ${CardSubTitle}, ${CardNumber} ${getTime}`;
    callListBoard.appendChild(div);

    // Optional alert with icon (needs SweetAlert2 for icon)
    // alert(`⏰ ${cardHeadline}, ${CardSubTitle}, ${CardNumber}`);
  });
}

// clear history
let clear = document.getElementById("clearBtn");
clear.addEventListener("click", function () {
  document.getElementById("callHistory").innerHTML = "";
  document.getElementById("coinNum").innerText = "100";
});
