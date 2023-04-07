import React from "react";

function Message({ msg }) {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      {msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Message;
