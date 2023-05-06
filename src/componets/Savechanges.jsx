import { useContext, useEffect, useMemo, useRef } from "react"
import { Groccerycontext } from "../context/Groccerycontext"

import { saveAndResetData } from "../context/Groccerycontext"



const SaveChanges=({changeState,inputs,setChangeState,handlePreviousData})=>{

   let [groceryListState,dispath]= useContext(Groccerycontext)
   let [newDataeSavedResetState,setNewDataeSavedResetState]= useContext(saveAndResetData)

    let saveChange=useRef()
    useEffect(()=>{
        changeState && saveChange.current.classList.add('add')
    },[changeState])


    const setAlertChanges=()=>{
        let section=[...inputs]
        section.slice(1,section.length-1).map(item=>
            [...item.children].slice(0,3).map(inp=>{
                inp.setAttribute('disabled','')
                inp.classList.remove('inputsfeald')
            })
        )
        saveChange.current.classList.remove('add')
        setChangeState(false)
    }

    const handleSetUpdate=()=>{
        setNewDataeSavedResetState(groceryListState)
        setAlertChanges()
    }
    
    const handlePrevious=()=>{
        setAlertChanges()

        newDataeSavedResetState=='' ?
        dispath({
            type:'RESET',
            payload: handlePreviousData
        }) : 
        dispath({
            type:'RESET',
            payload:newDataeSavedResetState,
        })
    }


    
    return(

        <div ref={saveChange} className="savecha">
            <p>Do you want to save the changes you maded</p>
            <div className="btns">
                <button onClick={handleSetUpdate} style={{backgroundColor:'green'}}>YES</button>
                <button onClick={handlePrevious} style={{backgroundColor:'red'}}>NO</button>
            </div>
        </div>
    )
}
export default SaveChanges