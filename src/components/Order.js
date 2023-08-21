import React from 'react'

export default function Order(props) {
  const { order } = props
  return (
    <div className='order'>
      <p>{order.customer}</p>
      <p>{order.price}</p>
      <p>{order.address}</p>
      <p><img src={order.qr_code} alt='qr code'/></p>
    </div>
  )
}
