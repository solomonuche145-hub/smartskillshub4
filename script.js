document.getElementById("leadForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const email = document.getElementById("email").value;

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("email", email);

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbySqltFwiC5HJ9Ex1nRSexHOfVboYt0ZodHHJYJOT2JsVwuDViOLHIb3YwWvMUKLVAB/exec", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            alert("🎉 Success! Your FREE Digital Skills Starter Kit is on its way to your inbox.");
            document.getElementById("leadForm").reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("Unable to connect. Please try again later.");
        console.error(error);
    }
});
