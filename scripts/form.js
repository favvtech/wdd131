// Sample Product Array
const products = [
  { id: 1, name: "Design" },
  { id: 2, name: "Website Creation" },
  { id: 3, name: "Online Video" },
];

// Wait for DOM to be loaded before executing
document.addEventListener("DOMContentLoaded", function () {
  // Populate Product Name Select Field
  const productSelect = document.getElementById("product");
  if (productSelect) {
    products.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  // Form submission handler to increase the review counter
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      // Increment review counter on form submission
      const reviewsCount = localStorage.getItem("reviewsCount") || 0;
      localStorage.setItem("reviewsCount", parseInt(reviewsCount) + 1);
    });
  }

  // Footer JavaScript for current year and last modified date
  const currentYearElement = document.getElementById("currentYear");
  const lastModifiedElement = document.getElementById("lastModified");

  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  if (lastModifiedElement) {
    const lastModified = new Date(document.lastModified);
    const options = { year: "numeric", month: "long", day: "numeric" };
    lastModifiedElement.textContent = `Last Modified: ${lastModified.toLocaleDateString(
      undefined,
      options
    )}`;
  }
});
