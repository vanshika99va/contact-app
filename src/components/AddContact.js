import React from "react";
import { useNavigate } from "react-router-dom";


class AddContact extends React.Component {
    state ={
        name:"",
        email:"",
    }

    add = (e) => {
        e.preventDefault(); //
        if(this.state.name === "" || this.state.email === ""){ 
            alert("All the fields are mandatory!!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""}); 
        // console.log("--------",this.props); <-----
        //this.props.history.push("/")
    }

    


    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>

                <form className="ui form" onSubmit={this.add}> 
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name"
                        placeholder="name" 
                        onChange={(e)=>this.setState({name:e.target.value})}
                        value={this.state.name}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="email"
                        onChange={(e) => this.setState({email:e.target.value})} 
                        value={this.state.email}
                        />
                    </div>
                    <button className="ui button blue" on='true' >Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;