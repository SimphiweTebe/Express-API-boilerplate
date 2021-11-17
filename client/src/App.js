import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/Card';
import Form from './components/Form';

function App() {

  const [cars, setCars] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=> {

    setLoading(true)
    try {
        const newCars = await axios.get('/api/cars')
        setCars(newCars.data)
        setLoading(false)
    } catch (err) {
        setError(err)
        setLoading(false)
        console.log(err);
    }
  }

  return (
    <section className="app__container">
      <h1 className="app__title">Jeep Cars</h1>
      <Form />
      <div className="card__wrapper">
        {
          cars ? cars.map(car => (
            <Card car={car} key={car._id}/>
          )) : <div className="loading">loading...</div>
        }
        {
          error && <h3>{error}</h3>
        }
      </div>
    </section>
  );
}

export default App;
