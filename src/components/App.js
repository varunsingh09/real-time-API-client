import React from 'react'
import Orders from './Orders'
import AddOrder from './AddOrder'
import '../index.css'

export default function App() {
  return (
    <div className="app container">
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <AddOrder />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
          <Orders />
          </div>
        </div>
      </div>
    </div>
  )
}
