import List from "./List"
import { Groccerycontext } from "../context/Groccerycontext"
import { useContext,useEffect,useRef,useState } from "react"
import TotalpriceSec from "./TotalpriceSec"
import SaveChanges from "./Savechanges"
import { PreviousData } from "../context/Groccerycontext"
import Reset from "./Reset"

const Shopinglist=()=>{
    const [handlePreviousData,]=useContext(PreviousData)
    let [{userId,curentDate,prodectList},]=useContext(Groccerycontext)
    let [changeState,setChangeState]=useState(false)
    let [inputs,setInputs]=useState({})
    let shopigCardRef=useRef()
    const {date,month,year}=curentDate
    
    useEffect(()=>{
        setInputs(shopigCardRef.current.children)
    },[])

    return(
        <div className="shoplist">
            <div ref={shopigCardRef} className="shopingcard">
                <div className="shopingcardheader">
                    <div className="shName" ><h3>Shop Name</h3></div>
                    <div className="shAdresses" ><h4>Adresses</h4></div>
                    <div className="EmId" ><h4>Email id</h4></div>
                    <div className="CusId"  ><h4>customer ID</h4></div>
                    <div className="CusIdInfo" ><p>{userId}</p></div>
                    <div className="date"  ><h4>Date</h4></div>
                    <div className="dateInfo" ><p>{`${date} / ${month} / ${year}`}</p></div>
                    <div className="desc" ><h4>DESCRIPTION</h4></div>
                    <div className="qty" ><h4>QTY</h4></div>
                    <div className="un_Price" ><h4>UNIT PRICE</h4></div>
                    <div className="amount" ><h4>AMOUNT</h4></div>
                </div>
                {prodectList.map(list=>
                     list.hasOwnProperty('prodectName')&&(
                        <List{...{list,setChangeState}}/>
                     )
                )}
                <div className="totalSecChange">
                       <TotalpriceSec />
                       <SaveChanges {...{changeState,inputs,setChangeState,handlePreviousData}}/>
                    <Reset/>
                </div>
            </div>
        </div>
    )
}
export default Shopinglist