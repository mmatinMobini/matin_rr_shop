import React, {  createContext, useState } from "react";


    interface IShoppingCardContext_Provider {
        children  :  React.ReactNode
    }


 export   interface  IShoppingCardContext_itSelf {
                cardItem  : []
    }
export const ShoppingCardContext = createContext<IShoppingCardContext_itSelf>({
    cardItem : []
})


export function ShoppingcardContext_Provider(  {  children  } : IShoppingCardContext_Provider ){

    const [cardItem, setcardItem ] = useState<[]>([])

    return(

         <ShoppingCardContext.Provider value={ { cardItem } }>
            { children } 
         </ShoppingCardContext.Provider>
    )
}