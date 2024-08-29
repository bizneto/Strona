export function stringToRoute(arg: string) {
  return arg.toLowerCase().replace(/\s+/g, "-");
}

export function deleteSeparator(arg: string): string {
  return arg.replace(/-/g, " ");
}

export function imageUrl(url: string) {
  return `http://bizneto.programero.pl${url}`;
}
export function localImageUrl(url: string) {
  return `http://127.0.0.1:1337${url}`;
}

export function generateValidID() {
  return Math.floor(Math.random() * 1000000);
}
