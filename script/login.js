document.getElementById("login-btn").addEventListener("click", function () {
  // 01. get the mobile number input
  const numberInput = document.getElementById("input-number");

  const contactNumber = numberInput.value;
  console.log(contactNumber);
  // 02. get the pin
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(pin);
  // 03.match pin & mobile number
  if (contactNumber === "01741902012" && pin === "1234") {
    // 03.1. true ::> alert > homepage
    alert("Login Success");
  } else {
    // 03.2. false ::> alert > return
    alert("Login Failed");
    return;
  }
});
