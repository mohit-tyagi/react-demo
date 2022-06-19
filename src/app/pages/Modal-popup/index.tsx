import * as React from 'react';
import './modal-popup.scss';

export function ModalPopup() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="container">
        <button className="btn" onClick={() => setIsOpen(true)}>
          Submit
        </button>
        <div className={`popup ${isOpen ? 'open-popup' : ''}`}>
          <img src="./images/kisspng-check-mark.png" alt="tick" />
          <h2>Thank you! </h2>
          <p> Your feedback has been saved, thanks for the response ! </p>
          <button onClick={() => setIsOpen(false)}> Ok </button>
        </div>
      </div>
    </>
  );
}
