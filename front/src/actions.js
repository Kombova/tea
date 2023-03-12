export const addCountToCart = () =>({type:'ADD_COUNT_TO_CART'});
export const minusCountToCart = () =>({type:'MINUS_COUNT_TO_CART'});
export const addItemToCart = (item) =>({type:'ADD_ITEM_TO_CART',item})
export const deleteItemToCart = (itemId) =>({type:'DELETE_ITEM_TO_CART',payload: itemId,})
export const changeItemToCart = (itemId,pieces,pirce) =>({type:'CHANGE_ITEM_TO_CART',payload: itemId,piecesPurchased: pieces,newPrice: pirce})
export const selectItem = (id) =>({type:"SELECT_ITEM",payload: id})