fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productListcontainer = document.getElementById('productList');

    data.forEach(product => {
      const listItem = document.createElement('p');
      listItem.textContent = `
        Name: ${product.Name}
        Description: ${product.Description}
        Price: ${product.Price}
        Date Added: ${product.DateAdded}
      `;
      productListcontainer.appendChild(listItem);
    });

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
