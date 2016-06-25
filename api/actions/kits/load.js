import kits from '../../data/kits.json';

export function getKits() {
  return kits.slice(0).filter( k => k.visible );
}

export default function load(req) {
  return new Promise((resolve) => {
    resolve(getKits(req));
  });
}
