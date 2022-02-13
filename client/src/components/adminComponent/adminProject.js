import React from "react";
import { Link } from "react-router-dom";

const Adminproject = () => {
  return (
    <div className="same-component">
      <div className="same-form">
        <form>
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
          <button>Add Item</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          <div className="projects-admin">
            <div className="icons">
              <Link to={`/editProject`}>
                <i className="fas fa-edit"></i>
              </Link>
              <i className="fas fa-trash"></i>
            </div>

            {/* single project */}
            <div className="single-project">
                <div className="single-project-img">
                    <img src="https://m.media-amazon.com/images/I/71+o6MI9iHL._SY550_.jpg" alt="" />
                </div>

                <div className="single-project-info">
                    <h3>Scenery</h3>
                    <p>Lorem ipsum gcresxdcfvgbhnjh gfdsexrtyhjmnbgvcxedrftgyhujnmk</p>
                </div>
            </div>

            <h3 className="item-delete-tab"></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminproject;
