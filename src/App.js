import { userInputs } from "./formSource";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import  { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element ={<Home/>} />
          <Route path ="login"  element ={<Login/>} />
          <Route path ="users">
            <Route index element={<List/>} />
            <Route path =":userId"  element ={<Single/>} />
            <Route path ="new"  element ={<New inputs ={userInputs} title="Add New user"/>} />
          </Route>
          <Route path ="products">
            <Route index element={<List/>} />
            <Route path =":productId"  element ={<Single/>} />
            <Route path ="new"  element ={<New inputs={userInputs} title="Add New Products"/>} />
          </Route>
        </Route>
      </Routes>
     </BrowserRouter>
      {/* <Home />
      <List />
      <Login />
      <New />
      <Single /> */}
    </div>
  );
}

export default App;
