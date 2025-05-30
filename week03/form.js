document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearSpan = document.getElementById('year');
  yearSpan.textContent = new Date().getFullYear();

  // Set last modified date
  const lastModifiedSpan = document.getElementById('lastModified');
  lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

  const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  // Function to populate the product dropdown
  function populateProductDropdown() {
    const productSelect = document.querySelector('select[name="product"]');
    
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = `${product.name} (Avg. Rating: ${product.averagerating})`;
      productSelect.appendChild(option);
    });
  }

  // Call the function to populate dropdown
  populateProductDropdown();
});