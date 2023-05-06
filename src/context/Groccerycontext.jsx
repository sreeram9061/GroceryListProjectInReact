import { GroceryListReducer } from "../reducer/groceryReducer"
import { createContext, useReducer,useState } from "react"

export const Groccerycontext =createContext()
export const PreviousData =createContext()
export const saveAndResetData =createContext()


const GroccerycontextCo=({children})=>{

   const initialValue={userId:100,curentDate:{date:'',month:'',year:''},
                       prodectList:[{id:110}]}

   const [groceryListState,dispath]=useReducer(GroceryListReducer,initialValue)
   console.log(groceryListState)
   let [handlePreviousDataState,sethandlePreviousData]=useState({})
   let [newDataeSavedResetState,setNewDataeSavedResetState]=useState('')
   
    return(
        <Groccerycontext.Provider value={[groceryListState,dispath]}>
            <PreviousData.Provider value={[handlePreviousDataState,sethandlePreviousData]}>
                <saveAndResetData.Provider value={[newDataeSavedResetState,setNewDataeSavedResetState]}>
                {children}
                </saveAndResetData.Provider>
            </PreviousData.Provider>
        </Groccerycontext.Provider>
    )
}
export default GroccerycontextCo