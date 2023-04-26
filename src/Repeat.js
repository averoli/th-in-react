import React, { useState } from "react";

const ProductRow = ({ product }) => {
  console.log(product);
  let name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th>{category}</th>
    </tr>
  );
};

const ProductTable = ({ products, filterText, inStockOnly }) => {
  let row = [];
  let currentProduct = null;
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== currentProduct) {
      row.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }

    row.push(<ProductRow key={product.name} product={product} />);

    currentProduct = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  );
};

const SerachBar = ({ filterText, inStockOnly, onFilterText, onStockOnly }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Serach..."
        value={filterText}
        onChange={(e) => onFilterText(e.target.value)}
      />
      <input
        type="checkbox"
        checked={inStockOnly}
        onChange={(e) => onStockOnly(e.target.checked)}
      />
      <label>Only show products in stock</label>
    </form>
  );
};

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <>
      <SerachBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterText={setFilterText}
        onStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
};

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const Repeat = () => {
  return <FilterableProductTable products={PRODUCTS} />;
};

export default Repeat;
