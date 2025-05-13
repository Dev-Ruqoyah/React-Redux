import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toKenny } from "../state/name/nameSlice";

const Name = () => {
  const name = useSelector((state) => state.name.sname);
  const dispatch = useDispatch()

  return (
    <div>
      <p>{name}</p>
       <button onClick={()=> dispatch(toKenny())}>ChangeName</button>
    </div>
  );
};

export default Name;
