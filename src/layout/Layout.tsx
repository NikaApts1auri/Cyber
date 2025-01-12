import { Outlet } from "react-router-dom";
import Header from "../pages/header/header";
import Footer from "../pages/footer/footer";



export default function Layout() {
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </div>
  )
}
