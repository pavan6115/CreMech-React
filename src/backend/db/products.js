import { v4 as uuid } from "uuid";
// brushes
import drillBrushSoft from '../../assets/brushes/drill brush(soft).webp'
import drillBrushHard from '../../assets/brushes/drill brush(hard).webp'
import detailBrushSoft from '../../assets/brushes/detailBrush_soft_2.webp'
import detailBrush2 from '../../assets/brushes/detailBrush_2.webp'
import detailBrush3 from '../../assets/brushes/detailBrush_3.webp'
import metalBrush from '../../assets/brushes/metalBrush.webp'
import petHairRemover from '../../assets/brushes/petDetailBrush.webp'
import tyreBrush from '../../assets/brushes/tyreBrush.webp'
import wheelnRimBrush from '../../assets/brushes/wheelRimBrush.webp'
// wash&wax
import shampoo3M from '../../assets/washWax/3m_carShampoo.png'
import shampootw from '../../assets/washWax/turtlewax_carShampoo.png'
import shampooDgBig from '../../assets/washWax/wash-carShampoo_big.webp'
import shampooSPBig from '../../assets/washWax/wash-carShampoo_bigShinepro.webp'
import shampooDg from '../../assets/washWax/wash-carShampoo.webp'
import shampooMeg from '../../assets/washWax/wash-carShampooMeg.png'
import shampooMeg2 from '../../assets/washWax/wash-carShampooMeg2.png'
import shapmooSP from '../../assets/washWax/wash-carShampooShinePro.webp'
import allPurposerCleaner from '../../assets/washWax/washAllPurposeCleaner.webp'
import washwaxMeg from '../../assets/washWax/washwax-meg.png'
import waterlessWashWaxMeg from '../../assets/washWax/waterlessWashWaxMeg.png'
import waxMeg from '../../assets/washWax/wax-carWaxMeg.png'
import waxingPads from '../../assets/washWax/waxingpads.png'
// cloth&towels
import dryingTowel from '../../assets/clothTowel/detail_dryingTowel.webp'
import plushTowel from '../../assets/clothTowel/plushTowel_1.png'
import microFiberTowel from '../../assets/clothTowel/microFiber_1.png'
import ultraPlushTowel from '../../assets/clothTowel/ultraPlushTowel.webp'
import dryingTowelDG6 from '../../assets/clothTowel/detail_6pcs_towel.webp'
import washingGloves from '../../assets/clothTowel/washingGloves.png'
// fluids&oils
import engineOilCastrol from '../../assets/fluidsOil/castrol_engineOil.png'
import engineOilShellB from '../../assets/fluidsOil/shell_engineOil_big.png'
import engineOilValvo from '../../assets/fluidsOil/valvoline_engineOil.png'
import brakeFluidCastrol from '../../assets/fluidsOil/castrol_brakeFluid.png'
import brakeFluidMaxima from '../../assets/fluidsOil/maxima_brakeFluid.webp'
import brakeFluidMobil from '../../assets/fluidsOil/mobil_brakeFluid.png'
import brakeFluidVW from '../../assets/fluidsOil/vw_brakeFluid.png'
import brakeFluidToyota from '../../assets/fluidsOil/toyota_brakeFluid.png'
import coolantGoMech from '../../assets/fluidsOil/gomech_coolant.png'
import coolantShell from '../../assets/fluidsOil/shell_coolant.png'
import coolantMGP from '../../assets/fluidsOil/suzuki_coolant.png'
import washerFluidRainx from '../../assets/fluidsOil/rainx_washerFluid.png'
import washerFluidSP from '../../assets/fluidsOil/shinepro_washerFluid.png'
// washer&cannons
import sprayBottleDetailMax from '../../assets/washerCannon/detailMax_sprayBottle.webp'
import foamCannonMini from '../../assets/washerCannon/foamCannon.png'
import foamCannon from '../../assets/washerCannon/foamgun.png'
import pressureWasherBosch from '../../assets/washerCannon/bosch_pressureWasher.png'
import pressureWasherKarcher from '../../assets/washerCannon/karcher_pressureWasher.png'
import pressureWasherTools from '../../assets/washerCannon/pressureWasherTools.webp'
import washBucketMeg from '../../assets/washerCannon/meg_washBucket.png'
// kits
import kitCleanerDetailBrushDG from '../../assets/kits/kitDG.webp'
import kitShinePro from '../../assets/kits/shineproWashKit.png'
import kitMegWashingKit from '../../assets/kits/MegWashingKit.png'
import kit3M from '../../assets/kits/kit3M.png'


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // Brush Category
  {
    _id: uuid(),
    productImage: drillBrushSoft,
    productTitle: "Drill Brush [Soft]",
    categoryName: "Brushes",
    actualPrice: 1000,
    discountedPrice: 700,
    discountPercentage: 30,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Clean vehicle's upholstery"
  },
  {
    _id: uuid(),
    productImage: drillBrushHard,
    productTitle: "Drill Brush [Hard]",
    categoryName: "Brushes",
    actualPrice: 1000,
    discountedPrice: 700,
    discountPercentage: 30,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: detailBrushSoft,
    productTitle: "Detailing Brush [Soft]",
    categoryName: "Brushes",
    actualPrice: 1000,
    discountedPrice: 500,
    discountPercentage: 50,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: detailBrush2,
    productTitle: "Detailing Brush [2PCS]",
    categoryName: "Brushes",
    actualPrice: 900,
    discountedPrice: 250,
    discountPercentage: 61,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: detailBrush3,
    productTitle: "Detailing Brush [3PCS]",
    categoryName: "Brushes",
    actualPrice: 950,
    discountedPrice: 450,
    discountPercentage: 62,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  
  {
    _id: uuid(),
    productImage: petHairRemover,
    productTitle: "Pet Hair Remover",
    categoryName: "Brushes",
    actualPrice: 400,
    discountedPrice: 200,
    discountPercentage: 50,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: metalBrush,
    productTitle: "Metal Cleaning Brush",
    categoryName: "Brushes",
    actualPrice: 290,
    discountedPrice: 185,
    discountPercentage: 36,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: tyreBrush,
    productTitle: "Tyre Cleaning Brush",
    categoryName: "Brushes",
    actualPrice: 500,
    discountedPrice: 400,
    discountPercentage: 20,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: wheelnRimBrush,
    productTitle: "Wheel & Rim Brush",
    categoryName: "Brushes",
    actualPrice: 1300,
    discountedPrice: 600,
    discountPercentage: 54,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },

  // Wash&Wax Category
  {
    _id: uuid(),
    productImage: shampoo3M,
    productTitle: "3M Shampoo [0.3L]",
    categoryName: "Wash & Wax",
    actualPrice: 270,
    discountedPrice: 190,
    discountPercentage: 29,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: shampootw,
    productTitle: "TurtleWax Shampoo [3L]",
    categoryName: "Wash & Wax",
    actualPrice: 990,
    discountedPrice: 920,
    discountPercentage: 7,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: shampooDg,
    productTitle: "DG Shampoo [0.5L]",
    categoryName: "Wash & Wax",
    actualPrice: 200,
    discountedPrice: 170,
    discountPercentage: 15,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: shampooMeg,
    productTitle: "Meg Shampoo [0.3L]",
    categoryName: "Wash & Wax",
    actualPrice: 250,
    discountedPrice: 200,
    discountPercentage: 20,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: shampooMeg2,
    productTitle: "Meg Shampoo [1L]",
    categoryName: "Wash & Wax",
    actualPrice: 1000,
    discountedPrice: 820,
    discountPercentage: 18,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: shampooDgBig,
    productTitle: "DG Shampoo [1L]",
    categoryName: "Wash & Wax",
    actualPrice: 1100,
    discountedPrice: 880,
    discountPercentage: 20,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: shampooSPBig,
    productTitle: "Shine Pro Shampoo [5L]",
    categoryName: "Wash & Wax",
    actualPrice: 1500,
    discountedPrice: 990,
    discountPercentage: 7,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: shapmooSP,
    productTitle: "Shine Pro Shampoo [0.3L]",
    categoryName: "Wash & Wax",
    actualPrice: 250,
    discountedPrice: 200,
    discountPercentage: 20,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: allPurposerCleaner,
    productTitle: "DG Cleaner [0.5L]",
    categoryName: "Wash & Wax",
    actualPrice: 200,
    discountedPrice: 170,
    discountPercentage: 15,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: washwaxMeg,
    productTitle: "Meg Wash & Wax [0.3L]",
    categoryName: "Wash & Wax",
    actualPrice: 699,
    discountedPrice: 499,
    discountPercentage: 20,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: waterlessWashWaxMeg,
    productTitle: "Waterless Wash & Wax [0.3L]",
    categoryName: "Wash & Wax",
    actualPrice: 300,
    discountedPrice: 220,
    discountPercentage: 26,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: waxMeg,
    productTitle: "Meg Liquid Wax [0.4L]",
    categoryName: "Wash & Wax",
    actualPrice: 610,
    discountedPrice: 410,
    discountPercentage: 32,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: waxingPads,
    productTitle: "Waxing Pads[2PCS]",
    categoryName: "Wash & Wax",
    actualPrice: 340,
    discountedPrice: 220,
    discountPercentage: 35,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: dryingTowel,
    productTitle: "Weave Drying Towel",
    categoryName: "Cloth & Towels",
    actualPrice: 310,
    discountedPrice: 180,
    discountPercentage: 41,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: plushTowel,
    productTitle: "Plush Drying Towel",
    categoryName: "Cloth & Towels",
    actualPrice: 350,
    discountedPrice: 240,
    discountPercentage: 31,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: microFiberTowel,
    productTitle: "Microfiber Towel",
    categoryName: "Cloth & Towels",
    actualPrice: 465,
    discountedPrice: 235,
    discountPercentage: 49,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: ultraPlushTowel,
    productTitle: "Ultra Plush Drying Towel",
    categoryName: "Cloth & Towels",
    actualPrice: 600,
    discountedPrice: 500,
    discountPercentage: 16,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: dryingTowelDG6,
    productTitle: "Drying Towel [6PCS]",
    categoryName: "Cloth & Towels",
    actualPrice: 1190,
    discountedPrice: 990,
    discountPercentage: 16,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: washingGloves,
    productTitle: "Shine Pro Washing Gloves",
    categoryName: "Cloth & Towels",
    actualPrice: 200,
    discountedPrice: 175,
    discountPercentage: 13,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },


  {
    _id: uuid(),
    productImage: engineOilCastrol,
    productTitle: "Castrol Engine Oil [0.9L]",
    categoryName: "Fluids & Oils",
    actualPrice: 400,
    discountedPrice: 375,
    discountPercentage: 6,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: engineOilShellB,
    productTitle: "Shell Engine Oil [3.5L]",
    categoryName: "Fluids & Oils",
    actualPrice: 1600,
    discountedPrice: 999,
    discountPercentage: 34,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: engineOilValvo,
    productTitle: "Valvoline Engine Oil [0.9L]",
    categoryName: "Fluids & Oils",
    actualPrice: 455,
    discountedPrice: 345,
    discountPercentage: 24,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: brakeFluidCastrol,
    productTitle: "Castrol Brake Fluid [0.3L]",
    categoryName: "Fluids & Oils",
    actualPrice: 350,
    discountedPrice: 210,
    discountPercentage: 40,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: brakeFluidMaxima,
    productTitle: "Maxima Brake Fluid [0.3L]",
    categoryName: "Fluids & Oils",
    actualPrice: 290,
    discountedPrice: 220,
    discountPercentage: 24,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: brakeFluidMobil,
    productTitle: "Mobil Brake Fluid [0.3L]",
    categoryName: "Fluids & Oils",
    actualPrice: 310,
    discountedPrice: 280,
    discountPercentage: 10,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: brakeFluidVW,
    productTitle: "VAG Brake Fluid [0.5L]",
    categoryName: "Fluids & Oils",
    actualPrice: 550,
    discountedPrice: 410,
    discountPercentage: 25,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: brakeFluidToyota,
    productTitle: "Toyota Brake Fluid [0.3L]",
    categoryName: "Fluids & Oils",
    actualPrice: 410,
    discountedPrice: 385,
    discountPercentage: 6,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: coolantGoMech,
    productTitle: "GoMechanic Coolant [1L]",
    categoryName: "Fluids & Oils",
    actualPrice: 250,
    discountedPrice: 190,
    discountPercentage: 24,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: coolantShell,
    productTitle: "Shell Coolant [1L]",
    categoryName: "Fluids & Oils",
    actualPrice: 380,
    discountedPrice: 310,
    discountPercentage: 18,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: coolantMGP,
    productTitle: "Maruti Suzuki Coolant [0.5L]",
    categoryName: "Fluids & Oils",
    actualPrice: 300,
    discountedPrice: 200,
    discountPercentage: 33,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: washerFluidRainx,
    productTitle: "RainX Washer Fluid [0.5L]",
    categoryName: "Fluids & Oils",
    actualPrice: 1100,
    discountedPrice: 890,
    discountPercentage: 20,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: washerFluidSP,
    productTitle: "SP Washer Fluid [0.2L]",
    categoryName: "Fluids & Oils",
    actualPrice: 300,
    discountedPrice: 250,
    discountPercentage: 16,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },


  {
    _id: uuid(),
    productImage: sprayBottleDetailMax,
    productTitle: "DetailMax Spray Bottle",
    categoryName: "Washer & Cannons",
    actualPrice: 220,
    discountedPrice: 180,
    discountPercentage: 18,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: foamCannonMini,
    productTitle: "MJJC Foam Cannon [Mini]",
    categoryName: "Washer & Cannons",
    actualPrice: 250,
    discountedPrice: 220,
    discountPercentage: 12,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: foamCannon,
    productTitle: "MJJC Foam Cannon [Big]",
    categoryName: "Washer & Cannons",
    actualPrice: 310,
    discountedPrice: 275,
    discountPercentage: 11,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: pressureWasherBosch,
    productTitle: "Bosch Pressure Washer",
    categoryName: "Washer & Cannons",
    actualPrice: 1350,
    discountedPrice: 999,
    discountPercentage: 26,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: pressureWasherKarcher,
    productTitle: "Kara Pressure Washer",
    categoryName: "Washer & Cannons",
    actualPrice: 1130,
    discountedPrice: 890,
    discountPercentage: 21,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: pressureWasherTools,
    productTitle: "Pressure Washer Tools",
    categoryName: "Washer & Cannons",
    actualPrice: 250,
    discountedPrice: 200,
    discountPercentage: 20,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: washBucketMeg,
    productTitle: "Meg Wash Bucket",
    categoryName: "Washer & Cannons",
    actualPrice: 150,
    discountedPrice: 130,
    discountPercentage: 13,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },


  {
    _id: uuid(),
    productImage: kitCleanerDetailBrushDG,
    productTitle: "DG Brush & Cleaner",
    categoryName: "Kits",
    actualPrice: 680,
    discountedPrice: 490,
    discountPercentage: 28,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: kitShinePro,
    productTitle: "Shine Pro Washing Kit",
    categoryName: "Kits",
    actualPrice: 2890,
    discountedPrice: 990,
    discountPercentage: 65,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: kitMegWashingKit,
    productTitle: "Meg Washing Kit",
    categoryName: "Kits",
    actualPrice: 2200,
    discountedPrice: 999,
    discountPercentage: 54,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  },
  {
    _id: uuid(),
    productImage: kit3M,
    productTitle: "3M Car Detailing Kit",
    categoryName: "Kits",
    actualPrice: 2100,
    discountedPrice: 985,
    discountPercentage: 53,
    productRating: (Math.random() * 4 + 1).toFixed(1),
    productDescription: "Wipe off water after wash"
  }
];
