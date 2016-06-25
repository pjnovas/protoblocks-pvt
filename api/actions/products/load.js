import products from '../../data/products.json';

export function getProducts() {
  return products.slice(0).filter( p => p.visible );
}

export default function load(req) {
  return new Promise((resolve) => {
    resolve(getProducts(req));
  });
}
