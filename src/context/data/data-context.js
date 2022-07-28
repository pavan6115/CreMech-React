import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../../reducer/data/data-reducer";
import axios from "axios"

const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(dataReducer, initialState)

    useEffect( () => {
        (
            async () => {
                try {
                    const data = await axios.get('/api/products')
                    dispatch({ type : "INITPRODUCTS", payload: data.data.products})
                    // console.log(data)

                    const resp = await axios.get('/api/categories')
                    dispatch({ type: "INITCATEGORY", payload: resp.data.categories})
                    // console.log(resp.data.categories)
                }
                catch(e) {
                    console.log('Error -> ', e)
                }
            }   
        )();
    }, [])

    return (
        <DataContext.Provider value={ {state, dispatch} }>
            { children }
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext)

export { useData, DataProvider}