import React from "react";


class AddContact extends React.Component {
   state = {
       name: "",
      contact_no: "",
       };

add = (event) => {
  event.preventDefault();
   if(this.state.name ==='' || this.state.contact_no ===''){
       alert("All the fields are mandatory");
       return;
   }
  
   this.props.addContactHandler(this.state);
   this.setState({name:"", contact_no:""});
};


render(){
  return(
      <div className="main tc">
          <div className="f3 fw6 mt3 "> Add Contact</div>
          <form className="pa3" onSubmit={this.add}>
            <div className="field button-reset">
              <label className="db fw6 lh-copy f4">Name</label>
              <input className="shadow-1-l" type="text" placeholder="Name"
              value = {this.state.name}
              onChange={(event) => this.setState({ name: event.target.value})}
              />   
            </div>
            <div className="field">
              <label className="db fw6 lh-copy f4">Contact no.</label>
              <input className="shadow-1-l" type="number" placeholder="Contact" 
              value ={this.state.contact_no}
              onChange={ (event) => this.setState({ contact_no:event.target.value})}
              />   
            </div>
            <button type="submit" className=" mt3 white b pv2 ph3 bg-gray hover-bg-mid-gray bn br2 hover-shadow-inner"> Add </button>
          </form>
      </div>
  );
}
}
export default AddContact;
