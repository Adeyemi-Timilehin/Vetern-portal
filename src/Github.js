
import { AiTwotoneCustomerService } from "react-icons/ai";
export default function Github({name,img}){
    return<div><h1  className="text-3xl text-blue-600 font-bold underline">my name is {name}</h1>
    
    <img src={img} alt={name} />
    <AiTwotoneCustomerService />
    </div>
  }