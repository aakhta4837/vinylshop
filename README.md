# Project Setup & Execution Instructions

Prerequistes:
Node.js: Version 21 or higher (Node.js 22 recommended).
npm: Node Package Manager, included with Node.js.
Git: Required to clone the project repository.
Code Editor: Visual Studio Code or another preferred editor.
Web Browser: Google Chrome, Firefox, Safari, or another modern browser.

 # Installation Instructions:

# Step 1: Clone the GitHub repository

Open a terminal and run the following commands:

git clone <your-github-repository-url>
cd vinylvault

Replace the placeholder with the actual public GitHub repository URL.

# Step 2: Install project dependencies

Run the following command from the root directory:

npm install

This installs the required packages listed in package.json, including React, React DOM, and Vite

If React Router DOM is not already installed, run:

npm install react-router-dom

Running the Application

# Step 3: Start the development server

From the root project directory, run:

npm run dev

Vite will start the local development server and display a URL similar to:

Local: http://localhost:5173/

# Step 4: Verify the application in a browser

Open a web browser and navigate to:

http://localhost:5173/

To stop the development server, press Ctrl + C in the terminal.

# Project Directory Structure:
The root directory has the README.md, package.json, index.html, and the vite configuration file. Within src there is the components directory that holds React components like Navbar, AlbumCard, and CartDrawer, while the pages directory contains CatalogPage, CheckoutPage, and ProductDetailPage. The data directory holds the album.js dataset, and App.jsx manages shared cart state and routing. Main.jsx initializes the react application, and styles.css defines the ui styling.
