import React from 'react'

const Modal = ({ modalOpen, modalData, closeModal }) => {
  if (!modalOpen) return null

  return (
    <div className="modal-container active">
      <div className="overlay active" onClick={closeModal}></div>
      <section className="testimonials-modal">
        <button className="modal-close-btn" onClick={closeModal}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={modalData.avatar} alt={modalData.name} width="80" />
          </figure>
          <img src="/assets/images/icon-quote.svg" alt="quote icon" />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title">{modalData.name}</h4>
          <time dateTime="2025-06-14">14 June, 2025</time>
          <div>
            <p>{modalData.text}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Modal