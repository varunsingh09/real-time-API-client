import React, { useState } from 'react'
import axios from 'axios'

export default function AddOrder() {

    const [data, setData] = useState({})


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('handleSubmit', data)
        const response = await axios.post('http://localhost:5000/orders', {
            ...data
        })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    return (
        <div>
            <form>
                <label htmlFor="customer">Customer Name:</label><br />
                <input type="text" id="customer" name="customer" onChange={handleChange} /><br />
                <label htmlFor="price">Price :</label><br />
                <input type="text" id="price" name="price" onChange={handleChange} /><br />
                <label htmlFor="address">Address :</label><br />
                <input type="text" id="address" name="address" onChange={handleChange} /><br />
                <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
        </div>
    )
}
