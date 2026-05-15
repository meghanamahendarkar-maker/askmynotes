document.addEventListener('DOMContentLoaded', () => {

    console.log("APP JS WORKING ✅");

    // FILE UPLOAD
    const pdfInput = document.querySelector("#file-upload");
    const uploadStatus = document.querySelector(".status-text");
    const fileNameDisplay = document.querySelector("#file-name");

    // QUESTION SECTION
    const question   = document.querySelector("#question");
    const askBtn     = document.querySelector("#ask-btn");
    const status     = document.querySelector("#status");
    const answerText = document.querySelector("#answer-text");

    // FILE UPLOAD LOGIC
    pdfInput.addEventListener("change", () => {
        const file = pdfInput.files[0];

        if (!file) {
            uploadStatus.textContent = "No file uploaded yet.";
            fileNameDisplay.textContent = "No file chosen";
            return;
        }

        fileNameDisplay.textContent = file.name;
        uploadStatus.textContent = `Selected "${file.name}" (ready)`;
    });

    // QUESTION BUTTON LOGIC
    askBtn.addEventListener("click", () => {
        const q = question.value;

        if (!q) {
            alert("Please enter a question");
            return;
        }

        status.textContent = "Thinking...";

        // Fake AI response (for now)
        setTimeout(() => {
            answerText.textContent = "You asked: " + q;
            status.textContent = "Done ✅";
        }, 1000);
    });

});
