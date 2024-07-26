import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ScrollUp from "../ScrollUp/ScrollUp";

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header/>
            <Main/>
            <Footer/>
            <ScrollUp/>
          </>
        }
      >
      </Route>
    </Routes>
  )
}
