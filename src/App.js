// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import Product from './components/Product';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Routes path="/" element={RootLayout}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
