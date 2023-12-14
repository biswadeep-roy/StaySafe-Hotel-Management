import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading" style={loaderContainerStyle}>
      <HashLoader color="#000" loading={loading} css={loaderStyle} size={80} />
    </div>
  );
}

const loaderContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const loaderStyle = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default Loader;
