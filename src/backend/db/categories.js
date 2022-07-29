import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Brushes",
    description:
      "to deep clean car in small places, rims, logo",
  },
  {
    _id: uuid(),
    categoryName: "Wash & Wax",
    description:
      "shampoo used for washing car",
  },
  {
    _id: uuid(),
    categoryName: "Cloth & Towels",
    description:
      "used to wipe off the water after car wash",
  },
  {
    _id: uuid(),
    categoryName: "Fluids & Oils",
    description: "Oil to add in engine block after servicing"
  },
  {
    _id: uuid(),
    categoryName: "Washer & Cannons",
    description: "used in cleaning of the car"
  },
  {
    _id: uuid(),
    categoryName: "Kits",
    description: "Combination of items"
  }
];
