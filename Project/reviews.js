document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();
  
    // Set last modified date
    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
  
    const reserves = [
        {
            reserveName: "Dinokeng Game Reserve",
            id: dn01,
            
        },
        {
            reserveName: "Thula Thula Private Game Reserve",
            id: tt02,
    
        },
        {
            reserveName: "Shamwari Private Game Reserve",
            id: sp03,
            
        },
        {
            reserveName: "Kariega Game Reserve",
            location: kg04,
            
        },
        {
            reserveName: "Amakhala Game Reserve",
            location: ag05,
            
        },
        {
            reserveName: "Kololo Game Reserve",
            id: kl06,
        
        },
        {
            reserveName: "Imfolozi Game Reserve",
            id: ig07,
        {
            reserveName: "Pilanesberg National Park",
            location: pg08,
            
        },
        
        {
            reserveName: "Madikwe Game Reserve",
            location: mg09,
            
        }
    ];
  
    // Function to populate the product dropdown
    function populateProductDropdown() {
      const productSelect = document.querySelector('select[name="reserves"]');
      
      products.forEach(reserve => {
        const option = document.createElement('option');
        option.value = reserve.id;
        option.textContent = `${reserve.name} (Avg. Rating: ${reserve.averagerating})`;
        productSelect.appendChild(option);
      });
    }
  
    // Call the function to populate dropdown
    populateProductDropdown();
  });