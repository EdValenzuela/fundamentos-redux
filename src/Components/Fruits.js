import React from 'react'
import { connect } from 'react-redux'
import { addFruit } from '../redux/actions/fruitsAction'


const Fruits = ({fruits, addFruit}) => {
    
    const handleSubmit = e =>{
        e.preventDefault();
        const fruit = e.target[0].value;

        e.target[0].value = '';
        addFruit(fruit);


    }

    return (
        <div>
           <h1>Fruit</h1>
           <form onSubmit={handleSubmit}>
               <input 
                type="text" 
                placeholder="agrega tu fruta" 
                />
                <button type="submit">
                    Agregar
                </button>
           </form>
           <ul>
               {fruits.map( (item, i) => (
                   <li key={item + i}>{item}</li>
               ))}
           </ul>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return{
       fruits: state.fruits
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addFruit : fruit => dispatch(addFruit(fruit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fruits)
