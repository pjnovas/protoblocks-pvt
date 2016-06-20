import kits from '../../data/kits.json';

export function getKits() {
  return kits.slice(0);
}

export default function load(req) {
  return new Promise((resolve) => {
    resolve(getKits(req));
  });
}
