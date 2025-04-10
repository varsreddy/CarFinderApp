# DriveFind - Car Finder Web App

DriveFind is a fully responsive, feature-rich car finder web application built with Vite + React, TailwindCSS, and ShadCN UI components. This app allows users to search, filter, and explore a wide range of cars based on brand, fuel type, price, and seating capacity.

**Live Demo**: [https://carfinderapp-p17s.onrender.com](https://carfinderapp-p17s.onrender.com)  
**GitHub Repository**: [https://github.com/varsreddy/CarFinderApp](https://github.com/varsreddy/CarFinderApp)

---

## Features

### Light & Dark Theme  
Users can seamlessly switch between dark and light themes. The selected theme is saved using `localStorage` and persists across sessions.

### Dynamic Filtering Sidebar  
Users can filter cars by:
- Brand (text input)
- Max Price
- Fuel Type (Petrol, Diesel, Gasoline, Electric)
- Seating Capacity (4, 5, 6, 7)

Applied filters are stored globally using Context API and auto-redirects to the filtered cars listing page.

### Wishlist Functionality  
Users can add cars to their wishlist. The wishlist is stored locally using `localStorage`, so it remains intact even after the browser is closed or refreshed.

### Local Storage Usage  
- Theme preference (light/dark)
- Wishlist data
- Filter settings

### Responsive Design  
The app is fully responsive across all screen sizes:
- Desktop view includes a left sidebar
- Mobile view features a collapsible top-bar with filter dropdown

### Client-Side Rendering  
All data is fetched and rendered on the client side, ensuring fast and reactive performance.

### Pagination Support  
The car listings are paginated to improve loading speed and enhance the browsing experience.

### Toast Notifications  
Toast messages provide clear feedback for user actions such as applying filters and adding/removing cars from the wishlist.

### Built with ShadCN UI Components  
Utilizes prebuilt UI components like Button, Input, Select, and Label for consistent design and faster development.

---

## Tech Stack

- **Frontend**: Vite + React.js
- **Styling**: TailwindCSS
- **UI Components**: ShadCN UI
- **Routing**: React Router
- **State Management**: Context API
- **Persistence**: LocalStorage
- **Deployment**: Render

---

## Getting Started

```bash
git clone https://github.com/varsreddy/CarFinderApp.git
cd CarFinderApp
npm install
npm run dev
