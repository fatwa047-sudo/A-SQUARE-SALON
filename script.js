// SELECT THE BOOKING FORM
const bookingForm = document.getElementById("bookingForm");

// SELECT THE MESSAGE AREA
const bookingMessage = document.getElementById("bookingMessage");

// HANDLE FORM SUBMISSION
bookingForm.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();

    // GET CUSTOMER DETAILS
    const customerName = document.getElementById("customerName").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    // CHECK CUSTOMER DETAILS
    if (
        customerName.trim() === "" ||
        phone.trim() === "" ||
        service === "" ||
        date === ""
    ) {
        bookingMessage.textContent = "Please fill in all fields.";
        return;
    }

    // DISPLAY SUCCESS MESSAGE
    bookingMessage.textContent =
        "Thank you, " + customerName +
        "! Your booking request for " + service +
        " on " + date +
        " has been received. We will contact you soon.";

    bookingMessage.style.color = "green";
    bookingMessage.style.marginTop = "15px";

    // CLEAR FORM
    bookingForm.reset();

});
