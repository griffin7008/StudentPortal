import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {

        state = {
            password:'',          
            email:''          
        }

        submit = (event) => {
            event.preventDefault ();
            this.props.submit(this.state.email, this.state.password);
        }


        signInChangeHandler = (event) =>{
            const name = event.target.name;
            const value = event.target.value;

            this.setState(
                {
                    [name]:value
                }
            );
        }
    render(){
        let links = null;
        let inputFields = <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> 
        let signInSignOut = <a onClick={this.props.signOut}  className="nav-link" href="#">Sign Out</a>


        if (!this.props.loggedInUser){
            links=(
            <React.Fragment>
                <Link to="/sign-up">Sign Up</Link>
            </React.Fragment> 
            )
            inputFields=(
                <React.Fragment>
                    <div>
                        <input name="email" value={this.state.email} onChange={this.signInChangeHandler} className="margin-5px-right" placeholder="Email" />
                        <input name="password" value={this.state.password} onChange={this.signInChangeHandler} placeholder="Password" />
                    </div>
                </React.Fragment>
            )
            signInSignOut = <a onClick={this.submit} className="nav-link" href="#">Sign In</a>
        }
        return (
            <div>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Student Portal</a>
                    {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
                    {inputFields}
                    <Link to="/about-us">About Us</Link>
                        {links}

                    
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                        {signInSignOut}
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;