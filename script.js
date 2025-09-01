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

//copy count
let copys = document.getElementsByClassName("copied");

for (let copy of copys) {
  copy.addEventListener("click", function () {
    let CardNumber =
      copy.parentNode.parentNode.children[1].children[2].innerText;
    alert(`☑️Number has copied ${CardNumber}`);

    let copyNumber = document.getElementById("copyNum");
    let copyNumberConvert = Number(copyNumber.innerText);
    let numberIncrease = copyNumberConvert + 1;
    copyNumber.innerText = numberIncrease;

    navigator.clipboard.writeText(CardNumber);
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

    if (coinNumberConvert < 20) {
      alert(`❌ You don't have enough coin; Need atleast 20 coin to call.`);
      return;
    }

    let coinDecrease = coinNumberConvert - 20;
    coinNumber.innerText = coinDecrease;

    let currentTime = new Date();
    let getTime = currentTime.toLocaleTimeString();

    alert(`📞 calling ${cardHeadline} ${CardNumber}...`);

    let callListBoard = document.getElementById("callHistory");
    let div = document.createElement("div");
    div.className = `bg-[#FAFAFA] border border-transparent rounded-lg px-6 py-4 mb-4 shadow-sm flex flex-row items-center justify-between`;
    div.innerHTML = `
    <div class="flex flex-col gap-1">
       <h1 class="inter-a text-lg font-semibold">${cardHeadline}</h1>
       <p class="hind-madurai text-lg font-normal">${CardNumber}</p>  
    </div>
    <div>
    <h1 class="hind-madurai text-lg font-normal">${getTime}</h1>
    </div>`;

    callListBoard.appendChild(div);
  });
}

// clear history
let clear = document.getElementById("clearBtn");
clear.addEventListener("click", function () {
  document.getElementById("callHistory").innerHTML = "";
  document.getElementById("coinNum").innerText = "100";
});
