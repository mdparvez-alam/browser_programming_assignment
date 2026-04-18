
    // 1. Initialize empty products array
  let products = [];
  let cart = [];

  // NEW: Function to fetch data from GitHub
  async function loadProducts() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/mdparvez-alam/browser_programming_assignment/refs/heads/main/E-Shop/products.json');
      const data = await response.json();
      
      // Map the external data to match your existing property names
      products = data.slice(0, 20).map(p => ({
        id: p.key || p.id,
        title: p.name,
        price: p.price,
        img: p.img,
        shipping: p.shipping || 5.00,
        stars: "★".repeat(Math.round(p.ratings || 0)) + "☆".repeat(5 - Math.round(p.ratings || 0)),
        reviews: p.ratingsCount || 0
      }));

      // Initial Render after data is loaded
      renderProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      document.getElementById('product-grid').innerHTML = "<p>Error loading products. Please try again later.</p>";
    }
  }

  // 2. Render Products to UI (Keep this part the same)
  function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = items.map(p => `
      <article class="card">
        <div class="media"><img src="${p.img}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/200x180?text=Product+Image'"></div>
        <div class="meta">
          <div class="title">${p.title}</div>
          <div class="price">€${p.price.toFixed(2)}</div>
          <div class="stars">${p.stars} <span style="color:var(--muted);font-size:11px">(${p.reviews})</span></div>
        </div>
        <div class="cta-row">
          <button class="add-btn" onclick="addToCart('${p.id}')">Add to Cart</button>
        </div>
      </article>
    `).join('');
  }

  // 3. Cart Logic (Changed p.id comparison slightly to support string keys from JSON)
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    updateUI();
  }

  function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateUI();
  }

  function updateUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').innerText = `(${count})`;

    const cartContainer = document.getElementById('cart-items');
    if (cart.length === 0) {
      cartContainer.innerHTML = `<div style="text-align:center;padding:20px;color:var(--muted)">Your cart is empty</div>`;
      document.getElementById('checkout-btn').disabled = true;
    } else {
      cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.img}" alt="" onerror="this.src='https://via.placeholder.com/40?text=IMG'">
          <div class="ci-meta">
            <span class="ci-title">${item.title} (x${item.qty})</span>
            <span class="ci-price">€${(item.price * item.qty).toFixed(2)}</span>
          </div>
          <button class="remove-item" onclick="removeItem('${item.id}')">&times;</button>
        </div>
      `).join('');
      document.getElementById('checkout-btn').disabled = false;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const shipping = cart.reduce((sum, item) => sum + (item.shipping * item.qty), 0);
    
    document.getElementById('subtotal').innerText = `€${subtotal.toFixed(2)}`;
    document.getElementById('shipping').innerText = `€${shipping.toFixed(2)}`;
    document.getElementById('total-price').innerText = `€${(subtotal + shipping).toFixed(2)}`;
  }

  // 4. Search Functionality (Keep this part the same)
  function filterProducts() {
    const query = document.getElementById('productSearch').value.toLowerCase();
    const filtered = products.filter(p => p.title.toLowerCase().includes(query));
    renderProducts(filtered);
  }

  // 5. Checkout Functions (Keep all these parts the same...)
  function openCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.add('show');
    const summaryItems = document.getElementById('summary-items');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const shipping = cart.reduce((sum, item) => sum + (item.shipping * item.qty), 0);
    
    summaryItems.innerHTML = cart.map(item => `
      <div class="summary-item">
        <span>${item.title} (x${item.qty})</span>
        <span>€${(item.price * item.qty).toFixed(2)}</span>
      </div>
    `).join('') + `
      <div class="summary-item">
        <span>Shipping</span>
        <span>€${shipping.toFixed(2)}</span>
      </div>
    `;
    document.getElementById('modal-total').innerText = `€${(subtotal + shipping).toFixed(2)}`;
  }

  function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('show');
  }

  function submitOrder() {
    const fields = ['fullname', 'email', 'phone', 'address', 'city', 'postal'];
    const data = {};
    let valid = true;
    fields.forEach(f => {
        data[f] = document.getElementById(f).value.trim();
        if(!data[f]) valid = false;
    });

    if (!valid) {
      alert('Please fill in all required fields');
      return;
    }

    const orderNumber = 'ORD-' + Date.now();
    document.getElementById('checkout-form-section').style.display = 'none';
    document.getElementById('success-section').style.display = 'block';
    document.getElementById('order-number').innerText = orderNumber;
  }

  function closeCheckoutAndReset() {
    document.getElementById('checkout-form-section').style.display = 'block';
    document.getElementById('success-section').style.display = 'none';
    ['fullname', 'email', 'phone', 'address', 'city', 'postal'].forEach(id => document.getElementById(id).value = '');
    cart = [];
    updateUI();
    closeCheckout();
  }

  document.getElementById('checkout-modal').addEventListener('click', function(e) {
    if (e.target === this) closeCheckout();
  });

  // Call the loader instead of renderProducts
  loadProducts();