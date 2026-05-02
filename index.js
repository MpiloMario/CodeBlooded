const API_URL = "https://api.api-onepiece.com/v2/characters/en";

const searchInput = document.getElementById("characterSearch");
const searchBtn = document.getElementById("searchBtn");
const charactersContainer = document.getElementById("charactersContainer");
const logoutBtn = document.getElementById("logoutBtn");

let characters = [];

lucide.createIcons();

async function loadCharacters() {
  try {
    charactersContainer.innerHTML = `
      <p class="text-gray-500">Loading characters...</p>
    `;

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }

    characters = await response.json();

    renderCharacters(characters.slice(0, 9));
  } catch (error) {
    console.error(error);

    charactersContainer.innerHTML = `
      <p class="text-red-500">Could not load One Piece characters.</p>
    `;
  }
}

function renderCharacters(list) {
  if (!list.length) {
    charactersContainer.innerHTML = `
      <p class="text-gray-500">No characters found.</p>
    `;
    return;
  }

  charactersContainer.innerHTML = list
    .map(character => {
      const name = character.name || "Unknown";
      const job = character.job || "Unknown role";
      const bounty = character.bounty || "Unknown bounty";
      const crew = character.crew?.name || "No crew listed";

      return `
        <article class="bg-red-50 rounded-2xl shadow p-5 hover:shadow-lg transition">
          <h3 class="text-lg font-bold text-gray-800">${name}</h3>
          <p class="text-sm text-gray-600 mt-2">Role: ${job}</p>
          <p class="text-sm text-gray-600">Crew: ${crew}</p>
          <p class="text-sm text-gray-600">Bounty: ${bounty}</p>
        </article>
      `;
    })
    .join("");
}

function searchCharacters() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (!searchTerm) {
    renderCharacters(characters.slice(0, 9));
    return;
  }

  const filteredCharacters = characters.filter(character =>
    character.name?.toLowerCase().includes(searchTerm)
  );

  renderCharacters(filteredCharacters);
}

searchBtn.addEventListener("click", searchCharacters);

searchInput.addEventListener("keyup", event => {
  if (event.key === "Enter") {
    searchCharacters();
  }
});

logoutBtn.addEventListener("click", () => {
  alert("Logged out");
  window.location.href = "login.html";
});

loadCharacters();
