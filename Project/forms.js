document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();
  
    // Set last modified date
    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
  
    const reserves = [
      {
        id: "dg-2007",
        name: "Dinokeng Game Reserve",
        averagerating: 4.5
      },
      {
        id: "tt-2020",
        name: "Thula Thula Private Game Reserve",
        averagerating: 4.7
      },
      {
        id: "sp-1990",
        name: "Shamwari Private Game Reserve",
        averagerating: 3.5
      },
      {
        id: "kg-2005",
        name: "Kariega Game Reserve",
        averagerating: 3.9
      },
      {
        id: "ag-1910",
        name: "Amakhala Game Reserve",
        averagerating: 5.0
      },
      {
        id: "kl-1989"
        name: "Kololo Game Reserve",
        averagerating: 5.0
      },
      {
        id: "ig-1919",
        name: "Imfolozi Game Reserve",
        averagerating: 5.0
      
      {
        id: "pg-1979",
        name: "Pilanesberg National Park",
        averagerating: 5.0
      },
      {
        id: "mg-1985",
        name: "Madikwe Game Reserve",
        averagerating: 5.0
      }
    ];
  
    // Function to populate the product dropdown
    function populateProductDropdown() {
      const productSelect = document.querySelector('select[name="reserve"]');
      
      products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.name} (Avg. Rating: ${reserve.averagerating})`;
        productSelect.appendChild(option);
      });
    }
  
    // Call the function to populate dropdown
    populateProductDropdown();
  });