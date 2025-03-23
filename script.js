// Fetching the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((category) => {
      document.getElementById(`${category.id}-name`).textContent = category.name;
      
      // Set the image source dynamically
      const imgElement = document.getElementById(`${category.id}-icon`);
      imgElement.src = category.icon;  // Set the image source from JSON data

      // Set the status
      document.getElementById(`${category.id}-score`).textContent = category.score;
    });
  })
  .catch(error => console.error('Error loading JSON:', error));