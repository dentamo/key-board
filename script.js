var keys = document.querySelectorAll('.key');

function handleKeyDown(event) {
  var key = event.key;

  // Remove the 'active' class from all keys
  keys.forEach(function(element) {
    element.classList.remove('active');
  });

  // Find the pressed key button by text content and add the 'active' class
  var pressedKey = Array.from(keys).find(function(element) {
    return element.textContent === key;
  });

  if (pressedKey) {
    pressedKey.classList.add('active');
  }
}

document.addEventListener('keydown', handleKeyDown);

