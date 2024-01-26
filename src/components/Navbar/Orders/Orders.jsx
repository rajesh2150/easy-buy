import React from 'react'
import {useNavigate} from 'react-router-dom'
const Orders = () => {
  const history=useNavigate()
  const handleAddtoHome=()=>{
    history('/')
  }
  return (
    <div>
      <center>
      <button onClick={()=>handleAddtoHome()}>Go To Home</button>
      <p>Orders</p>
      <p>Orders</p>
      <p>Orders</p>
      <p>Orders</p>
      <p>Orders</p>
      <p>Orders</p>
      <p>Orders</p>
      <p>Orders</p>
      <p>Orders</p>
      </center>

    </div>
  )
}

export default Orders
