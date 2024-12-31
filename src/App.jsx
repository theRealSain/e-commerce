import { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import FilterBar from "./components/FilterBar";
import './App.css';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [query, setQuery] = useState(""); // Add the query state here

  const handleFilterChange = (query) => {
    setQuery(query); // Update the query state
    const lowercaseQuery = query.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="app">
      <h1>Simple E-commerce Application</h1>

      <FilterBar onFilterChange={handleFilterChange} />

      <div className="product-list">
        {filteredProducts.length === 0 && query ? (
          <p className="small-label">No products found!</p>
        ) : ( 
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
