export const GroceryListReducer=(groceryListState,{type,payload})=>{
    const {userId,curentDate,prodectList}=groceryListState
     switch(type){
        case 'LIST_ITEMS' :
            return {...groceryListState,
                curentDate:payload.curentDate,
                prodectList:[...prodectList,payload.list]
            };
        case 'FILTER':
            return {
             ...payload,
            }
        case 'UPDATE_LIST':
            return  {...groceryListState,
                prodectList:[...payload]}
        
        case 'RESET' :
            return {...payload}
        case 'RESET_CLEATE' :
            return {
                userId:userId+1,
                curentDate,
                prodectList:prodectList.slice(0,1)
            }
        default :
            return groceryListState
         
     }
}