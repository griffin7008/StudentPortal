import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {

    state = {
        firstName:'',
        lastName:'',
        telephone:'',
        email:'',
        age:'',
        password:''

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
    signUpSubmitHandler = (event) =>{
        event.preventDefault();
        const student ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age:this.state.age,
            password:this.state.password,
            telephone:this.state.telephone,
            email:this.state.email,
        } 
        
        axios.post('http://localhost:8080/submitStudentDetails', student).then(
            (response) => {
                this.props.history.push('/thank-you');
            }

        )
    }
        
    
    render() {
        return (
            <div>                
                <form className="container" onSubmit={this.signUpSubmitHandler}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" value={this.state.firstName} onChange={this.signInChangeHandler} name="firstName" className="form-control" id="firstName" placeholder="First Name"/>
                        </div>
                    
                        <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" value={this.state.lastName} onChange={this.signInChangeHandler} onChange={this.signInChangeHandler} name="lastName" className="form-control" id="lastName" placeholder="Last Name"/>
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="telephone">Telephone</label>
                        <input type="text" value={this.state.telephone} onChange={this.signInChangeHandler} name="telephone" className="form-control" id="telephone" placeholder="Phone Number"/>
                        </div>

                        
                        <div className="form-group col-md-6">
                        <label htmlFor="age">Age</label>
                        <input type="text" value={this.state.age} onChange={this.signInChangeHandler} name="age" className="form-control" id="age" placeholder="Age"/>
                        </div>
                        
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" value={this.state.email} onChange={this.signInChangeHandler} name="email" className="form-control" id="email" placeholder="Email Address"/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={this.state.password} onChange={this.signInChangeHandler} name="password" className="form-control" id="password" placeholder="Password"/>
                        </div>
                    </div>   
                    
                    <button type="submit" className="btn btn-primary">Sign Up</button>
           
            </form>
            </div>
                
        );
    }
}



export default Signup;