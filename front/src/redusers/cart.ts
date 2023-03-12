interface initial{
    count:number;
    shopingArr:[];

}
const initialState ={
        count:0,
        shopingArr:[],
        
}
const basketChenge = (state:any = initialState,action:any) =>{
    switch (action.type) {
        case 'ADD_COUNT_TO_CART':
            return{
                ...state,
                count: state.count + 1,
                
            };
    case 'MINUS_COUNT_TO_CART':
            return{
                ...state,
                count: state.count - 1,
                
            };
    case 'ADD_ITEM_TO_CART':
            return{
                ...state,
                
                 shopingArr: state.shopingArr.concat(action.item)
            };  
    case 'DELETE_ITEM_TO_CART':
            return{
                ...state,
                
                shopingArr: state.shopingArr.filter((item) => item.objItem.id !== action.payload)
                
            };
    case "CHANGE_ITEM_TO_CART":
        return {
          ...state,
          shopingArr: state.shopingArr.map(item => {
            if (item.objItem.id === action.payload) {
              return {
                ...item,
                piecesPurchased: item.piecesPurchased + action.piecesPurchased,
                itemPrice: item.itemPrice + action.newPrice
              };
            }
            return item;
          })
        };             
    
        default:
            return state;
    }
}
export default basketChenge;