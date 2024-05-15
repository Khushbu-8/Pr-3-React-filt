import Record from "./Record"
import { manu ,product} from './Data'
import { useState } from "react";

function App() {
 const [record , setRecord] = useState(product)
  const FilterData = (cat) => {
  
    if(cat === "all"){
      setRecord(product)

    }else{
      let data = product.filter((item) => item.catagory === cat) ;
      setRecord(data);
    }
    }


  return (
   <>
   <Record manu = {manu} product={record} filterBtn={FilterData}/>
   </>
   
  )
}

export default App
