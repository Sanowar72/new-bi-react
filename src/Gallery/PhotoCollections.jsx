import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PhotoCollections = () => {
  const [photos, setPhotos] = useState([]);

  const url = 'https://pixabay.com/api/?key=28420107-7cc29fea39bfc34d117d0c78a&q=photography&image_type=photo&pretty=true';


  useEffect(async () => {
    const { data } = await axios.get(url);
    // console.log(data.hits);
    setPhotos(data.hits);
  }, [])


  const imgData = photos.map((data, i) => {
    return (
      <div className="col" key={i} style={{ lineHeight: '10vh', marginBottom: '2px', border:'1px solid black' }} >
        <img className='img-fluid w-20' src={data.largeImageURL} alt='image' style={{ height: '28vh', width: '24vw' }} />

        <span style={{height:'5vh'}}> {data.tags}</span>
      </div>
    )
  })


  return (
    <main>
      <div className="container">
        <div className="row row-cols-4">
          {imgData}
        </div>
      </div>
    </main>
  )
}

export default PhotoCollections;