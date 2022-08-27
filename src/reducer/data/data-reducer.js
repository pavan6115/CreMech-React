
const initialState = {
    categories: [],
    products: [],
    sortByRating: "",
    sortByPrice: ""
}

const dataReducer = (state, action) => {
    
    switch (action.type) {
        // INITPRODUCT case is for the initial render for products on view
        case "INITPRODUCTS":
            return {
                ...state,
                products : action.payload
            };

        case "SORT_LOW_TO_HIGH":
            return {
                ...state,
                sortByPrice : "LOW_TO_HIGH"
            };

        case "SORT_HIGH_TO_LOW":
            return {
                ...state,
                sortByPrice : "HIGH_TO_LOW"
            };

        case "RATING":
            return {
                ...state,
                sortByRating : action.payload
            };

        // INITCATEGORY case is for the initial render for categories on view
        case "INITCATEGORY":
            return {
                ...state,
                categories: [...action.payload].map((obj) => ({...obj, isChecked: false}))
            };

        case "CATEGORIES":
            return {
                ...state,
                categories: state.categories.map((item) => action.payload === item.categoryName ? {...item, isChecked: !item.isChecked } : item)
            }
        
        case "CLEAR":
            for(const cat in state.categories){
                if(cat.isChecked){
                    isChecked = false
                }
            }
            return{
                ...state,
                categories: state.categories.map((ele) => ({...ele, isChecked: false})),
                products: state.products,
                sortByRating: "",
                sortByPrice: ""
            }
        default:
            return state
    }
}

export { dataReducer, initialState} 