
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Login from './views/Login/login';
import Layout from './views/Layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            {/* <Route path='/layout' element={<Login/>}></Route> */}
            <Route path='/' element={<Layout/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
