import React, { useState, useEffect } from "react";
import Style from "./Store.module.scss";
import { Menu, Input } from "antd";
import axios from "axios";
const { Search } = Input;


const categories = [
  "All",
  "yogurt",
  "Electronics",
  "Furniture",
  "Shoes",
  "Miscellaneous",
  "Sound",
  "nuevo nombre jeje",
  "category one",
];

const Store = () => {
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [product, setProducts]=useState([])

  const handleSearch = (value) => {
    const filtered = categories.filter((category) =>
      category.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.error("Error fetching data", err);
        });
    }, []);

  return (
    <div className={Style.container}>
      <div style={{ width: 256 }}>
        <Menu mode="inline" theme="dark">
          {filteredCategories.map((category, index) => (
            <Menu.Item className={Style.contain} key={index}>
              {category}
            </Menu.Item>
          ))}
        </Menu>
        <Search
          placeholder="Search categories"
          onSearch={handleSearch}
          style={{ marginBottom: 8 }}
        />
        <hr className={Style.hr} />
        <h3 className={Style.price_range}>Price Range:</h3>
        <input type="range" className={Style.range} />
      </div>
      <div className={Style.products}>
          {product.map((el, i)=>(
            <div>
              <img src={el.image} key={i} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Store;
