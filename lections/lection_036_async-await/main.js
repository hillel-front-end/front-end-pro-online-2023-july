async function getData() {
  //   fetch("https://dummyjson.com/products")
  //     .then((config) => config.json())
  //     .then((response) => console.log(response, "response"));
  //   console.log(1);

  let response;
  try {
    const config = await fetch("https://dummyjson.com/products2"); // await <-- Promise
    //    setTimeout(() => ,3000)
    if (config.status != 200) {
        throw new Error('ddddd')
    }
    response = await config.json();
    console.log(2);

    // return response;
  } catch (e) {
    console.log(e, "e");
  }
  //   console.log(response, "response");

  return response;
}

// getData().then((result) => console.log(result));

async function main() {
  const result = await getData();

  console.log(result.products, "result");
}

main();

console.log(11111);
