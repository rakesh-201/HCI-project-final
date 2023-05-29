import React from "react";
import CategoryFoodList from "./CategoryFoodList";

function Category() {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              American
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
                <CategoryFoodList food = {[
                    "Cheeseburger",
                    "Fried chicken",
                    "BBQ ribs",
                    "Mac and cheese",
                    "Steak",
                    "Fried fish",
                    "Clam chowder",
                    "Meatloaf",
                    "Chicken pot pie",
                    "Buffalo wings"
                    ]} />
                
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Italian
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
                <CategoryFoodList food={[
                    "Pizza Margherita",
                    "Spaghetti Bolognese",
                    "Lasagna",
                    "Fettuccine Alfredo",
                    "Osso Bucco",
                    "Bruschetta",
                    "Caprese salad",
                    "Risotto",
                    "Tiramisu",
                    "Cannoli",
                ]} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Mexican
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
                <CategoryFoodList food={[
                "Tacos al pastor",
                "Enchiladas",
                "Guacamole",
                "Quesadillas",
                "Chile relleno",
                "Carnitas",
                "Fajitas",
                "Sopaipillas",
                "Churros",
                "Tres leches cake"
            ]} />
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne1"
              aria-expanded="true"
              aria-controls="collapseOne1"
            >
              Chinese
            </button>
          </h2>
          <div
            id="collapseOne1"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
                <CategoryFoodList food={[
                "Kung Pao chicken",
                "Sweet and sour pork",
                "Dumplings",
                "Chow mein",
                "Peking duck",
                "Hot and sour soup",
                "Ma po tofu",
                "Spring rolls",
                "Fried rice",
                "Egg drop soup"
                ]} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne2"
              aria-expanded="true"
              aria-controls="collapseOne2"
            >
              Japanese
            </button>
          </h2>
          <div
            id="collapseOne2"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
                <CategoryFoodList food={[
                "Sushi rolls",
                "Ramen",
                "Teriyaki chicken",
                "Udon noodles",
                "Yakitori",
                "Tempura",
                "Miso soup",
                "Okonomiyaki",
                "Soba noodles",
                "Green tea ice cream"
                ]} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne4"
              aria-expanded="true"
              aria-controls="collapseOne4"
            >
              Indian
            </button>
          </h2>
          <div
            id="collapseOne4"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
                <CategoryFoodList food={[
                "Butter chicken",
                "Tandoori chicken",
                "Biryani",
                "Saag paneer",
                "Chana masala",
                "Vindaloo",
                "Samosas",
                "Naan bread",
                "Mango lassi",
                "Gulab jamun"
                ]} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne5"
              aria-expanded="true"
              aria-controls="collapseOne5"
            >
              Thai
            </button>
          </h2>
          <div
            id="collapseOne5"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
                <CategoryFoodList food={[
                "Pad Thai",
                "Tom Yum soup",
                "Green curry",
                "Massaman curry",
                "Papaya salad",
                "Satay skewers",
                "Red curry",
                "Pad see ew",
                "Mango sticky rice",
                "Tom Kha Gai soup"
                ]} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne6"
              aria-expanded="true"
              aria-controls="collapseOne6"
            >
              French
            </button>
          </h2>
          <div
            id="collapseOne6"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
                <CategoryFoodList food={[
                "Escargot",
                "Quiche Lorraine",
                "Coq au Vin",
                "Ratatouille",
                "Beef Bourguignon",
                "Croissants",
                "Baguette sandwiches",
                "Crème brûlée",
                "Mousse au chocolat",
                "Tarte Tatin"
                ]} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne7"
              aria-expanded="true"
              aria-controls="collapseOne7"
            >
              Greek
            </button>
          </h2>
          <div
            id="collapseOne7"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
                <CategoryFoodList food={[
                "Souvlaki",
                "Gyro",
                "Spanakopita",
                "Moussaka",
                "Tzatziki",
                "Greek salad",
                "Dolmades",
                "Feta cheese",
                "Baklava",
                "Loukoumades"
                ]} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne8"
              aria-expanded="true"
              aria-controls="collapseOne8"
            >
              Korean
            </button>
          </h2>
          <div
            id="collapseOne8"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
                <CategoryFoodList food={[
                "Kimchi",
                "Bibimbap",
                "Bulgogi",
                "Japchae",
                "Galbi",
                "Jjajangmyeon",
                "Dakgalbi",
                "Kimbap",
                "Sundubu-jjigae",
                "Hotteok"
                ]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
