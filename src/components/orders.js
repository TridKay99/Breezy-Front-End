import React, { Fragment, useState} from 'react'
import axios from 'axios'


const Order = () => {

    const [formData, setFormData] = useState({
        clothes: [],
        location: '',
        price: ''
    })

    const {clothes, location, price} = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    const myFunction = () => {
        clothes.push("5d281b5a95643703ba61b8d1")
        console.log(clothes)
    }

    const onSubmit = async e => {
        e.preventDefault()
        const order1 = {
            clothes,
            location,
            price 
            
        }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWQxZDg4NzUyY2I2ZTUwYTIwYzliN2MzIn0sImlhdCI6MTU2MjQ4MzY2NywiZXhwIjoxNTY2MDgzNjY3fQ.2hO1REE2wgPT7viYUmFqS0eGPq8wUJpsdJPLD5Ys0TQ'
                    }
                }
                const body = JSON.stringify(order1)

                const res = axios.post('/api/orders', body, config)
                console.log(res.data)
            } catch (err) {
                console.error(err.response.data)
            }
        }
    
    return (
        <Fragment>
        <h1>Orders page</h1>
        <button onClick={myFunction}> Add Heavy Coat </button>
        <button onClick={onSubmit}> Submit </button>
        <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="location" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="price" placeholder="Price" name="price" value={price} onChange={e => onChange(e)} required />
        </div>
        <input type="submit" className="btn btn-primary" value="Log In" />
        </form>
        </Fragment>
    )
}

export default Order;