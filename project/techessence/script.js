// TechEssence JavaScript - Main functionality
// Student: Favour Igein

// Global variables and state management
let cartItems = [];
let currentFilter = "all";
let isMenuOpen = false;

// Product data - Array of objects with accessory information
const accessories = [
  {
    id: 1,
    name: "Wireless Bluetooth Mouse",
    category: "laptop",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop&auto=format",
    description:
      "Ergonomic wireless mouse with precision tracking and customizable DPI settings",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 2,
    name: "Adjustable Laptop Stand",
    category: "laptop",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop&auto=format",
    description:
      "Aluminum laptop stand with adjustable height and angle for better ergonomics",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 3,
    name: "7-in-1 USB-C Hub",
    category: "laptop",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
    description:
      "Compact USB-C hub with HDMI, USB-A, SD card reader, and power delivery",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 4,
    name: "Adjustable Phone Stand",
    category: "mobile",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&auto=format",
    description:
      "Flexible phone stand with multiple viewing angles for desk or bedside use",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 5,
    name: "Fast Wireless Charger",
    category: "mobile",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&auto=format",
    description:
      "15W fast wireless charging pad with LED indicators and non-slip surface",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 6,
    name: "Noise-Cancelling Headphones",
    category: "audio",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&auto=format",
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 7,
    name: "Waterproof Bluetooth Speaker",
    category: "audio",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&auto=format",
    description:
      "Portable waterproof speaker with 360° sound and 20-hour playtime",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 8,
    name: "USB Laptop Cooling Pad",
    category: "laptop",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format",
    description:
      "Cooling pad with dual USB-powered fans and adjustable height for optimal airflow",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 9,
    name: "Mechanical Gaming Keyboard",
    category: "laptop",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop&auto=format",
    description:
      "RGB mechanical keyboard with Cherry MX switches and programmable macro keys",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 10,
    name: "4K Webcam",
    category: "laptop",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
    description:
      "Ultra HD webcam with autofocus, noise-cancelling microphone, and privacy cover",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 11,
    name: "Car Phone Mount",
    category: "mobile",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&auto=format",
    description:
      "Universal car phone holder with suction cup mount and adjustable grip",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 12,
    name: "Power Bank 20000mAh",
    category: "mobile",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&auto=format",
    description:
      "High-capacity power bank with fast charging and multiple USB ports",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 13,
    name: "Wireless Earbuds",
    category: "audio",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&auto=format",
    description:
      "True wireless earbuds with touch controls and 24-hour total battery life",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 14,
    name: "Studio Microphone",
    category: "audio",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&auto=format",
    description:
      "Professional USB condenser microphone with pop filter and adjustable stand",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 15,
    name: "Laptop Sleeve",
    category: "laptop",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format",
    description:
      "Water-resistant neoprene laptop sleeve with extra padding and zipper closure",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 16,
    name: "Monitor Stand",
    category: "laptop",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop&auto=format",
    description:
      "Adjustable monitor stand with cable management and VESA mount compatibility",
    rating: 4.4,
    inStock: true,
  },
];

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

// Main initialization function
function initializeApp() {
  loadCartFromStorage();
  setupEventListeners();
  updateCartCount();
  setupIntersectionObserver();

  // Check if we're on the home page to add category card functionality
  if (document.querySelector(".category-card")) {
    setupCategoryCards();
  }

  // Check if we're on the accessories page
  if (document.querySelector(".accessories-container")) {
    displayAccessories();
  }

  // Check if we're on the cart page
  if (document.querySelector(".cart-container")) {
    displayCart();
  }

  // Update footer with last modified year
  updateFooterYear();
}

// Setup all event listeners
function setupEventListeners() {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMobileMenu);
  }

  // Newsletter form
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletterSubmit);
  }

  // Search input functionality
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    console.log("Search input found and connected");
    searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        console.log("Enter pressed, searching for:", this.value);
        searchAccessories(this.value);
      }
    });
  } else {
    console.log("Search input not found");
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (isMenuOpen && !event.target.closest(".navbar")) {
      closeMobileMenu();
    }
  });
}

// Mobile menu functionality
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");

  if (!isMenuOpen) {
    navMenu.classList.add("active");
    hamburger.classList.add("active");
    isMenuOpen = true;
  } else {
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  const navMenu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");

  navMenu.classList.remove("active");
  hamburger.classList.remove("active");
  isMenuOpen = false;
}

