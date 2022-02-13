import React from "react";
import { Link } from "react-router-dom";

const Editproject = () => {
  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
          <form>
          <h3 className="updated">Updated</h3>
          <h4>Projects component</h4>
          <label htmlFor="text">Id</label>
          <input type="text" name="product-id" required id="product_id" />

          <label htmlFor="text">title</label>
          <input type="text" name="title" required id="title" />

          <label htmlFor="text">Description</label>
          <textarea
            type="text"
            name="description"
            required
            id="description"
            cols="30"
            rows="3"
          />

          <div className="upload">
            <input type="file" name="file" id="file-up" />
            <div id="file_img">
              <img
                src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <span>X</span>
            </div>
          </div>
          <div className="btns">
              <button type="submit">Update item</button>
              <Link to='/admin'><button className="cancel-btn">Cancel</button></Link>
              </div>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editproject;
