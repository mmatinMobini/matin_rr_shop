import React, {  createContext, useContext, useState } from "react";


    interface IShoppingCardContext_Provider {
        children  :  React.ReactNode
    }

    
    
    export   interface ICardItem {
        id : number ,
        qty :number

    }

 export   interface  IShoppingCardContext_itSelf {
                cardItem  : ICardItem[],
                handleIncreaseProduct : ( id : number  ) => void  ;
                handleDecreaseProduct : ( id : number ) => void ;  
                Getproductqtynyid : ( id  : number ) => number ; 
                
    }

 
    // cart  =[
    //     {id : 1 , qty : 2 }, {id : 4 , qty : 5 }
    // ]




export const ShoppingCardContext = createContext({} as IShoppingCardContext_itSelf  );

//mixing useContext(ShoppingCardContext) with custom hook 
    export const useShoppingCardContext =()=>{

            return useContext(ShoppingCardContext)
    }


      

export function ShoppingcardContext_Provider(  {  children  } : IShoppingCardContext_Provider ){

    const [cardItem, setcardItem ] = useState<ICardItem[]>([])

      const handleIncreaseProduct=(id : number )=>{

                setcardItem(currentitems=>{
                    let selcetedItem = currentitems.find(item=> item.id == id )

                    if(selcetedItem == null ){
                        return [...currentitems,{id  : id   , qty : 1 }]
                    }else{
                    return    currentitems.map(item=>{
                            if(item.id == id ){
                                return {...item,
                                    qty : item.qty+1}
                            }else {
                                return item
                            }
                        })
                    }
                })
                    } 



                    const handleDecreaseProduct=(id : number )=>{

                setcardItem(currentitems=>{
                    let selcetedItem = currentitems.find(item=> item.id == id )


                    if(selcetedItem?.qty === 1 ){
                                return currentitems.filter(item=> item.id !== id )
                    }else{
                    return    currentitems.map(item=>{
                            if(item.id == id ){
                                return {...item,
                                    qty : item.qty-1}
                            }else {
                                return item
                            }
                        })
                    }
                })
                    } 


                const Getproductqtynyid=(id : number )=>{
                     return      cardItem.find(item => item.id == id)?.qty || 0 
                }

    return(

         <ShoppingCardContext.Provider value={ { cardItem,Getproductqtynyid, handleIncreaseProduct , handleDecreaseProduct} }>
            { children } 
         </ShoppingCardContext.Provider>
    )
}