// Newsletter form handling
function handleNewsletterSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById("newsletter-email");
  const messageDiv = document.getElementById("newsletter-message");
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    // Store email in localStorage
    saveNewsletterEmail(email);

    // Show success message
    showMessage(messageDiv, "Thank you for subscribing!", "success");

    // Clear form
    emailInput.value = "";

    // Reset message after 3 seconds
    setTimeout(() => {
      messageDiv.textContent = "";
      messageDiv.className = "newsletter-message";
    }, 3000);
  } else {
    showMessage(messageDiv, "Please enter a valid email address.", "error");
  }
}

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show message with styling
function showMessage(element, message, type) {
  element.textContent = message;
  element.className = `newsletter-message ${type}`;
}

// Save newsletter email to localStorage
function saveNewsletterEmail(email) {
  let emails = JSON.parse(localStorage.getItem("newsletterEmails") || "[]");
  if (!emails.includes(email)) {
    emails.push(email);
    localStorage.setItem("newsletterEmails", JSON.stringify(emails));
  }
}

// Category cards functionality
function setupCategoryCards() {
  const categoryCards = document.querySelectorAll(".category-card");

  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const category = this.dataset.category;
      // Navigate to accessories page with category filter
      window.location.href = `accessories.html?category=${category}`;
    });
  });
}

// Cart functionality
function addToCart(productId) {
  console.log("Adding to cart, product ID:", productId);
  const product = accessories.find((item) => item.id === productId);

  if (product) {
    console.log("Product found:", product.name);
  } else {
    console.log("Product not found for ID:", productId);
  }

  if (product) {
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({
        ...product,
        quantity: 1,
      });
    }

    saveCartToStorage();
    updateCartCount();

    // Show success message
    showNotification(`${product.name} added to cart!`);
  }
}

function removeFromCart(productId) {
  cartItems = cartItems.filter((item) => item.id !== productId);
  saveCartToStorage();
  updateCartCount();

  // Refresh cart display if on cart page
  if (document.querySelector(".cart-container")) {
    displayCart();
  }
}

function updateQuantity(productId, newQuantity) {
  const item = cartItems.find((item) => item.id === productId);

  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = newQuantity;
      saveCartToStorage();
      updateCartCount();

      // Refresh cart display if on cart page
      if (document.querySelector(".cart-container")) {
        displayCart();
      }
    }
  }
}

function getCartTotal() {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function getCartItemCount() {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

// LocalStorage functions
function saveCartToStorage() {
  localStorage.setItem("techEssenceCart", JSON.stringify(cartItems));
}

function loadCartFromStorage() {
  const savedCart = localStorage.getItem("techEssenceCart");
  if (savedCart) {
    cartItems = JSON.parse(savedCart);
  }
}

// Update cart count display
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = getCartItemCount();
  }
}

