import React from "react";
import { Link } from "react-router-dom";
import user from '../images/user.jpeg';

const ContactDetails = (props) =>{
    // const {name,email} = props.location.state.contact;
    return(
       <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt='user'/>
                </div>
                <div className="content">
                    <div className="header">
                        Vanshika
                    </div>
                    <div className="description">
                        vans@gmail.com
                    </div>
                </div>
                <div className="center-div">
                <Link to='/'>
                    <button className="ui button blue center">
                        Back
                    </button>
                    </Link>
                </div>
            </div>
       </div>
    )
}

export default ContactDetails;