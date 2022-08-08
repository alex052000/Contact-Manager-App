import React from "react";

const ContactCard = (props) => {
  const { id, name, contact_no } = props.contact;
  return (
    <div className="flex">
      <div className="mt3 ph3 pv1 ba hover-bg-mid-gray br2 hover-shadow-inner hover-white w-90 mr3">
        <div className="f4 b">
        {name}
        </div>
        <div>
        {contact_no}
        </div>
      </div>
      <button
        className="mt3 white b pv3 ph4 grow bg-gray hover-bg-mid-gray bn br2 hover-shadow-inner"
        onClick={() => props.clickHander(id)}
      > Delete</button>
    </div>
  );
};

export default ContactCard;