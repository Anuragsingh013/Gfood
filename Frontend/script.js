const onlineResturantContainer = document.querySelector(
  ".online-resturant-container"
);
let onlineFoodItem = [
  {
    id: 1,
    foodName: "bistro",
    description: "Chaayos Chai+Snacks=Relax",
    rating: 4,
    otherDetail: "Bakery,Beverages,chaat,<br>Desserts,..",
  },
  {
    id: 2,
    foodName: "biryani_rice",
    description: "Chaayos Chai+Snacks=Relax",
    rating: 4,
    otherDetail: "Bakery,Beverages,chaat,<zbr>Desserts,..",
  },
  {
    id: 3,
    foodName: "burger-singh",
    description: "Chaayos Chai+Snacks=Relax",
    rating: 4,
    otherDetail: "Bakery,Beverages,chaat,<br>Desserts,..",
  },
  {
    id: 4,
    foodName: "snacks",
    description: "Chaayos Chai+Snacks=Relax",
    rating: 4,
    otherDetail: "Bakery,Beverages,chaat,<br>Desserts,..",
  },
  {
    id: 5,
    foodName: "snacks",
    description: "Chaayos Chai+Snacks=Relax",
    rating: 4,
    otherDetail: "Bakery,Beverages,chaat,<br>Desserts,..",
  },
  {
    id: 6,
    foodName: "card2",
    description: "Chaayos Chai+Snacks=Relax",
    rating: 4,
    otherDetail: "Bakery,Beverages,chaat,<br>Desserts,..",
  },
  {
    id: 7,
    foodName: "card3",
    description: "Chaayos Chai+Snacks=Relax",
    rating: 4,
    otherDetail: "Bakery,Beverages,chaat,<br>Desserts,..",
  },
  {
    id: 8,
    foodName: "burger-singh",
    description: "Chaayos Chai+Snacks=Relax",
    rating: 4,
    otherDetail: "Bakery,Beverages,chaat,<br>Desserts,..",
  },
  {
    id: 9,
    foodName: "card2",
    description: "Chaayos Chai+Snacks=Relax",
    rating: 4,
    otherDetail: "Bakery,Beverages,chaat,<br>Desserts,..",
  },
  
];
window.addEventListener("load", () => {
 onlineFoodItem.forEach((item)=>{
    onlineResturantContainer.innerHTML += ` <div class="card">
    <img src="./assets/${item.foodName}.avif" alt="">
    <p>${item.description}</p>
    <h3 class="rating"><img src="./assets/star.png" alt="" style="width: 24px; height: 24px ;">4.5 .
        35-40 mins</h3>
    <p>${item.otherDetail}</p>
</div>`;
 })
});
