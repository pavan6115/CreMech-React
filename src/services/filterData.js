export function sortByPrice(products, sortbytype) {
  if (sortbytype === 'LOW_TO_HIGH') {
    return [...products].sort(
      (item1, item2) =>
        parseFloat(item1.discountedPrice) - parseFloat(item2.discountedPrice)
    )
  } else if (sortbytype === 'HIGH_TO_LOW') {
    return [...products].sort(
      (item1, item2) =>
        parseFloat(item2.discountedPrice) - parseFloat(item1.discountedPrice)
    )
  }
  return products
}

export function sortByRating(products, ratings) {
  if (ratings) {
    return [...products].filter((item) => item.productRating >= ratings)
  } else {
    return products
  }
}

export function sortByCategory(products, category) {
  let filteredCategory = []
  let flag = false
  for (const cat of category) {
    if (cat.isChecked) {
      flag = true
      filteredCategory = filteredCategory.concat(
        products.filter((item) => item.categoryName === cat.categoryName)
      )
    }
  }
  return flag ? filteredCategory : products
}
