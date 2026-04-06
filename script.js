const root = document.getElementById("root");

let allMovies = [];
let currentPage = 1;

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

    allMovies = data.data;
    displayMovies(allMovies);

  } catch (error) {
    root.innerHTML = "<h2>Failed to load data</h2>";
    console.error("Error fetching data:", error);
  }
}

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

    
    const rating = document.createElement("p");
    rating.textContent = "⭐ " + (movie.score || "N/A");
  

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(rating); 

    root.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );

  displayMovies(filtered);
});


document.getElementById("nextBtn").addEventListener("click", () => {
  currentPage++;
  fetchMovies(currentPage);
});


document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchMovies(currentPage);
  }
});


document.getElementById("sortSelect").addEventListener("change", (e) => {
  let sorted = [...allMovies];

  if (e.target.value === "asc") {
    sorted = sorted.sort((a, b) => (a.score || 0) - (b.score || 0));
  } else if (e.target.value === "desc") {
    sorted = sorted.sort((a, b) => (b.score || 0) - (a.score || 0));
  }

  displayMovies(sorted);
});



const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀ Light Mode";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});


fetchMovies(currentPage);