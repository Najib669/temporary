import "./datatable.scss";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../Actions/userAction";
import { getProducts, deleteProduct } from "../../Actions/productAction";
import { getEvents, deleteEvent } from "../../Actions/eventAction";
import { getNews, deleteNews } from "../../Actions/newsAction";
import {getMails, deleteMail} from "../../Actions/mailAction"
import {getDonations} from "../../Actions/donationAction"
import {
  userColumns,
  productColumns,
  eventColumns,
  newsColumns,
  mailColumns,
  donationColumns
} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
const Datatable = ({ type }) => {
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);
  const events = useSelector((state) => state.eventReducer.events);
  const news = useSelector((state) => state.newsReducer.news);
  const mails = useSelector((state) => state.mailReducer.mails);
  const donations = useSelector((state) => state.donationReducer.donations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  useEffect(() => {
    dispatch(getNews());
  }, []);
  useEffect(() => {
    dispatch(getMails());
  }, []);
  useEffect(() => {
    dispatch(getDonations());
  }, []);
  // const handleDeleteUser = (id) => {
  //   dispatch(deleteUser(id));
  // };
  const handleDelete= (id) => {
    switch (type) {
      case "users":
        dispatch(deleteUser(id));
        break;
      case "products":
          dispatch(deleteProduct(id));
          break;
      case "events":
            dispatch(deleteEvent(id));
            break;
      case "news":
              dispatch(deleteNews(id));
              break;
      case "mails":
                dispatch(deleteMail (id));
                break;
      default:
      break;
  };
}


  let data;
  let btn;
  let navig;
 // let remove;
  //temporary

  switch (type) {
    case "users":
      data = {
        col: userColumns,
        ro: users.map((user) => ({
          id: user._id,
          userName: user.fullName,
          email: user.email,
          img: user.imgUrl,
        })),
      };
      btn = "/users/new";
      navig = "/users/";
      //remove=handleDeleteUser 
      break;
    case "products":
      data = {
        col: productColumns,
        ro: products.map((product) => ({
          id: product._id,
          productName: product.productName,
          price: product.product,
          img: product.imgUrl,
        })),
      };
      btn = "/products/new";
      navig = "/products/";
      //remove=handleDeleteProduct 
      break;
    case "events":
      data = {
        col: eventColumns,
        ro: events.map((event) => ({
          id: event._id,
          eventName: event.productName,
          startDate: event.startDate,
          endDate: event.endDate,
          location: event.location,
          img: event.imgUrl,
        })),
      };
      btn = "/events/new";
      navig = "/events/";
      break;
    case "news":
      data = {
        col: newsColumns,
        ro: news.map((news) => ({
          id: news._id,
          newsName: news.productName,
          date: news.product,
          author: news.author,
          img: news.img,
        })),
      };
      btn = "/news/new";
      navig = "/news/";
      break;
      case "mails":
        data = {
          col: mailColumns,
          ro: mails.map((mail) => ({
            id: mail._id,
            name: mail.name,
            email: mail.email,
            subject: mail.subject,
            message: mail.message,
           
          })),
        };
        btn = "/mails/new";
        navig = "/mails/";
        break;
        case "donations":
          data = {
            col: donationColumns,
            ro: donations.map((donation) => ({
              id: donation._id,
              donor: donation.donorName,
              email: donation.email,
              amount: donation.amount + donation.currency ,
             
            })),
          };
          btn = "/mails/new";
          navig = "/mails/";
          break;

    default:
      break;
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={navig + params.row.id}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
    
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to={btn} style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data.ro}
        columns={data.col.concat(actionColumn)}
        //rows= {users.map((user)=>({id: user._id, userName: user.fullName, email: user.email, img: user.imgUrl}))}
        //columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
