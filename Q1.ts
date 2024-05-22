type Product = {
    name: string;
    price: number;
    inventory: {
      stock: number;
      colorOptions: string[];
    };
  };
  
  // Array of product objects
  let products: Product[] = [
    {
      name: "T-shirt",
      price: 20,
      inventory: {
        stock: 50,
        colorOptions: ["red", "blue", "green"],
      },
    },
    {
      name: "Jeans",
      price: 2000,
      inventory: {
        stock: 1000,
        colorOptions: ["black", "blue", "grey"],
      },
    },
    {
      name: "Sneakers",
      price: 3000,
      inventory: {
        stock: 50,
        colorOptions: ["white", "black", "red"],
      },
    },
  ];
  
  // Function to change color and adjust price
  function changeColor(product: Product, newColor: string): void {
    const colorIndex = product.inventory.colorOptions.indexOf(newColor);
    if (colorIndex !== -1) {
      // Update color
      product.inventory.colorOptions[0] = newColor;
  
      // Adjust price based on color (example logic)
      switch (newColor) {
        case "red":
          product.price *= 1.1; // Increase by 10%
          break;
        case "blue":
          product.price *= 0.95; // Decrease by 5%
          break;
        default:
          break;
      }
    } else {
      console.log(`Color ${newColor} is not available for ${product.name}`);
    }
  }
  
  // Function to display product details
  function displayProductDetails(product: Product): void {
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
    
  }
  
  // Display details of each product
  products.forEach((product) => {
    displayProductDetails(product);
  })
  