// Display accessories with filtering
function displayAccessories(showAll = false) {
  const container = document.querySelector(".accessories-container");
  if (!container) {
    console.log("Accessories container not found");
    return;
  }

  console.log("Displaying accessories, total count:", accessories.length);
  console.log("Container element:", container);
  console.log(
    "Container visibility:",
    window.getComputedStyle(container).display
  );

  // Get category filter from URL if present
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFilter = urlParams.get("category") || "all";

  let filteredAccessories = accessories;

  // Apply category filter
  if (categoryFilter !== "all") {
    filteredAccessories = accessories.filter(
      (item) => item.category === categoryFilter
    );
  }

  // Show only first 8 items initially, unless showAll is true
  const itemsToShow = showAll
    ? filteredAccessories
    : filteredAccessories.slice(0, 8);
  const hasMoreItems = filteredAccessories.length > 8;

  // Generate HTML using template literals
  const accessoriesHTML = itemsToShow
    .map((item) => {
      console.log("Processing item:", item.name);
      return `
        <div class="accessory-card fade-in" data-category="${
          item.category
        }" style="border: 2px solid red; margin: 10px; padding: 10px; background: white;">
             <img src="${item.image}" alt="${
        item.name
      }" loading="lazy" style="max-width: 100%; height: auto; display: block;">
             <div class="accessory-info" style="padding: 15px;">
                 <h3 style="color: #333; margin-bottom: 10px; font-size: 18px;">${
                   item.name
                 }</h3>
                 <p class="description" style="color: #666; margin-bottom: 10px;">${
                   item.description
                 }</p>
                 <div class="rating" style="margin-bottom: 10px;">
                     ${generateStarRating(item.rating)}
                     <span class="rating-text">${item.rating}/5</span>
                 </div>
                 <div class="price-stock" style="margin-bottom: 10px;">
                     <span class="price" style="color: #667eea; font-weight: bold; font-size: 20px;">$${item.price.toFixed(
                       2
                     )}</span>
                     <span class="stock ${
                       item.inStock ? "in-stock" : "out-of-stock"
                     }" style="margin-left: 10px; padding: 5px 10px; border-radius: 15px; font-size: 12px;">
                         ${item.inStock ? "In Stock" : "Out of Stock"}
                     </span>
                 </div>
                 <button class="add-to-cart-btn" 
                         onclick="addToCart(${item.id})"
                         ${!item.inStock ? "disabled" : ""}
                         style="background: #667eea; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; width: 100%; font-size: 16px;">
                     ${item.inStock ? "Add to Cart" : "Out of Stock"}
                 </button>
             </div>
         </div>
         `;
    })
    .join("");

  // Add See More button if there are more items and not showing all
  const seeMoreButton =
    hasMoreItems && !showAll
      ? `
    <div class="see-more-container" style="text-align: center; margin-top: 2rem;">
      <button onclick="displayAccessories(true)" class="see-more-btn" style="background: #667eea; color: white; padding: 1rem 2rem; border: none; border-radius: 25px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
        See More (${filteredAccessories.length - 8} more items)
      </button>
    </div>
  `
      : "";

  // Add See Less button if showing all items
  const seeLessButton = showAll
    ? `
    <div class="see-less-container" style="text-align: center; margin-top: 2rem;">
      <button onclick="displayAccessories(false)" class="see-less-btn" style="background: #6c757d; color: white; padding: 1rem 2rem; border: none; border-radius: 25px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
        See Less
      </button>
    </div>
  `
    : "";

  // Display the accessories with appropriate buttons
  container.innerHTML = accessoriesHTML + seeMoreButton + seeLessButton;

  console.log("Generated HTML length:", accessoriesHTML.length);
  console.log(
    "First 500 characters of HTML:",
    accessoriesHTML.substring(0, 500)
  );

  // Display the accessories
  container.innerHTML = accessoriesHTML;

  console.log("Container after update:", container.innerHTML);

  // Force a reflow to ensure the DOM updates
  container.offsetHeight;

  // Ensure newly added fade-in elements are visible
  const newFadeInElements = container.querySelectorAll(".fade-in");
  newFadeInElements.forEach((el) => el.classList.add("visible"));

  // Update active filter
  updateActiveFilter(categoryFilter);
}

// Generate star rating HTML
function generateStarRating(rating) {
  console.log("Generating stars for rating:", rating);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML +=
      '<span class="star full" style="color: #ffd700; font-size: 18px;">★</span>';
  }

  if (hasHalfStar) {
    starsHTML +=
      '<span class="star half" style="color: #ffd700; font-size: 18px;">★</span>';
  }

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsHTML +=
      '<span class="star empty" style="color: #ccc; font-size: 18px;">☆</span>';
  }

  console.log("Generated stars HTML:", starsHTML);
  return starsHTML;
}

// Update active filter button
function updateActiveFilter(activeCategory) {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.category === activeCategory) {
      btn.classList.add("active");
    }
  });
}

// Filter accessories by category
function filterAccessories(category) {
  currentFilter = category;

  if (category === "all") {
    window.history.pushState({}, "", "accessories.html");
  } else {
    window.history.pushState({}, "", `accessories.html?category=${category}`);
  }

  // Always show only first 8 items when filtering
  displayAccessories(false);
}

// Display cart items
function displayCart() {
  const container = document.querySelector(".cart-container");
  if (!container) return;

  if (cartItems.length === 0) {
    container.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Add some accessories to get started!</p>
                <a href="accessories.html" class="cta-button">Browse Accessories</a>
            </div>
        `;
    return;
  }

  const cartHTML = `
        <div class="cart-items">
            ${cartItems
              .map(
                (item) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p class="price">$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.id}, ${
                  item.quantity - 1
                })">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${
                  item.quantity + 1
                })">+</button>
                    </div>
                    <div class="item-total">
                        $${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${
                      item.id
                    })">×</button>
                </div>
            `
              )
              .join("")}
        </div>
        <div class="cart-summary">
            <div class="total">
                <span>Total:</span>
                <span class="total-amount">$${getCartTotal().toFixed(2)}</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Proceed to Checkout</button>
        </div>
    `;

  container.innerHTML = cartHTML;
}

