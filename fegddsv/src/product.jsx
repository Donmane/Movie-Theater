import { useState } from "react"
import {Link} from "react-router-dom"
export default function products(){
const [products, setProducts] = useState ([
    "Mango", "Orange","Ope Ope no mi","Mera Mera no mi"
])
return(
    <div>
        {products.map((item, index)=>(
<h2 key={index}>
    <Link to={`/products/${item}`}>{item}</Link>
</h2>
        ))}
    </div>
)
}