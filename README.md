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




# 2. React Component Hierarchy 

- **`<App />`** — `src/App.jsx`
  - **State Ownership:**
    - `cart [Array]` = Stores albums added to the cart
    - `isCartOpen [Boolean]` = Controls if cart drawer is visible or not
  - **Callback Handlers:**
    - `handleAddToCart(product, quantity = 1)` = Adds albums to cart or increases quantity
    - `handleUpdateCartQuantity(albumId, delta)` = Increases/decreases cart quantity
    - `handleRemoveFromCart(albumId)` = Removes album from cart
    - `handleClearCart()` = Clears the cart after checkout

  - **`<Navbar />`** — `src/components/Navbar.jsx`
    - **Props:**
      - `cartCount [Number]` = Total quantity of albums in cart
      - `onOpenCart [Function]` = Opens the CartDrawer
    - **Events:**
      - `onClick` → `onOpenCart()`
      - `<Link to="/">` = Navigate to catalog page

  - **`<Routes>`** — React Router
    - **Route: `/` — `<CatalogPage />`** — `src/pages/CatalogPage.jsx`
      - **State:**
        - `selectedGenre [String]` = Current selected genre
      - **Props:**
        - `albums [Array]` = Vinyl record dataset
        - `onAddToCart [Function]`
      - **Events:**
        - `onClick` → `setSelectedGenre(genre)`
      - **`<AlbumCard />`** — `src/components/AlbumCard.jsx`
        - **Props:**
          - `album [Object]` = Album information
          - `onAddToCart [Function]` = Callback from App, passed through CatalogPage
        - **Events:**
          - `onClick` → `onAddToCart(album)`
          - `<Link to="/album/:albumId">` = Navigates to album detail page (using actual album ID)

    - **Route: `/album/:albumId` — `<AlbumDetailPage />`** — `src/pages/AlbumDetailPage.jsx`
      - **State:**
        - `qty [Number]` = Selected album quantity
      - **Props:**
        - `albums [Array]` = Vinyl record dataset
        - `onAddToCart [Function]` = Callback from App
      - **Events:**
        - `onChange` → `setQty(...)`
        - `onClick` → `onAddToCart(...)`
        - `<Link to="/">` = Return to catalog

    - **Route: `/checkout` — `<CheckoutPage />`** — `src/pages/CheckoutPage.jsx`
      - **State:**
        - `isSubmitted [Boolean]` = Tracks order submission
        - `formData [Object]` = Stores checkout form values
          - `fullName [String]`
          - `email [String]`
          - `shippingAddress [String]`
          - `city [String]`
          - `zipCode [String]`
          - `cardNumber [String]`
          - `cvv [String]`
      - **Props:**
        - `cart [Array]` = Albums purchased
        - `onClearCart [Function]` = Clears cart
      - **Events:**
        - `onChange` → `handleChange(event)`
        - `onSubmit` → `handleSubmit(event)`
        - `handleSubmit()` → `onClearCart()`

  - **`<CartDrawer />`** — `src/components/CartDrawer.jsx`
    - **Props:**
      - `isOpen [Boolean]` = Drawer visibility
      - `cart [Array]` = Selected albums and quantities
      - `onClose [Function]` = Closes the drawer
      - `onUpdateQuantity [Function]` = Updates quantities
      - `onRemove [Function]` = Removes albums
    - **Events:**
      - `onClick` → `onClose()`
      - `onClick` → `onUpdateQuantity(item.id, -1)`
      - `onClick` → `onUpdateQuantity(item.id, 1)`
      - `onClick` → `onRemove(item.id)`
      - `onClick` → `handleProceedToCheckout()`

