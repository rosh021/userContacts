import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../redux/reduxAction";
import { setClick } from "../../redux/reduxSlice";
import { Layout } from "../layout/Layout";
import { Searchbar } from "../search/Searchbar";
import { UserInfo } from "../userInfo/UserInfo";
import "./ContactsList.css";

export const ContactsList = () => {
  const dispatch = useDispatch();
  const [displayData, setDisplayDate] = useState([]);
  const { allUsers, click } = useSelector((state) => state.users);

  useEffect(() => {
    !allUsers.length && dispatch(fetchUsersAction());
    setDisplayDate(allUsers);
  }, [dispatch, allUsers]);

  const [clickUser, setClickUser] = useState("");
  const startsWithC = displayData.filter(
    (name) => name.name.indexOf("C") === 0
  );
  const startsWithE = displayData.filter(
    (name) => name.name.indexOf("E") === 0
  );
  const startsWithG = displayData.filter(
    (name) => name.name.indexOf("G") === 0
  );
  const startsWithK = displayData.filter(
    (name) => name.name.indexOf("K") === 0
  );
  const startsWithL = displayData.filter(
    (name) => name.name.indexOf("L") === 0
  );
  const startsWithM = displayData.filter(
    (name) => name.name.indexOf("M") === 0
  );
  const startsWithN = displayData.filter(
    (name) => name.name.indexOf("N") === 0
  );
  const startsWithP = displayData.filter(
    (name) => name.name.indexOf("P") === 0
  );

  const handelOnClick = (e) => {
    const filterContact = displayData.filter((item, i) => e === item.name);
    dispatch(setClick(filterContact));
    setClickUser(filterContact);
  };

  const handleOnSearch = (str) => {
    console.log(str);
    const searchedList = allUsers.filter((item) =>
      item.name.toLowerCase().includes(str.toLowerCase())
    );

    setDisplayDate(searchedList);
  };

  return (
    <Layout>
      <div>
        <Searchbar handleOnSearch={handleOnSearch} />
        <hr />
        <h4>{displayData?.length} Contacts Found</h4>
        <div>
          {startsWithC.length > 0 && (
            <>
              <h4 className="alphabet">C</h4>
              <hr />
              {startsWithC.map((item, i) => {
                return (
                  <div
                    className="name"
                    onClick={() => handelOnClick(item.name)}
                  >
                    {item.name}

                    <br />
                    <hr />
                  </div>
                );
              })}
            </>
          )}

          {startsWithE.length > 0 && (
            <>
              <h4 className="alphabet">E</h4>
              <hr />
              {startsWithE.map((item, i) => (
                <div className="name" onClick={() => handelOnClick(item.name)}>
                  {item.name}
                  {item.username}
                </div>
              ))}
            </>
          )}

          {startsWithG.length > 0 && (
            <>
              <h4 className="alphabet">G</h4>
              <hr />
              {startsWithG.map((item, i) => (
                <div className="name" onClick={() => handelOnClick(item.name)}>
                  {item.name}
                </div>
              ))}
            </>
          )}

          {startsWithK.length > 0 && (
            <>
              <h4 className="alphabet">K</h4>
              <hr />
              {startsWithK.map((item, i) => (
                <div className="name" onClick={() => handelOnClick(item.name)}>
                  {item.name}
                </div>
              ))}
            </>
          )}
          {startsWithL.length > 0 && (
            <>
              <h4 className="alphabet">L</h4>
              <hr />
              {startsWithL.map((item, i) => (
                <div className="name" onClick={() => handelOnClick(item.name)}>
                  {item.name}
                </div>
              ))}
            </>
          )}
          {startsWithM.length > 0 && (
            <>
              <h4 className="alphabet">M</h4>
              <hr />
              {startsWithM.map((item, i) => (
                <div className="name" onClick={() => handelOnClick(item.name)}>
                  {item.name}
                </div>
              ))}
            </>
          )}
          {startsWithN.length > 0 && (
            <>
              <h4 className="alphabet">N</h4>
              <hr />
              {startsWithN.map((item, i) => (
                <div className="name" onClick={() => handelOnClick(item.name)}>
                  {item.name}
                </div>
              ))}
            </>
          )}
          {startsWithP.length > 0 && (
            <>
              <h4 className="alphabet">P</h4>
              <hr />
              {startsWithP.map((item, i) => (
                <div className="name" onClick={() => handelOnClick(item.name)}>
                  {item.name}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};
