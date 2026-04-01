const root = document.getElementById("root");

async function fetchMovies() {
  try {
    //this is just so that the webste does not seem blank when the API is loading
    root.innerHTML = "<h2>Loading...</h2>";
    //other api with more queries for more accurate results
    // https://api.jikan.moe/v4/top/anime?limit=12&page=4
    
    const response = await fetch("https://api.jikan.moe/v4/anime");
    const data = await response.json();

    root.innerHTML = "";

    data.data.forEach(movie => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      //three sizes available,I chose the larger one because it was the clearest one and the other two did not have great resolution
      img.src = movie.images.jpg.large_image_url;

      const title = document.createElement("h1");
      title.textContent = movie.title;

      card.appendChild(img);
      card.appendChild(title);

      root.appendChild(card);
    });

  } catch (error) {
    root.innerHTML = "<h2>Failed to load data</h2>";
    console.error("Error fetching data:", error);
  }
}

fetchMovies();