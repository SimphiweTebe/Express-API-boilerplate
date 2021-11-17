import { useState } from 'react'
import './form.scss';
import axios from 'axios';

function Form() {

    const [state, setState] = useState({
        name: '',
        model: '',
        price: ''
    })

    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post('/api/cars', state)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form__container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                    <input type="text" name="name" placeholder="name" value={state.name} onChange={handleChange}/>
                </div>
                <div className="form__group">
                    <input type="text" name="model" placeholder="model" value={state.model} onChange={handleChange}/>
                </div>
                <div className="form__group">
                    <input type="text" name="price" placeholder="price" value={state.price} onChange={handleChange}/>
                </div>
                <div className="form__group"><button>Submit</button></div>
            </form>
        </div>
    )
}

export default Form
