import React,{useState} from 'react';

const Form = ({cal}) => {
  
  const [height,setHeight] = useState('');
  const [weight,setWeight] = useState('');

  const submitHandler = () =>{
    cal(height, weight);
  } 

  
  return (
    <div className='container w-50 h-40 border border-whight p-1'>
      <div className="input-group mb-3">
        <input type="number" value={height} onChange={(e)=>{setHeight(e.target.value)}} className="form-control" placeholder="Enter your height in cm" aria-label="Enter your height in cm" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group mb-3">
        <input type="number" value={weight} onChange={(e)=>{setWeight(e.target.value)}} className="form-control" placeholder="Enter your weight in kg" aria-label="Enter your weight in kg" aria-describedby="basic-addon2" />
      </div>
      <div className="input-group mb-3 d-flex justify-content-center">
        <button onClick={submitHandler} type="submit" className="btn btn-primary mx-3 form-control">Submit</button>
      </div>
    </div>
  );
}

export default Form;