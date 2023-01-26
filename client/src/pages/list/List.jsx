import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"
import { Link } from "react-router-dom"

const List = ({type}) => {
  return (
    <div className="list">
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>    
            <Datatable type={type}/>
            
        </div>
    </div>
  )
}

export default List 