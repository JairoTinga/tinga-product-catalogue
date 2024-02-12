fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productListcontainer = document.getElementById('productList');

    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card', 'mb-3', 'mx-auto', 'w-75');

      let clickCount = 0; // Counter for each card

      const productNameWithoutSpaces = product.Name.replace(/\s/g, ''); // Remove spaces from product name

      card.innerHTML = `
        <img src="${product.Name}.webp" class="card-img-top" style="width: 300px; height: autopx;" alt="${product.Name}">
        <div class="card-body">
          <h5 class="card-title">${product.Name}</h5>
          <ul class="list-group">
            <li class="list-group-item">Description: ${product.Description}</li>
            <li class="list-group-item">Price: $${product.Price}</li>
            <li class="list-group-item">Date Added: ${product.DateAdded}</li>
          </ul>
          <button id="addToCartBtn${productNameWithoutSpaces}" class="btn btn-primary">Add to Cart</button>
          <p id="clickCount${productNameWithoutSpaces}">Click Count: 0</p>
        </div>
      `;

      const addToCartBtn = card.querySelector(`#addToCartBtn${productNameWithoutSpaces}`);
      const clickCountElement = card.querySelector(`#clickCount${productNameWithoutSpaces}`);

      addToCartBtn.addEventListener('click', () => {
        clickCount++;
        clickCountElement.textContent = `Click Count: ${clickCount}`;

        // You can implement your cart logic here
        // For example, you might want to update a global cart object or perform some other action.
      });

      productListcontainer.appendChild(card);
    });

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
