import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import { useParams } from "react-router-dom";
import { getUser } from "../../Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../Actions/productAction";
import { getEvent } from "../../Actions/eventAction";
import { getNewss } from "../../Actions/newsAction";

const Single = ({ type }) => {
  let idParams = useParams();

  const user = useSelector((state) => state.userReducer.user);
  const product = useSelector((state) => state.productReducer.product);
  const event = useSelector((state) => state.eventReducer.event);
  const newss = useSelector((state) => state.newsReducer.newss);
  console.log(newss);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(idParams.userId));
  }, []);
  useEffect(() => {
    dispatch(getProduct(idParams.productId));
  }, []);
  useEffect(() => {
    dispatch(getEvent(idParams.eventId));
  }, []);
  useEffect(() => {
    dispatch(getNewss(idParams.newsId));
  }, []);

  let content;
  let singleItem;

  switch (type) {
    case "users":
      content = [
        "fullName",
        "email",
        "birthDay",
        "gender",
        "phoneNumber",
        "adress",
        "country",
        "city",
      ];
      singleItem = user;
      break;
    
    case "products":
      content = ["productName", "price", "stock", "createdAt", "updatedAt"];
      singleItem = product;
 
      break;
    case "events":
      content = [
        "name",
        "description",
        "startDate",
        "endDate",
        "author",
        "location",
        "createdAt",
      ];
      singleItem = event;
  
      break;
    case "news":
      content = ["name", "description", "author", "createdAt"];
      singleItem = newss;

      break;
    default:
      break;
  }
 let  title =content[0]
console.log(title)
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">edit</div>
            <h1 className="title"> information</h1>
            <div className="item">
              <img src={singleItem?.imgUrl} alt="" className="itemImg" />

              <div className="details">
                <h1 className="itemTitle">{singleItem?.[title]}</h1>
                {content.map((el) => (
                  <div className="detailItem">
                    <span className="itemKey">{el}:</span>

                    <span className="itemValue">{singleItem?.[el]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="right">chart</div>
        </div>
        <div className="bottom">
          <h1 className="title"> Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
