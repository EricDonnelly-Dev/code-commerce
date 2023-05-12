
import './App.css'
import Signup from './components/SignupLogin/signup'
import Cart from './components/cart/cart'
import { useState } from 'react'
import reactImg from './assets/react.svg'
import angularImg from './assets/angular.svg'




function App() {
  const [appData, setAppData] = useState({
    compToRender: 'signup',
    cartItems: [ 
      {id:1, name:'First',category:'react', price:50, total:50, selectValue:1, image:reactImg},
      {id:2, name:'Second',category:'react', price:50, total:100, selectValue:2, image:reactImg},
      {id:3, name:'Third',category:'react', price:50, total:100, selectValue:2, image:reactImg},
      {id:4, name:'Fourth',category:'angular', price:70, total:70, selectValue:1, image:angularImg},
    ],
    user: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      postalCode: '',
      loggedIn: false,
    },
  });
  
  const handleCartChange = (e) => {
    const {value} = e.target;
    const objID = e.target.parentNode.parentNode.id;
    
    setAppData(prevState => {
      const newCartItems = prevState.cartItems.map(item => {
        if(item.id === parseInt(objID)) {
          return {...item,  total: item.price * parseInt(value), selectValue: parseInt(value)}
        }
        return item;
      });
  
      return {...prevState, cartItems: newCartItems};
    })
  }
  const handleRemoveItem = (e) => {
    const objID = e.target.parentNode.parentNode.id;
  
    setAppData(prevState => {
      const newCartItems = prevState.cartItems.filter(item => item.id !== parseInt(objID));
  
      return {...prevState, cartItems: newCartItems}
    });
  };


  return (
    <>
      <Signup />
      <Cart cartItems={appData.cartItems} handleChange={handleCartChange} handleRemove={handleRemoveItem}/>
     </>
  )
}

export default App
