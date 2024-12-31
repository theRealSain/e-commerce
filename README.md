# Simple E-commerce Application

This is a simple E-commerce web application built with React and Vite. It allows users to search for products, view their details, and display a list of filtered products based on search input.

## Features
- Display a list of products with their details (name, price, category).
- Search bar to filter products by name or category.
- Responsive design that adapts to different screen sizes.
- Clear feedback for when no products match the search criteria ("No products found").

## Tech Stack
- **Frontend**: React, Vite
- **CSS**: Custom styles using CSS Grid and Flexbox for layout.

## Getting Started

### Prerequisites
Ensure that you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v12 or later)

### Clone the Repository

```bash
git clone https://github.com/theRealSain/e-commerce.git
cd simple-ecommerce-app
```

### Install Dependencies

Run the following command to install all the required dependencies:

```bash
npm install
```

### Run the Application

Start the development server using:

```bash
npm run dev
```

This will start the app locally at `http://localhost:3000`.

### Building for Production

To build the app for production, run:

```bash
npm run build
```

This will create an optimized build in the `dist/` folder.

## Folder Structure

```
/src
  /components
    ProductCard.js    # Component to display individual product details
    FilterBar.js      # Search bar component for filtering products
  /data
    products.js       # Sample data for products
  App.js              # Main application file
  index.css           # Global styles
  index.js            # Entry point for React application
```

## Contribution Guidelines

If you'd like to contribute to this project, feel free to fork it and submit a pull request. All contributions are welcome!
