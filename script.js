const messages = [
    ":(",
    "die",
    "Are you positive?",
    "ывоараррррррррнывпр",
    "Just think about it!",
    "i love Russia",
    "if u say no i will be very sad...",
    "I will be very very very sad...",
    "im a dumb retarded bitch",
    "?????????????"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
