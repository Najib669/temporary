import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {
  productInputs,
  userInputs,
  eventInputs,
  newsInputs,
} from "./formSource";
import { userColumns, productColumns } from "./datatablesource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Profil from "./pages/profil/profil";

import { objEvent, objNews, objProduct, objUser } from "./statesource";
import { addNews } from "./Actions/newsAction";
import { addProduct } from "./Actions/productAction";
import { addUser } from "./Actions/userAction";
import { addEvent } from "./Actions/eventAction";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app "}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="/users">
              <Route index element={<List type="users" />} />
              <Route path=":userId" element={<Single type="users" />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={userInputs}
                    title="Add New User"
                    obj={objUser}
                    add={addUser}
                  />
                }
              />
            </Route>
            <Route path="products">
              <Route index element={<List type="products" />} />
              <Route path=":productId" element={<Single type="products" />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={productInputs}
                    title="Add New Product"
                    obj={objProduct}
                    add={addProduct}
                  />
                }
              />
            </Route>
            <Route path="events">
              <Route index element={<List type="events" />} />
              <Route path=":eventId" element={<Single type="events" />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={eventInputs}
                    title="Add New Event"
                    obj={objEvent}
                    add={addEvent}
                  />
                }
              />
            </Route>
            <Route path="news">
              <Route index element={<List type="news" />} />
              <Route path=":newsId" element={<Single type="news" />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={newsInputs}
                    title="Add New News"
                    obj={objNews}
                    add={addNews}
                  />
                }
              />
            </Route>
          </Route>
          
          <Route path="mails">
              <Route index element={<List type="mails" />} />
              <Route path=":mailId" element={<Single type="mails" />} />
          </Route>

          <Route path="donations">
              <Route index element={<List type="donations" />} />
              <Route path=":donationId" element={<Single type="donations" />} />
          </Route>

          <Route path="/aboutus" element={<List></List>} />
          <Route path="profil" element={<Profil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
