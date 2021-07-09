// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  let productPrice = price.textContent;
  let productQuantity = quantity.value;
  let productSubtotal = productPrice * productQuantity;
  subtotal.textContent = productSubtotal;
  return productSubtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let sum = 0;
  const totalField = document.querySelector("#total-value")
  const productArray = document.querySelectorAll('.product')
  for (let i = 0; i < productArray.length; i++) {
    
    sum +=  updateSubtotal(productArray[i]);
    
  }

  
  // ITERATION 3
  totalField.innerHTML  = `Total: $${sum}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
