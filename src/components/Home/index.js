import './index.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Logo from '../../logo.png'
import Card from '../Card'

const Home = () => {
  const [data, setData] = useState([]);

  // effect loop runs when component mounts and also when the component updates
  useEffect(() => {
    // only fetch data when the component mounts
    async function fetchData() {
      const result = await axios(
        'https://ghibliapi.herokuapp.com/films',
      );
      setData(result.data);
    }

    fetchData();

    // an effect hook should return nothing or a clean up function
  }, []);
  // if passing empty variable, hook doesn't run when updating

  return (
    <>
      <img src={Logo} alt="Studio Ghibli" />
      <div className='container'>
        {data.map(item => (
          <Card film={item} />
        ))}
      </div>
    </>
  );
}

export default Home
