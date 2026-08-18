import  { useContext } from 'react'
import { ShoppingCardContext} from '../../context/ShoppingCardContext'

function Home() {

  const  { cardItem } = useContext(ShoppingCardContext)


  return (
    <div>Home</div>
  )
}

export default Home