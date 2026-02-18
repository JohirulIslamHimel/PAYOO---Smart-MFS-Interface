document.getElementById("add-money-btn").addEventListener("click", function () {
  // 01. Bank account get:
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount === "Select bank") {
    alert("Please select a bank");
    return;
  }

  // 02. Get bank account number:
  const accNo = getValueFromInput("add-money-number");
  if (accNo.length !== 11) {
    alert("Invalid account number");
    return;
  }

  // 03. Get Amount:
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();

  const newBalance = currentBalance + Number(amount);

  // 04. Pin Verify:

  const pin = getValueFromInput("add-money-pin");
  if (pin === "1234") {
    alert(`Add money success from 
        ${bankAccount} 
        at ${new Date()}`);
    setBalance(newBalance);

    // 01.Hold history-container
    const history = document.getElementById("history-container");
    // 02. New div create
    const newHistory = document.createElement("div");
    // 03.Add innerHTML in new div
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
    Add money success from 
        ${bankAccount} , acc-no ${accNo} at ${new Date()}
    </div>

`;
    // 04. New div append in history-container
    history.append(newHistory);
  } else {
    alert("Invalid pin");
    return;
  }
});
