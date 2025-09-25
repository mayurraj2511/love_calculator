const messages = [
      "Result: 99% ❤️ … Arre ruk, mazaak tha! Fool ho gaye 😜",
      "Result: Tum dono bhai-behan nikle 😂😂",
      "Result: 100% — Ab shaadi ki taiyaari karo 🤣",
      "Result: Dil se dil tak connection… lekin WiFi se strong nahi 😅",
      "Result: Love Calculator crashed due to overload of pyaar 💘 Fool hua! 😂",
      "Result: Calculator ne mana kar diya, tum dono best friends hi theek ho 😆"
    ];

 // Function to get a random message
function getRandomMessage(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
// console.log(getRandomMessage(messages));

// Wait for the DOM to load before updating
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("randomOutput");
  if (output) {
    output.textContent = getRandomMessage(messages);
  }
});


  
