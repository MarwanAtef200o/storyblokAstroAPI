let productsData = []; // To store the original products

 function createCard(product) {
      const { name, description, product_rating, sub_category_id } = product;
      const productVariations = product.ProductVariations;

      const card = document.createElement("div");

      const breakElement = document.createElement("br");
      const nameElement = document.createElement("h3");
      nameElement.textContent = "Name: " + name;
      card.appendChild(nameElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = "Description: " + description;
      card.appendChild(descriptionElement);

      const productRatingElement = document.createElement("p");
      productRatingElement.textContent = "Product Rating: " + product_rating;
      card.appendChild(productRatingElement);

      const categoryElement = document.createElement("p");
      categoryElement.textContent = "Category: " + sub_category_id;
      card.appendChild(categoryElement);

      productVariations.forEach(variation => {
        const priceElement = document.createElement("p");
        priceElement.textContent = "Price: " + variation.price;
        card.appendChild(priceElement);

        const imagesContainer = document.createElement("div");
        imagesContainer.textContent = "Images:";
        variation.ProductVarientImages.forEach(image => {
          const imgElement = document.createElement("img");
          imgElement.src = image.image_path;
          imagesContainer.appendChild(imgElement);
        });
        card.appendChild(imagesContainer);
        card.appendChild(breakElement);
      });

      return card;
    }

     function filterProducts() {
      const priceRangeSelect = document.getElementById("priceRange");
      const ratingRangeSelect = document.getElementById("ratingRange");

      const priceRange = priceRangeSelect.value;
      const ratingRange = ratingRangeSelect.value;

      let filteredProducts = productsData;

      if (priceRange !== "all") {
        const [minPrice, maxPrice] = priceRange.split("-");

        filteredProducts = filteredProducts.filter(product => {
          const productVariations = product.ProductVariations;
          const prices = productVariations.map(variation => variation.price);
          const minProductPrice = Math.min(...prices);
          const maxProductPrice = Math.max(...prices);

          if (minPrice && maxPrice) {
            return minProductPrice >= parseInt(minPrice) && maxProductPrice <= parseInt(maxPrice);
          } else if (minPrice) {
            return minProductPrice >= parseInt(minPrice);
          } else if (maxPrice) {
            return maxProductPrice <= parseInt(maxPrice);
          }


        });
      }

      if (ratingRange !== "all") {
        const [minRating, maxRating] = ratingRange.split("-");

        filteredProducts = filteredProducts.filter(product => {
          return (
            product.product_rating >= parseFloat(minRating) &&
            product.product_rating <= parseFloat(maxRating)
          );
        });
      }

      displayProducts(filteredProducts);
    }

     function sortProducts() {
      const sortOrderSelect = document.getElementById("sortOrder");
      const sortOrder = sortOrderSelect.value;

      let sortedProducts = [...productsData];

      if (sortOrder === "lowToHigh") {
        sortedProducts.sort((a, b) => {
          const aPrices = a.ProductVariations.map(variation => variation.price);
          const bPrices = b.ProductVariations.map(variation => variation.price);
          const aMinPrice = Math.min(...aPrices);
          const bMinPrice = Math.min(...bPrices);
          return aMinPrice - bMinPrice;
        });
      } else if (sortOrder === "highToLow") {
        sortedProducts.sort((a, b) => {
          const aPrices = a.ProductVariations.map(variation => variation.price);
          const bPrices = b.ProductVariations.map(variation => variation.price);
          const aMaxPrice = Math.max(...aPrices);
          const bMaxPrice = Math.max(...bPrices);
          return bMaxPrice - aMaxPrice;
        });
      }

      displayProducts(sortedProducts);
    }

    function displayProducts(products) {
      const productsContainer = document.getElementById("productsContainer");
      productsContainer.innerHTML = "";

      products.forEach(product => {
        const card = createCard(product);
        productsContainer.appendChild(card);
      });
    }

    function fetchProductData() {
      fetch("https://slash-backend.onrender.com/product")
        .then(response => response.json())
        .then(data => {
          productsData = data.data;
          displayProducts(productsData);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }