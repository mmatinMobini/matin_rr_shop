import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/container/Container'

function Product() {

        const pramas = useParams()

  return (
  
    <Container>
    {/* <div>Product{pramas.id}</div> */}
        <div className='shadow-2xl h-96  mt-3 grid grid-cols-12'>
                 <div className=' col-span-10 p-5'>

                    <h1 className='text-right'>title </h1>
                    <div>
                        <p className='text-right'>
                                            price
                        </p>
                        <p className='text-right'>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quo cupiditate. Sed accusantium, eveniet aliquid maiores iure aperiam aut voluptates. Mollitia corrupti animi corporis laborum quisquam ex eligendi et dolore! </p>
                        </div>

                 </div>



                   <div className='  col-span-2 p-5'>
            
            
            <img className='rounded' src="https://studiomani.ir/wp-content/uploads/2025/04/facial-cleanser-photography-03.webp" alt="" />
             <div>
                <button>
                    add to your cart
                </button>
            </div>
            
            
            </div>

           
        </div>

    </Container>
)
}

export default Product