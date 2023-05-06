import { Groccerycontext } from "../context/Groccerycontext"
import { useContext, useEffect, useState } from "react"

const TotalpriceSec=()=>{
    const [groceryListState,]= useContext(Groccerycontext)
    const{curentDate,prodectList}=groceryListState
    const[total,setTotal]=useState(0)

    const calculateTotal=()=>{

            let result=prodectList.map(list=>{
                if(list.prodectQuetity!=0){
                   return list.prodectPrice* list.prodectQuetity 
                }else{
                   return list.prodectPrice
                }
            }).slice(1)
            
            result.forEach(element => {
                setTotal(pre=> pre + element)
            });            
    }

    useEffect(()=>{
        setTotal(0)
        calculateTotal() 
    },[groceryListState])
    return(
        <div className="totalpricesection">
          <h2>{`Total ₹${total}.00`}</h2>
        </div>
    )
}
export default TotalpriceSec