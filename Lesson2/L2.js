// Product Data Array
const products = [
  {
    id: 1,
    name: "HP Laptop",
    price: 899,
    category: "electronics",
    image: "assets/images/laptop.jpg"
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 120,
    category: "fashion",
    image: "assets/images/shoes.jpg"
  },
  {
    id: 3,
    name: "Leather Sofa",
    price: 499,
    category: "furniture",
    image: "assets/images/sofa.jpg"
  },
  {
    id: 4,
    name: "iPhone 14",
    price: 1099,
    category: "electronics",
    image: "assets/images/phone.jpg"
  },
  {
    id: 5,
    name: "Wrist Watch",
    price: 150,
    category: "fashion",
    image: "assets/images/watch.jpg"
  },
  {
    id: 6,
    name: "Office Chair",
    price: 220,
    category: "furniture",
    image: "assets/images/chair.jpg"
  },
  {
    id: 7,
    name: "Wireless Headphones",
    price: 80,
    category: "electronics",
    image: "assets/images/headphones.jpg"
  },
  {
    id: 8,
    name: "Designer Handbag",
    price: 300,
    category: "fashion",
    image: "assets/images/handbag.jpg"
  },
  {
    id: 9,
    name: "Leather Jacket",
    price: 2500,
    category: "fashion",
    image: "assets/images/jacket.jpg"
  },
  {
    id: 10,
    name: "Queen Size Bed",
    price: 799,
    category: "furniture",
    image: "assets/images/bed.jpg"
  },
  {
    id: 11,
    name: "Wooden Dining Table",
    price: 650,
    category: "furniture",
    image: "assets/images/table.jpg"
  },
  {
    id: 12,
    name: "Double Door Refrigerator",
    price: 999,
    category: "electronics",
    image: "assets/images/refrigerator.jpg"
  },
  {
    id: 13,
    name: "Samsung Smart TV",
    price: 1200,
    category: "electronics",
    image: "assets/images/tv.jpg"
  },
  {
    id: 14,
    name: "Microwave Oven",
    price: 299,
    category: "electronics",
    image: "assets/images/handbag.jpg"
  },
];

// Navbar toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent closing immediately
  navLinks.classList.toggle("show");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove("show");
  }
});


// Render Products
function displayProducts(productsToDisplay) {
  const productsSection = document.getElementById("products");
  productsSection.innerHTML = ""; // clear before rendering

  productsToDisplay.forEach(product => {
    productsSection.innerHTML += `
      <div class="product-card" data-category="${product.category}">
        <!-- <img src="${product.image}" alt="${product.name}"> -->
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <a href="product.html?id=${product.id}">View Details</a>
      </div>
    `;
  });
}

// Filter Products by Category
function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

// Search Functionality
const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );
  displayProducts(filtered);
});

// Initial Render
displayProducts(products);
