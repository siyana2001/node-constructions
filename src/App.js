
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Get } from './Component/Getall/Get';
import Customer from './Component/Customer/Customer';
import { Getone } from './Component/Getall/Getone';
import { Insert } from './Component/Insert/Insert';
import { Update } from './Component/Update/Update';
import { Getimg } from './Component/Getall/getimg';





function App() {
  return (
    <>
          
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/view' element={<Get/>}/>
      <Route path='/cust' element={<Customer/>}/>
      <Route path="/getone/:id" element={<Getone/>}/>
      <Route path='/insert' element={<Insert/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/3d' element={<Getimg/>}/>

      </Routes>
    
     </BrowserRouter>
     
     
    </>
  );
}

export default App;
