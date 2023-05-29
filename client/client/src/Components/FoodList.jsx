import React from "react";

function FoodList() {
  return (
    <ol className="list-group list-group-numbered">
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Spaghetti Bolognese</div>
          Italian pasta dish with a tomato-based meat sauce
        </div>
        <span className="badge navbarCol rounded-pill">₹200 [<del> ₹800 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Sushi</div>
          Japanese dish of bite-sized pieces of raw fish on top of vinegared
          rice
        </div>
        <span className="badge navbarCol rounded-pill">₹250 [<del> ₹800 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Tacos</div>
          Mexican dish of a tortilla filled with meat, beans, cheese, and salsa
        </div>
        <span className="badge navbarCol rounded-pill">₹660 [<del> ₹1900 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Butter chicken</div>
          Indian chicken dish with a creamy tomato-based sauce
        </div>
        <span className="badge navbarCol rounded-pill">₹600 [<del> ₹2800 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Peking duck</div>
          Chinese dish of crispy roasted duck served with pancakes, cucumber,
          and scallions
        </div>
        <span className="badge navbarCol rounded-pill">₹360 [<del> ₹800 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Moussaka</div>
          Greek casserole dish made with layers of eggplant, ground meat, and
          tomato sauce
        </div>
        <span className="badge navbarCol rounded-pill">₹250 [<del> ₹900 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Risotto</div>
          Italian rice dish cooked with broth and flavored with Parmesan cheese
          and wine
        </div>
        <span className="badge navbarCol rounded-pill">₹680 [<del> ₹2000 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Chicken shawarma</div>
          Middle Eastern wrap filled with spiced chicken, vegetables, and sauces
        </div>
        <span className="badge navbarCol rounded-pill">₹280 [<del> ₹850 </del>] </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Gumbo</div>
          Creole stew with seafood, sausage, chicken, and vegetables in a thick
          roux-based sauce.{" "}
        </div>
        <span className="badge navbarCol rounded-pill">₹530 [<del> ₹900 </del>] </span>
      </li>
    </ol>
  );
}

export default FoodList;
