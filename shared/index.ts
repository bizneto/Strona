export function arrItemsIntoRoutes(
  arg: string,
  array: string[],
  setterFunc: (func: string) => void
) {
  setterFunc(
    array
      .filter((e) => e === arg)
      .join("-")
      .toLowerCase()
      .replace(/\s+/g, "-")
  );
}
