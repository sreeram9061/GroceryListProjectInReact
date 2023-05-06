import { useContext, useEffect, useRef } from "react"
import { Groccerycontext } from "../context/Groccerycontext"
import { useNavigate } from "react-router-dom";
import { PreviousData } from "../context/Groccerycontext"
const Calculatorcard=()=>{
    const [groceryListState,dispath]=useContext(Groccerycontext)
    const [,sethandlePreviousData]=useContext(PreviousData)
    const {userId,curentDate,prodectList}=groceryListState
    let navigate=useNavigate()
    let prodectName=useRef()
    let prodectPrice=useRef()
    let prodectQuetity=useRef()
    let date=useRef()
    let month=useRef()
    let year=useRef()
    

    const handleList=()=>{

        //cheking if there is had empty
        let inputFealds=[prodectName,prodectPrice,prodectQuetity,date,month,year]
        inputFealds.map(item=>{
            item.current.value=='' ?
            item.current.classList.add('redalert') :
            item.current.classList.remove('redalert')
        })


        const setDate=(date,month,year)=>{
            return{
                date:date.current.value,
                month:month.current.value,
                year:year.current.value
                }
        }
        const setPreviousDate=()=>{
            date.current.value=curentDate.date
            month.current.value=curentDate.month
            year.current.value=curentDate.year

            return  groceryListState.curentDate

        }
        
        //set date and pass data
        !inputFealds.some(item=> item.current.value=='') &&(
            dispath({
                type:'LIST_ITEMS',
                payload:{
                    curentDate: prodectList.length==1&&userId==100? setDate(date,month,year) : setPreviousDate(),
                    list:{
                        id:prodectList[prodectList.length-1].id+1,
                        prodectName:prodectName.current.value,
                        prodectPrice:parseInt(prodectPrice.current.value),
                        prodectQuetity:parseInt(prodectQuetity.current.value),
                    },
                }
            }),
            prodectName.current.value='',
            prodectPrice.current.value='',
            prodectQuetity.current.value=''
        )
    }

    useEffect(()=>{
        date.current.value=curentDate.date,
        month.current.value=curentDate.month,
        year.current.value=curentDate.year
    },[userId])
    
    const handleNavigation=()=>{
        sethandlePreviousData(groceryListState)
        prodectList.length>1 ? navigate("/shopinglist") :  alert('Please add some list')
    }

    return(
        <div className="calculatorcard">
            <div className="containercard">

                <div className="headcontainer">
                   <div className="head">
                   <h3>List No {prodectList.length}</h3>
                   </div>
                   <button onClick={handleNavigation} >Show list</button>
                </div>
     
                 <div className="prodect">
                     <label htmlFor="">Prodect Name</label>
                     <input className="" ref={prodectName} type="text" />
                 </div>
     
                 <div className="prodectprice">
                     <label htmlFor="">Prodect Price</label>
                     <input className="" min="0"  ref={prodectPrice} type="number" name="" id="" placeholder="₹" />
                 </div>
     
                 <div className="quatityDate">
                    <div className="quetity">
                      <label htmlFor="">Prodect Quetity</label>
                      <input className="" min="0"   ref={prodectQuetity} type="number" />
                    </div>
     
                     <div className="date">
          
                        <label htmlFor="">Date</label>

                        <div className="dateinput">
                          <input className="" min="1"   maxLength={2} ref={date} type="number" placeholder="DD"/>
                          <input className="" min="1"    maxLength={2} ref={month} type="number" placeholder="MM"/>
                          <input className="" min="1"   ref={year} type="number" maxLength="4" placeholder="YY"/>
                        </div>
                        
                     </div>
     
                 </div>
                 <button onClick={handleList} id="btn">Add to list</button>
            </div>
        </div>
    )
}
export default Calculatorcard