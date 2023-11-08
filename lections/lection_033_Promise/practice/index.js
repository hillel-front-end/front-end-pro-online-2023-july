//https://fakestoreapi.com/products, https://dummyjson.com/products

function sendAjax({ url = "", path = "", method = "GET", body }) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      console.log(xhr.responseText);
      if (xhr.status === 404) {
        reject(new Error("Some error message"));
        return;
      }

      resolve(xhr.responseText);
    };

    xhr.onerror = () => reject;

    xhr.open(method, `${url}${path}`);

    if (method.toLowerCase() === "get" || method.toLowerCase() === "head") {
      xhr.send();
      return;
    }

    xhr.send(body);
  });
}

const mapFakeApiProducts = (products) => {
  const data = products.map((product) => ({
    id: product.id,
    price: product.price,
    title: product.title,
    description: product.description,
    // -----
    discountPercentage: 0,
    thumbnail: product.image,
    images: [product.image],
    rating: product.rating.rate,
    stock: product.rating.count,
  }));

  return { products: data}
};
const getFromFakeStore = () => {
  return sendAjax({
    url: "https://fakestoreapi.com",
    path: "/products",
  })
    .then(JSON.parse)
    .then(mapFakeApiProducts);
};

sendAjax({
  url: "https://dummyjson.com",
  path: "/products2",
})
  .then(JSON.parse)
  .then(null, getFromFakeStore)
  .then(({ products }) => products) // { products: []}
  .then(updateView)
  .catch((error) => alert(error.message));
