import React from 'react'

function CategoryFoodList({food}) {
  return (
    <ol className="list-group list-group-numbered">
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{food[0]}</div>
          Italian pasta dish with a tomato-based meat sauce
        </div>
        <span className="badge navbarCol rounded-pill">₹200 [<del> ₹800 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{food[1]}</div>
          Japanese dish of bite-sized pieces of raw fish on top of vinegared
          rice
        </div>
        <span className="badge navbarCol rounded-pill">₹250 [<del> ₹800 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{food[2]}</div>
          Mexican dish of a tortilla filled with meat, beans, cheese, and salsa
        </div>
        <span className="badge navbarCol rounded-pill">₹660 [<del> ₹1900 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{food[3]}</div>
          Indian chicken dish with a creamy tomato-based sauce
        </div>
        <span className="badge navbarCol rounded-pill">₹600 [<del> ₹2800 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{food[4]}</div>
          Chinese dish of crispy roasted duck served with pancakes, cucumber,
          and scallions
        </div>
        <span className="badge navbarCol rounded-pill">₹360 [<del> ₹800 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{food[5]}</div>
          Greek casserole dish made with layers of eggplant, ground meat, and
          tomato sauce
        </div>
        <span className="badge navbarCol rounded-pill">₹250 [<del> ₹900 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{food[6]}</div>
          Italian rice dish cooked with broth and flavored with Parmesan cheese
          and wine
        </div>
        <span className="badge navbarCol rounded-pill">₹680 [<del> ₹2000 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{food[7]}</div>
          Middle Eastern wrap filled with spiced chicken, vegetables, and sauces
        </div>
        <span className="badge navbarCol rounded-pill">₹280 [<del> ₹850 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{food[8]}</div>
          Creole stew with seafood, sausage, chicken, and vegetables in a thick
          roux-based sauce.{" "}
        </div>
        <span className="badge navbarCol rounded-pill">₹530 [<del> ₹900 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{food[9]}</div>
          Creole stew with seafood, sausage, chicken, and vegetables in a thick
          roux-based sauce.{" "}
        </div>
        <span className="badge navbarCol rounded-pill">₹530 [<del> ₹900 </del>] </span>
      </li>
    </ol>
  )
}

export default CategoryFoodList