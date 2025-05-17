
# Products List Application

The **Products List Application** is a React-based app that allows users to view and filter a list of products by category and search query. Users can also save their favorite products by marking them with a heart icon.

---

## Preview

![product_lists_app-ezgif com-optimize](https://github.com/user-attachments/assets/89ccc3cf-e831-45a0-b2fd-57767d4a03b4)


## Features

* **Product Search:** Users can search for products by their name using a search bar.
* **Category Filtering:** Filter products based on categories like electronics, fashion, etc.
* **Favorite Products:** Mark products as favorites by clicking the heart icon.
* **Dynamic Updates:** The product list updates dynamically based on search input and category selection.

---

## Technologies Used

* **React:** Component-based UI library for building dynamic user interfaces.
* **React Icons:** For interactive icons like the heart icon.
* **CSS/SCSS:** Styling for components with responsive and dynamic elements.

---

## Components Overview

### **App.jsx**

* Root component of the app.
* Manages state for search input and selected category.
* Renders the `Header` and `ProductsContainer` components.

### **Header.jsx**

* Displays the app title, search bar, and category navigation buttons.
* Dynamically updates the `searchInput` and `searchCategory` states in `App.jsx`.

### **ProductsContainer.jsx**

* Filters products based on search input and selected category.
* Renders a grid of product cards using the `ProductCard` component.

### **ProductCard.jsx**

* Displays product details such as title, price, and image.
* Allows users to mark products as favorites with a clickable heart icon.

### **CategoryButton.jsx**

* Represents an individual category button.
* Highlights the selected category and updates the filter state.

---

## Styling and Interactions

* **SCSS Customizations:**

  * Hover effects for buttons and product cards.
  * Active state styling for category buttons.
  * Conditional classes for the heart icon when a product is marked as favorite.

---


## How to Use

1. **Search Products:**

   * Use the search bar at the top to find products by name.
2. **Filter by Category:**

   * Click on category buttons to filter products. The selected category will be highlighted.
   * Use the "All" category to reset the filter.
3. **Save Favorites:**

   * Click on the heart icon on a product card to mark it as favorite.
   * The heart will turn red for saved products.

---
