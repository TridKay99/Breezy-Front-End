import React from 'react';
import axios from 'axios';

class Clothes extends React.Component {
  state = {
    clothes: null
  };

  async componentDidMount() {
    const response = await axios('http://localhost:5000/api/clothes/')
    this.setState({
      clothes: response.data
    })
  }

  render() {
    const  { clothes } = this.state
    if (!clothes) {
      return null
    } else {
      return clothes.map((item, index) => {
        return (


          <div className="pricing-grid-container">
          <div className="pricing-grid-box">
            <div className="pricing-left">
              <div className="pricing-left-box">
                <p className="essentials">Essentials</p> 
                <div key={index} className="content-grid">
                    <div className="clothes-name-left-box">
                      
                      <p>{item.name}</p>
                    </div>
                    <div className="clothes-price-right-box">
                       <p>${item.price.toFixed(2)}</p>    
                    </div>
                </div>
             </div>
             </div>
            
            
         
        
            
           </div>
          </div> 
         


























         
        
                      
                      
                   
                  
               


        )
    
      })
    }
  }
}

export default Clothes;