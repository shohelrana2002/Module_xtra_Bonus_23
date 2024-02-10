// const arrays = [10, 20, 30, 40, 50, 90, 60];
// for (const array of arrays) {
//   console.log(array);
// }

const products = [
  { id: 1, name: "walton", price: 14000, color: "black", model: "w-23" },
  { id: 2, name: "symphony", price: 22400, color: "white", model: "w-23" },
  { id: 3, name: "vivo", price: 30400, color: "gary", model: "u-23" },
  { id: 3, name: "opo", price: 14200, color: "golden", model: "m-23" },
  { id: 4, name: "tesla", price: 14100, color: "white", model: "tesla-227" },
  { id: 5, name: "iphone", price: 114100, color: "black", model: "x-230" },
  { id: 6, name: "hp Laptop", price: 204100, color: "black", model: "x-230" },
  { id: 7, name: "macBook", price: 250100, color: "black", model: "x-230" },
  { id: 8, name: "lenovo", price: 1100, color: "black", model: "x-230" },
];
// for (const product of products) {
//   console.log(product);
// }

function matched(products, search) {
  const matchedProduct = [];
  for (const product of products) {
    if (
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.color.toLowerCase().includes(search.toLowerCase()) ||
      product.model.toLowerCase().includes(search.toLowerCase())
    ) {
      matchedProduct.push(product);
    }
  }
  return matchedProduct;
}

const result = matched(products, "IphOne");
console.log(result);
