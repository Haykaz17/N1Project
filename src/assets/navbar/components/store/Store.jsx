import React, { useState, useEffect } from "react";
import Style from "./Store.module.scss";
import { Menu, Input, Button } from "antd";
import axios from "axios";
import memo from "react";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const categories = [
  "All",
  "Electronics", 
  "Jewelery",
  "Man",
  "Woman",

];

const Store = () => {
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [product, setProducts] = useState([]);
const Navigate = useNavigate()
  const handleSearch = (value) => {
    const filtered = categories.filter((category) =>
      category.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

function HandleNavigate (){

    Navigate("/Electronics");
 
}



  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
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
        <div className={Style["Categotis-List"]}>
          <Button onClick={HandleNavigate}>electronics</Button>
          <Button>Jewelery</Button>
          <Button>Man</Button>
          <Button>WoMan</Button>
        </div>
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

export default React.memo(Store);
