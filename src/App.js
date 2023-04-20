import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCatsFetch } from './reducer/catReducer';

function App() {
  
  const myData = useSelector( state => state.cats.cats)
  const dispatch = useDispatch()


  useEffect(()=>{

      dispatch(getCatsFetch())

  },[dispatch])
  console.log(myData)

  return (
    <h1> Hello from App </h1> 
  );
}

export default App;
