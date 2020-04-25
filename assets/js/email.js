function sendMail(contactForm) {
    emailjs.send("gmail", "visit_ireland", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("main-form").reset(); // Used Form reset() Method to clear form after we get successful response
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}