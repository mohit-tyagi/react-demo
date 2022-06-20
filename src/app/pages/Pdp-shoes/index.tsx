import * as React from 'react';
import './pdp.scss';

export function PdpShoes() {
  return (
    <>
      <div className={'main-container'}>
        <div className="card">
          <div className="left">
            <div className="image-container">
              <img
                src="./images/Pink-running-shoes.png"
                alt=""
                className="image"
              />
            </div>
            <div className="size-selection">
              <span> CHOOSE SIZE</span>
              <ul className="size-list">
                <li className="size">5</li>
                <li className="size">6</li>
                <li className="size">7</li>
                <li className="size">8</li>
                <li className="size">9</li>
                <li className="size">10</li>
                <li className="size">11</li>
                <li className="size">12</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <span className="categories"> Lorem ipsum dolor</span>
            <h3 className="title">Lorem ipsum dolor sit</h3>
            <span className="price"> $15</span>
            <span className="details">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              deserunt doloremque doloribus facere iure maxime minus mollitia
              rem rerum voluptatum dolor sit amet, consectetur adipisicing elit.
              Autem deserunt doloremque.
            </span>
            <div className="actions">
              <button className="add-to-cart">ADD TO CART</button>
              <button className="favorite">&hearts;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
