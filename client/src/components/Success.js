import React from "react";

function Success({message}) {
  return (
    <div>
      <div className="alert alert-warning" role="alert">
        {message}
      </div>
    </div>
  );
}

export default Success;
