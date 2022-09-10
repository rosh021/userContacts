import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClick } from "../../redux/reduxSlice";
import { Searchbar } from "../search/Searchbar";
import { UserInfo } from "../userInfo/UserInfo";
import "./ContactsList.css";

export const ContactsList = () => {
  const dispatch = useDispatch();
  const { allUsers, click } = useSelector((state) => state.users);
  const [clickUser, setClickUser] = useState("");
  const startsWithC = allUsers.filter((name) => name.name.indexOf("C") === 0);
  const startsWithE = allUsers.filter((name) => name.name.indexOf("E") === 0);
  const startsWithG = allUsers.filter((name) => name.name.indexOf("G") === 0);
  const startsWithK = allUsers.filter((name) => name.name.indexOf("K") === 0);
  const startsWithL = allUsers.filter((name) => name.name.indexOf("L") === 0);
  const startsWithM = allUsers.filter((name) => name.name.indexOf("M") === 0);
  const startsWithN = allUsers.filter((name) => name.name.indexOf("N") === 0);
  const startsWithP = allUsers.filter((name) => name.name.indexOf("P") === 0);

  const handelOnClick = (e) => {
    const filterContact = allUsers.filter((item, i) => e === item.name);
    dispatch(setClick(filterContact));
    setClickUser(filterContact);
  };

  console.log(clickUser);
  return (
    <div>
      {clickUser ? (
        <UserInfo clickUser={clickUser} />
      ) : (
        <div>
          <div>
            <Searchbar />
          </div>
          <h4>{allUsers?.length} Contacts Found</h4>
          <div>
            <h4 className="alphabet">C</h4>
            <hr />
            {startsWithC.map((item, i) => {
              return (
                <div className="name" onClick={() => handelOnClick(item.name)}>
                  {item.name}

                  <br />
                  <hr />
                </div>
              );
            })}

            <h4 className="alphabet">E</h4>
            <hr />
            {startsWithE.map((item, i) => (
              <div className="name" onClick={() => handelOnClick(item.name)}>
                {item.name}
                {item.username}
              </div>
            ))}
            <h4 className="alphabet">G</h4>
            <hr />
            {startsWithG.map((item, i) => (
              <div className="name" onClick={() => handelOnClick(item.name)}>
                {item.name}
              </div>
            ))}
            <h4 className="alphabet">K</h4>
            <hr />
            {startsWithK.map((item, i) => (
              <div className="name" onClick={() => handelOnClick(item.name)}>
                {item.name}
              </div>
            ))}
            <h4 className="alphabet">L</h4>
            <hr />
            {startsWithL.map((item, i) => (
              <div className="name" onClick={() => handelOnClick(item.name)}>
                {item.name}
              </div>
            ))}
            <h4 className="alphabet">M</h4>
            <hr />
            {startsWithM.map((item, i) => (
              <div className="name" onClick={() => handelOnClick(item.name)}>
                {item.name}
              </div>
            ))}
            <h4 className="alphabet">N</h4>
            <hr />
            {startsWithN.map((item, i) => (
              <div className="name" onClick={() => handelOnClick(item.name)}>
                {item.name}
              </div>
            ))}
            <h4 className="alphabet">P</h4>
            <hr />
            {startsWithP.map((item, i) => (
              <div className="name" onClick={() => handelOnClick(item.name)}>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
