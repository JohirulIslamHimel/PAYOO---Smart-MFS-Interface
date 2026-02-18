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
  } else {
    alert("Invalid pin");
    return;
  }
});
