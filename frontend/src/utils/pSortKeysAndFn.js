export const productSortKeys = [
  { value: "default", content: "Default" },
  { value: "plth", content: "Price: Lowest to Highest" },
  { value: "phtl", content: "Price: Highest to Lowest" },
  { value: "rlth", content: "Rating: Lowest to Highest" },
  { value: "rhtl", content: "Rating: Highest to Lowest" },
];

export const sortingProducts = (option, products, cb) => {
  switch (option) {
    case "default":
      cb([]);
      break;

    case "plth":
      cb([...products].sort((a, b) => a.price - b.price));
      break;

    case "phtl":
      cb([...products].sort((a, b) => b.price - a.price));
      break;

    case "rlth":
      cb([...products].sort((a, b) => a.rating - b.rating));
      break;

    case "rhtl":
      cb([...products].sort((a, b) => b.rating - a.rating));
      break;

    default:
      break;
  }
};
