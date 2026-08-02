
import React, { type ComponentProps } from 'react'

  type Tvariant =  " primary " | " danger " | " warning " | "success " | "secondary" ;
 
 type TButton =  ComponentProps<"button"> & {
  variant?: Tvariant ;
 }
 
function Button( { children ,variant ,style ,...rest   }   : TButton  ) {
  
  console.log(checkvariant(variant) );
  
  
  
  return (
    <button {...rest} style={{...style,...checkvariant(variant)}} >
        { children  }
    </button>
  )
}

export default Button

function checkvariant ( variant : Tvariant ){
if ( variant === " primary " ) {
  return{backgroundColor : " #9a4b1f" , color : "white "};
}
else if (variant === ' danger ') {
  return {backgroundColor : "red" , color : "white" } ;
}
else if (variant === ' warning ') {
  return { backgroundColor : "yellow" , color : "white" };
}
else if (variant === 'secondary') {
  return { backgroundColor : "gray" , color : "white"};
}
else if (variant === 'success ') {
  return  {backgroundColor : "green" , color : "white" };
}
}