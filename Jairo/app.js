fetch('data.json')
  .then(response => response.json())
  .then(data => {

    
    const productListcontainer = document.getElementById('productList');


    data.forEach(product => {
      const listItem = document.createElement('p');
   listItem.textContent='${product.product_name}';
      productListcontainer.appendChild(listItem);
    });

  })
  
  .catch(error => {
  console.error('Error fetching data;', error);
  });

  






















