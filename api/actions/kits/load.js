import kits from '../../data/kits.json';

export function getKits() {
  return kits.slice(0);
}

export default function load(req) {
  return new Promise((resolve) => {
    // make async call to database
    setTimeout(() => {
      resolve(getKits(req));
    }, 1000); // simulate async load
  });
}
