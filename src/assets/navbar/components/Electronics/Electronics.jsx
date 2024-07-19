import React, { useState, useEffect } from "react";
import Style from "./Electronics.module.scss";
import { Menu, Input } from "antd";
import axios from "axios";
import memo from "react";

const { Search } = Input;

const Electronics = () => {
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [product, setProducts] = useState([]);

  const handleSearch = (value) => {
    const filtered = categories.filter((category) =>
      category.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
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
        {product.map((el, i) => (
          <div className={Style.img_contain}>
            <img src={el.image} className={Style.img} />
            <div className={Style.dflex}>
              <p className={Style.p}>{el.category}</p>
              <p className={Style.title}>{el.title}</p>
              <div className={Style.price_btn}>
                <p className={Style.price}>{el.price}$</p>
                <button className={Style.share}>{el.button}</button>
                <button className={Style.btn}>{el.button}🛒 Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Electronics);
