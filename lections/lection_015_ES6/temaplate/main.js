const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

// Hometask --- refactoring  ---- decomposition

async function getAllProducts() {
  const response = await fetchAllProducts();
  const prouducts = response.products;

  console.log(prouducts, "prouducts");

  const productsTamplate = `<section class="product-item">
  <div class="image-wrapper">
    <img
      src="https://40.media.tumblr.com/2a46a0ec64f5d1c0dcc8814baf9833f4/tumblr_nj930lpXGB1qif4c6o1_1280.jpg"
      alt=""
      class="image"
    />
  </div>
  <div class="content-wrapper">
    <div class="title">
      <h4>Folk-tastic Pennant</h4>
    </div>
    <div class="price">
      $19.9
      <span class="discount">[відобразити суму з урахуванням знижки]</span> 
    </div>

    <div class="description">some description</div>
    <div class="actions">
      <button id="cart"class="button green-solid cart">
          Add to Cart
      </button>
      <button class="button more">More Details</button>
    </div>
  </div>
</section>`;
}

getAllProducts();
