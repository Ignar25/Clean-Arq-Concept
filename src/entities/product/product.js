export default function buildMakeProduct() {
  return function makeProduct({ id, name, description, date } = {}) {
    if (!id) {
      throw new Error("id not valid");
    }
    if (!name) {
      throw new Error("name not valid");
    }
    if (!description) {
      throw new Error("description not valid");
    }
    if (!date) {
      throw new Error("date not valid");
    }

    const objectDate = new Date(date);

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getDescription: () => description,
      getDate: () => objectDate,
    });
  };
}
