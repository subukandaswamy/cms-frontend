import React from "react";

function Message({ msg, setMsg }) {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      {msg}
      <button
        type="button"
        className="btn-close"
        //data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => setMsg("")}
      ></button>
    </div>
  );
}

export default Message;
