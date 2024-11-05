document.addEventListener("DOMContentLoaded", () => {
    const characterContainer = document.getElementById("character-container");
  
    fetch("https://rickandmortyapi.com/api/character?page=39")
      .then(response => response.json())
      .then(data => {
        const characters = data.results.slice(0, 6); // берем первых 6 персонажей
  
        characters.forEach(character => {
          const characterCard = document.createElement("div");
          characterCard.classList.add("character-card");
  
          //Определяем класс статуса на основе статуса персонажа
          const statusClass = character.status.toLowerCase();
  
          fetch(character.episode[0])
            .then(response => response.json())
            .then(episodeData => {
              characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <div class="character-info">
                  <h2>${character.name}</h2>
                  <p class="status ${statusClass}">
                    <span class="status-indicator"></span>${character.status} - ${character.species}
                  </p>
                  <p class="label">Last known location:</p>
                  <p class="location">${character.location.name}</p>
                  <p class="label">First seen in:</p>
                  <p class="episode-name">${episodeData.name}</p>
                </div>
              `;
              characterContainer.appendChild(characterCard);
            })
            .catch(error => console.error("Error fetching episode data:", error));
        });
      })
      .catch(error => console.error("Error fetching characters:", error));
  });
  