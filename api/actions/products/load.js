import products from '../../data/products.json';

export function getProducts() {
  return products.slice(0);
}

export default function load(req) {
  return new Promise((resolve) => {
    // make async call to database
    setTimeout(() => {
      resolve(getProducts(req));
    }, 1000); // simulate async load
  });
}
