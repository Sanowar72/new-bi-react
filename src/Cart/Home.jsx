import React from 'react';
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import './Home.css';

const Home = ({addItems,value}) => {

  
  const items = [
    {
      img: img1,
      title: 'Cotton Shirt',
      desc: 'Note that we don’t provide utility classes for justified text',
      price: '250'
    },
    {
      img: img2,
      title: 'Full Shirt',
      desc: 'Note that we don’t provide utility classes for justified text',
      price: '350'
    },
    {
      img: img1,
      title: 'Full Sleeve Shirt',
      desc: 'Note that we don’t provide utility classes for justified text',
      price: '200'
    },
  ];

  const cartHandler = (data) =>{
    addItems([...value,data]);
  };
  

  const elements = items.map((data, i) => {
    return (
      <div className="card-container col" key={i} >
        <img src={data.img} alt='Item 1' className='img-fluid'/>
        <h5>{data.title}</h5>
        <p>{data.desc}</p>
        <h4>Price: ${data.price}</h4>
        <button onClick={()=>{cartHandler(data)}}>Add to cart</button>
      </div>)
  });


  
  return (
    <main>
      <h3>Our Items</h3>
      <div className='container align-center'>
        <div className="row">
          {elements}
        </div>
      </div>
    </main>
  );
}

export default Home