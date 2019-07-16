import React, { Fragment, useState} from 'react'
import axios from 'axios'

const Order = () => {

    let clothes1 = []

    const [formData, setFormData] = useState({
        clothes: [],
        location: '',
        price: ''
    })

    const HeavyCoat = {
        name: "Heavy Coat",
        price: 24.20,
        quanity: 0,
        id: "5d281b5a95643703ba61b8d1"
    }

    const Trousers = {
        name: "Trousers",
        price: 12.10,
        quanity: 0,
        id: "5d281b8595643703ba61b8d2"
    }

    const Jacket = {
        name: "Jacket",
        price: 13.10,
        quanity: 0,
        id: "5d281b8d95643703ba61b8d3"
    }

    const Dress = {
        name: "Dress",
        price: 22,
        quanity: 0,
        id: "5d281b8d95643703ba61b8d4"
    }

    const Skirt = {
        name: "Skirt",
        price: 12.10,
        quanity: 0,
        id: "5d281b8d95643703ba61b8d5"
    }

    const Blouse = {
        name: "Blouse",
        price: 12.10,
        quanity: 0,
        id: "5d281b8d95643703ba61b8d6"
    }

    const Shirt = {
        name: "Shirt",
        price: 5,
        quanity: 0,
        id: "5d281b8d95643703ba61b8d7"
    }

    const Tie = {
        name: "Tie",
        price: 11,
        quanity: 0,
        id: "5d281b8d95643703ba61b8d8"
    }

    const Scarves = {
        name: "Tie",
        price: 12.20,
        quanity: 0,
        id: "5d281b8d95643703ba61b8d9"
    }

    const {clothes, location, price} = formData

    let ids = clothes.map(a => a.id);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    const HeavyCoatadd = () => {
        clothes1.push(HeavyCoat)
        HeavyCoat.quanity +=1
        clothes.push(HeavyCoat.id)
        let result = clothes1.map(a => a.price);
        let added = result.reduce((a, b) => a + b, 0)
    }

    const Trousersadd = () => {
        Trousers.quanity += 1
        clothes1.push(Trousers)
        clothes.push(Trousers.id)
        let result = clothes1.map(a => a.price);
        let added = result.reduce((a, b) => a + b, 0)
        console.log(clothes1)
    }

    const Jacketadd = () => {
        clothes1.push(Jacket)
        Jacket.quanity +=1
        clothes.push(Jacket.id)
        let result = clothes1.map(a => a.price);
        let added = result.reduce((a, b) => a + b, 0)
        console.log(clothes1)
        console.log(result)
        console.log(added)
        console.log(Jacket)
     }

    const onSubmit = async e => {
        e.preventDefault()
        let result = clothes1.map(a => a.price);
        let added = result.reduce((a, b) => a + b, 0)
        console.log(result)
        let price = added
        const order1 = {
            clothes,
            location,
            price 
            
        }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWQyMmRlM2RiMWE2MGYxY2Q0OWE2YTgyIn0sImlhdCI6MTU2MzI0MzAzMiwiZXhwIjoxNTY2ODQzMDMyfQ.RLfKKjSE5ATdemDPu9zXCVBF67pzZ2QW_dLJZIRR6eE'
               }
                    }

                const body = JSON.stringify(order1)

                const res = await axios.post('/api/orders', body, config)
                console.log(res.data)
            } catch (err) {
                console.error(err.response.data)
            }
        }
    
    return (
        <Fragment>
        <h1>Orders page</h1>
        <button onClick={HeavyCoatadd}> Add Heavy Coat </button>
        <button onClick={Jacketadd}> Add Jacket </button>
        <button onClick={Trousersadd}> Add Trousers </button>
        <button onClick={onSubmit}> Submit </button>
        <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="location" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} required />
        </div>

        <input type="submit" className="btn btn-primary" value="Log In" />
        </form>
        </Fragment>
    )
}

export default Order;