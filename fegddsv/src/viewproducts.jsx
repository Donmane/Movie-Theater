import { useEffect } from "react"
import { useParams } from "react-router-dom"
export default function viewproducts(){
const {prod_name} = useParams()

useEffect(()=>{

},[])
return(
    <h1>view product: your product is {prod_name}</h1>
)
}