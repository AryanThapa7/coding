const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Phone', price: 499 },
  { name: 'Tablet', price: 299 },
];

function renderProducts(Items) {
  Items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    productList.appendChild(li);
  });
}
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );
  productList.innerHTML = "";  
  renderProducts(filteredProducts);
});

const productList = document.getElementById('product-list');
renderProducts(products);