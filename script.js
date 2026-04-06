const root = document.getElementById("root");

// 🔍 SEARCH FEATURE START
let allMovies = [];
// 🔍 SEARCH FEATURE END

// 📄 PAGINATION FEATURE START
let currentPage = 1;
// 📄 PAGINATION FEATURE END

async function fetchMovies(page = 1) {
  try {
    //this is just so that the webste does not seem blank when the API is loading
    root.innerHTML = "<h2>Loading...</h2>";
    //other api with more queries for more accurate results
    // https://api.jikan.moe/v4/top/anime?limit=12&page=4
    
    // 📄 PAGINATION FEATURE START
    const response = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`);
    // 📄 PAGINATION FEATURE END

    const data = await response.json();

    root.innerHTML = "";

    // 🔍 SEARCH FEATURE START
    allMovies = data.data;
    displayMovies(allMovies);
    // 🔍 SEARCH FEATURE END

    /*
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
    */

  } catch (error) {
    root.innerHTML = "<h2>Failed to load data</h2>";
    console.error("Error fetching data:", error);
  }
}

// 🔍 SEARCH FEATURE START
function displayMovies(movieList) {
  root.innerHTML = "";

  movieList.forEach(movie => {
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
}

// SEARCH INPUT EVENT
document.getElementById("searchInput").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );

  displayMovies(filtered);
});
// 🔍 SEARCH FEATURE END


// 📄 PAGINATION FEATURE START

// NEXT BUTTON
document.getElementById("nextBtn").addEventListener("click", () => {
  currentPage++;
  fetchMovies(currentPage);
});

// PREVIOUS BUTTON
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchMovies(currentPage);
  }
});

// 📄 PAGINATION FEATURE END

fetchMovies(currentPage);