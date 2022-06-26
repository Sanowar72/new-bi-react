import React, { useState } from 'react';
import Header from './Header.jsx'
import Form from './Form.jsx'

const HomePage = () => {
  const [msg,setMsg] = useState('');
  const [bmi, setBmi] = useState();
  const [display, setDispaly] = useState(false);
  
  const calculateBMI = (h,w)=>{
    const value = ((w/h/h)*10000).toFixed(1);
    setBmi(value)
    if(bmi<18.5){
      setMsg('Underweight')
    }else if(bmi>18.5 && bmi<24.9){
      setMsg('Normal Weight')
    }else{
      setMsg('Overweight')
    }
    setDispaly(true);
  }
  
  return (
    <main>
      <Header />
      <Form cal={calculateBMI}/>
      {display && <h4 className='mt-3'>
        Your Body Mass Index is {bmi}. This is considered {msg}.
      </h4>}
    </main>
    )
}

export default HomePage;