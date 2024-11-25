const apiUrl = "https://api.jikan.moe/v4/anime";

// Function to fetch anime data based on user search
async function searchAnime() {
  const query = document.getElementById("search").value;
  if (!query) return;

  const response = await fetch(`${apiUrl}?q=${query}&limit=6`);
  const data = await response.json();

  displayAnime(data.data);
}

// Function to display anime data on the page
function displayAnime(animeList) {
  const animeListContainer = document.getElementById("animeList");
  animeListContainer.innerHTML = ""; // Clear previous results

  animeList.forEach((anime) => {
    const animeItem = document.createElement("div");
    animeItem.className = "anime-item";

    const animeImage = document.createElement("img");
    animeImage.src = anime.images.jpg.large_image_url;

    const animeTitle = document.createElement("h3");
    animeTitle.textContent = anime.title;

    const animeLink = document.createElement("a");
    animeLink.href = anime.url;
    animeLink.textContent = "Lihat Detail";

    animeItem.appendChild(animeImage);
    animeItem.appendChild(animeTitle);
    animeItem.appendChild(animeLink);

    animeListContainer.appendChild(animeItem);
  });
}
