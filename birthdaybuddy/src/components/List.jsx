import React from "react";

const List = (props) => {
  return (
    <>
      {props.val.map((val) => {
        return (
          <>
          <div className="person">
            <img className="img" src={val.image} alt="image" />
            <div>
            <h4>{val.name}</h4>
            <p>{val.age} years</p>
            </div>
         </div>
          </>
        );
      })}
      </>
  
  );
};

export default List;
