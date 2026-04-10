# 🎌 Anime Browser Web App

🌐 **Live Demo**  
👉 https://wap-project-anime-next-watch-genera-zeta.vercel.app/

---

## 📌 Overview

This is a simple anime browsing web application built using **HTML, CSS, and vanilla JavaScript**.

It fetches anime data from the **Jikan API** and displays it in a clean, responsive card layout. Users can search, sort, and navigate through different pages of anime results.

The goal of this project is to demonstrate core frontend development skills without using any frameworks.

---

## ⚙️ Features

### 🔍 Search
- Search anime by title
- Instant filtering as you type (client-side)

### 🔃 Sorting
- Sort anime based on rating:
  - Low → High
  - High → Low

### 📄 Pagination
- Navigate between pages using Next and Previous buttons
- Displays current page number

### 🎨 Dark Mode
- Toggle between light and dark themes
- Theme preference is saved using localStorage

### 🖱 Click to View
- Clicking on an anime card opens its MyAnimeList page in a new tab

---

## 🌐 API Used

- **Jikan API (Unofficial MyAnimeList API)**  
  https://api.jikan.moe/v4/anime

- Fetches paginated anime data dynamically

---

## 🧠 How It Works

- Anime data is fetched using the Fetch API
- Data is stored in a global array
- UI is dynamically rendered using DOM manipulation
- Search and sorting are applied on the currently loaded data
- Pagination triggers new API calls with updated page numbers

---

## 🛠 Tech Stack

- HTML
- CSS (Grid + Responsive Design)
- JavaScript (ES6)
  - Fetch API
  - Array methods (filter, sort, forEach)
  - DOM manipulation
- LocalStorage (for theme persistence)

---

## 📂 Project Structure
├── index.html
├── style.css
├── script.js
└── README.md


---

## ▶️ How to Run Locally

1. Clone the repository
2. Open `index.html` in your browser
3. Ensure you have an internet connection (required for API calls)

---

## 🚧 Limitations

- Search works only on the currently loaded page
- No debounce for search input
- No detailed anime view page (redirects to external site)
- Basic error handling

---

## 🚀 Future Improvements

- Debounced search
- Global search using API
- Infinite scrolling
- Genre-based filtering
- Anime details modal/page
- Better loading indicators

---

## 🎯 Learning Outcomes

- Working with real-world APIs
- Handling asynchronous JavaScript
- Dynamic UI rendering without frameworks
- Managing application state using vanilla JavaScript

---

## 🙌 Conclusion

This project focuses on building a functional and responsive anime browsing interface using core web technologies, making it a solid foundation for more advanced frontend development.

---
