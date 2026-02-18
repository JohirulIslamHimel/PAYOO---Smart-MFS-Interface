document.getElementById("cashout-btn").addEventListener("click", function () {
  // 01. get the agent number & validation
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length !== 11) {
    alert("Invalid Number");
    return;
  }
  // 02. get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");

  // 03. get current balance , validate,convert to number
  //   const balanceElement = document.getElementById("balance");

  //   const balance = balanceElement.innerText;
  //   console.log(balance);
  const currentBalance = getBalance();
  // 04. Calculate new Balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  // 05. Get the pin & verify
  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    // 05.1. true ::> show an alert > set balance
    alert("Cash out successful");
    //console.log("New balance:", newBalance);
    // document.getElementById("balance").innerText = newBalance;
    setBalance(newBalance);
  } else {
    // 05.2. false ::> show an error alert > return
    alert("Invalid pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   // 01. get the agent number & validation
//   const cashOutNumberInput = document.getElementById("cashout-number");

//   const cashOutNumber = cashOutNumberInput.value;

//   console.log(cashOutNumber);
//   if (cashOutNumber.length !== 11) {
//     alert("Invalid Agent Number");
//     return;
//   }
//   // 02. get the amount , validate, convert to number
//   const cashoutAmountInput = document.getElementById("cashout-amount");

//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);
//   // 03. get current balance , validate,convert to number
//   const balanceElement = document.getElementById("balance");

//   const balance = balanceElement.innerText;
//   console.log(balance);
//   // 04. Calculate new Balance
//   const newBalance = Number(balance) - Number(cashoutAmount);

//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }

//   // 05. Get the pin & verify
//   const cashoutPinInput = document.getElementById("cashout-pin");

//   const pin = cashoutPinInput.value;

//   if (pin === "1234") {
//     // 05.1. true ::> show an alert > set balance
//     alert("Cash out successful");
//     console.log("New balance:", newBalance);
//     balanceElement.innerText = newBalance;
//   } else {
//     // 05.2. false ::> show an error alert > return
//     alert("Invalid pin");
//     return;
//   }
// });
