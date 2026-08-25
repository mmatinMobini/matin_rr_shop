import React, {  createContext, useContext, useState } from "react";


    interface IShoppingCardContext_Provider {
        children  :  React.ReactNode
    }

    
    
    export   interface ICardItem {
        id : number ,
        qty :number

    }

 export   interface  IShoppingCardContext_itSelf {
                cardItem  : ICardItem[]
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

    return(

         <ShoppingCardContext.Provider value={ { cardItem } }>
            { children } 
         </ShoppingCardContext.Provider>
    )
}