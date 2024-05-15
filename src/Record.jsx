import React from 'react'
import './style.css'

const Record = ({manu,product,filterBtn}) => {
  return (
    <>
    <div className="main ">
        <h1>App Store</h1>
      <div className="manu pt-3">
        <ul>
        <li>
            <button onClick={ () => filterBtn("all")}>All</button>
            </li>
           {
            manu.map((item) =>{
              return(
                <li key={item.id}><button onClick={() => filterBtn(item.name)}>{item.name}</button></li>
              )
            } )
           }
            
        </ul>
      </div>
      <div className="popular p-3">
         <div className="col-12 d-flex flex-wrap">
          {
            product.map((item) =>{
              return(
                <div className="col-12 col-sm-6 col-lg-3 p-2" key={item.id}>
                <div class="card p-3 shadow">
           <img src={item.image}class="card-img-top img-fluid" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">{item.name}</h5>
             <p class="card-text">Rs : {item.price}</p>
            
           </div>
         </div>
                </div>
              )
            })
          }
      
          </div>
         </div>
    </div>
    </>
  )
}

export default Record
