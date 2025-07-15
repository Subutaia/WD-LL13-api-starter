/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/

// Function to fetch and display a cat fact
function getFact() {
  fetch('https://catfact.ninja/fact')
    .then(function(response) {
      // Convert the response to JSON
      return response.json();
    })
    .then(function(data) {
      // Log the data for debugging
      console.log(data);
      // Display the cat fact in the output div
      var outputElement = document.getElementById('output');
      outputElement.textContent = data.fact;
    })
    .catch(function(error) {
      // Handle any errors
      var outputElement = document.getElementById('output');
      outputElement.textContent = 'Failed to fetch cat fact.';
    });
}
var catFactButton = document.getElementById('get-cat-fact');
if (catFactButton) {
  catFactButton.addEventListener('click', getFact);
}    



// Use this script to write your fetch logic
// You'll fetch data from your selected API and display it on the page

// Add an event listener to the button to fetch a cat fact when clicked


// Example placeholder:
console.log("Team activity starter code loaded.");