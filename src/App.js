import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Create from './component/Create';
import Hestroy from './component/Hestroy';
import Edite from './component/Edite';




export default function App() {
  return (
    <div>
   <Routes>

<Route path='/' element={<Create/>}></Route>
<Route path='/Hestory' element={<Hestroy/>}></Route>
<Route path='/Edite' element={<Edite/>} > </Route>


   </Routes>
 
    </div>
  );
}
