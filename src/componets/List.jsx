import { useEffect, useRef, useState } from "react"
import { AiTwotoneDelete,AiTwotoneEdit } from "react-icons/ai";
import { Groccerycontext, PreviousData, saveAndResetData } from "../context/Groccerycontext";
import { useContext } from "react";

const List=({list:{id,prodectName,prodectPrice,prodectQuetity},setChangeState})=>{
  let[groceryListState,dispath]=useContext(Groccerycontext)
  let inputFeald=useRef()
  let customLi=useRef()
  let [itemState,setItem]=useState(prodectName.charAt(0).toUpperCase() + prodectName.slice(1))
  let [quatityState,setQuantity]=useState(parseInt(prodectQuetity))
  let [priceState,setPrice]=useState(parseInt(prodectPrice))
  let [amountState,setAmount]=useState(0)
  let [,setNewDataeSavedResetState]= useContext(saveAndResetData)

   const handleMouseOver=()=>{
    customLi.current.classList.add("add")
   }
   const handleMouseOut=()=>{
    customLi.current.classList.remove("add")
   }
   const handleDelete=(id)=>{
    let FilterdData={
      userId:groceryListState.userId,
      curentDate:groceryListState.curentDate,
      prodectList:groceryListState.prodectList.filter(list=> list.id!=id)
    }
    setNewDataeSavedResetState(FilterdData)
    dispath({
      type:'FILTER',
      payload:FilterdData,
    })
   }
   const handleEditList=()=>{
    [...inputFeald.current.children].slice(0,3).map(inp=>{
      inp.removeAttribute('disabled')
      inp.classList.add('inputsfeald')
    })
   }

   const handleChanges=(changedVal,setErFuntion)=>{
     setErFuntion(changedVal)
     setChangeState(true)
   }

   useEffect(()=>{
    let upProdectList=groceryListState.prodectList.map(list=>{
     if(list.id==id){
         return{
           id:id,
           prodectName:itemState,
           prodectPrice:parseInt(priceState),
           prodectQuetity:parseInt(quatityState)
         }
     }else{
         return list
     }
     })
     dispath({
         type:'UPDATE_LIST',
         payload:upProdectList
     }) 

   },[itemState,quatityState,priceState])

   useEffect(()=>{
      setItem(prodectName.charAt(0).toUpperCase() + prodectName.slice(1))
      setQuantity(prodectQuetity)
      setPrice(prodectPrice)
      quatityState==0?
      setAmount(priceState):
      setAmount(quatityState* priceState)
   },[groceryListState])

    
    return(
      <>
        <div ref={inputFeald} key={id} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="listitem">
            <input  min="0" disabled value={itemState} className="desli" onChange={(e)=>{handleChanges(e.target.value,setItem)}}  type="text" />
            <input  min="0" disabled value={quatityState} className="qtyli" onChange={(e)=>{handleChanges(e.target.value,setQuantity)}} type="number" name="" id="" />
            <input  min="0" disabled value={priceState} className="priceli" onChange={(e)=>{handleChanges(e.target.value,setPrice)}} type="number" name="" id="" />
            <input  min="0" disabled value={`${amountState}.00`} className="amountli"  type="number" name="" id="" />
         <div ref={customLi} className="customize">
           <button  onClick={()=>handleEditList(id)} style={{backgroundColor:"green"}}><AiTwotoneEdit/></button>
           <button  onClick={()=>handleDelete(id)} style={{backgroundColor:"red"}}><AiTwotoneDelete/></button>
         </div>
        </div>
      </>
    )
}

export default List