// Checkout function
function checkout() {
  if (cartItems.length === 0) {
    showNotification("Your cart is empty!", "error");
    return;
  }

  // Show checkout form or process order
  showNotification("Checkout functionality coming soon!", "info");

  // For demo purposes, clear cart after checkout
  setTimeout(() => {
    cartItems = [];
    saveCartToStorage();
    updateCartCount();
    displayCart();
  }, 2000);
}

// Show notification
function showNotification(message, type = "success") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  // Add to page
  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Intersection Observer for fade-in animations
function setupIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((element) => {
    observer.observe(element);
  });
}

// Utility function to format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

// Search functionality
function searchAccessories(query) {
  const searchTerm = query.toLowerCase().trim();
  console.log("Searching for:", searchTerm);

  if (searchTerm === "") {
    displayAccessories();
    return;
  }

  const filteredResults = accessories.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm)
  );

  displaySearchResults(filteredResults, searchTerm);
}

// Display search results
function displaySearchResults(results, searchTerm) {
  const container = document.querySelector(".accessories-container");
  if (!container) return;

  if (results.length === 0) {
    container.innerHTML = `
            <div class="no-results">
                <h3>No results found for "${searchTerm}"</h3>
                <p>Try adjusting your search terms or browse all accessories.</p>
                <button onclick="displayAccessories()" class="cta-button">View All</button>
            </div>
        `;
    return;
  }

  const resultsHTML = `
        <div class="search-results-header">
            <h3>Search results for "${searchTerm}" (${
    results.length
  } items)</h3>
            <button onclick="displayAccessories()" class="back-btn">← Back to All</button>
        </div>
        <div class="accessories-grid">
            ${results
              .map(
                (item) => `
                <div class="accessory-card fade-in" data-category="${
                  item.category
                }" style="border: 2px solid red; margin: 10px; padding: 10px; background: white;">
                    <img src="${item.image}" alt="${
                  item.name
                }" loading="lazy" style="max-width: 100%; height: auto; display: block;">
                    <div class="accessory-info" style="padding: 15px;">
                        <h3 style="color: #333; margin-bottom: 10px; font-size: 18px;">${
                          item.name
                        }</h3>
                        <p class="description" style="color: #666; margin-bottom: 10px;">${
                          item.description
                        }</p>
                        <div class="rating" style="margin-bottom: 10px;">
                            ${generateStarRating(item.rating)}
                            <span class="rating-text">${item.rating}/5</span>
                        </div>
                        <div class="price-stock" style="margin-bottom: 10px;">
                            <span class="price" style="color: #667eea; font-weight: bold; font-size: 20px;">$${item.price.toFixed(
                              2
                            )}</span>
                            <span class="stock ${
                              item.inStock ? "in-stock" : "out-of-stock"
                            }" style="margin-left: 10px; padding: 5px 10px; border-radius: 15px; font-size: 12px;">
                                ${item.inStock ? "In Stock" : "Out of Stock"}
                            </span>
                        </div>
                        <button class="add-to-cart-btn" 
                                onclick="addToCart(${item.id})"
                                ${!item.inStock ? "disabled" : ""}
                                style="background: #667eea; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; width: 100%; font-size: 16px;">
                            ${item.inStock ? "Add to Cart" : "Out of Stock"}
                        </button>
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
    `;

  container.innerHTML = resultsHTML;

  // Ensure newly added fade-in elements are visible in search results
  const newSearchFadeInElements = container.querySelectorAll(".fade-in");
  newSearchFadeInElements.forEach((el) => el.classList.add("visible"));
}

// Make functions globally accessible
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.filterAccessories = filterAccessories;
window.searchAccessories = searchAccessories;
window.getCartTotal = getCartTotal;
window.getCartItemCount = getCartItemCount;
window.updateFooterYear = updateFooterYear;

// Update footer with last modified year
function updateFooterYear() {
  const footerYear = document.querySelector(".footer-bottom p");
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);
    const lastModifiedYear = lastModified.getFullYear();

    if (lastModifiedYear === currentYear) {
      footerYear.innerHTML = `&copy; ${currentYear} TechEssence. All rights reserved.`;
    } else {
      footerYear.innerHTML = `&copy; ${currentYear} TechEssence. All rights reserved. | Last updated: ${lastModifiedYear}`;
    }
  }
}

// Export functions for use in other files
window.TechEssence = {
  addToCart,
  removeFromCart,
  updateQuantity,
  filterAccessories,
  searchAccessories,
  getCartTotal,
  getCartItemCount,
};
