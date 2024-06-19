import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protect = (props) => {
  let { ComponentName } = props;
  let navigate = useNavigate();
  useEffect(() => {
    let id = localStorage.getItem("_id");
    if (!id) {
      navigate("/Login");
    }
  });
  return (
    <div>
      <ComponentName />
    </div>
  );
};

export default Protect;
