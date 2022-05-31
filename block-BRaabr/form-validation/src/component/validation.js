import React from "react";

class Validation extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            cnfpassword: "",
            errors: {
                username: "",
                email: "",
                password: "",
                cnfpassword: "",
            }
        }
    }

    handleInput = ({ target }) => {

        let { name, value } = target

        let elements = this.state[name]
        let errors = this.state.errors

        switch (name) {
            case "username":
                errors.username = value.length > 3 ?"" :"Username must be at least 3 Characters" 
                break;
            case "email":
                errors.email = value.includes('@') ?   "" :"Email is not valid"
                break;
            case "password":
                errors.password = value.length > 6 ? "":"Password must be at least 6 characters" 
                break;
            case "cnfpassword":
                errors.cnfpassword = value ? "" : "Password2 is required"
               // errors.cnfpassword = this.state.password === this.state.cnfpassword ?  "" : "Password2 is required"
                break;

            default:
                break;
        }



        this.setState({ errors, [name]: value })
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="username">Username</label><br />
                    <input onChange={this.handleInput} value={this.username} type="text" name="username" id="username" /><br />
                    <p>{this.state.errors.username}</p>
                    <label htmlFor="email">Email</label><br />
                    <input onChange={this.handleInput} value={this.email} type="text" name="email" id="email" /><br />
                    <p>{this.state.errors.email}</p>
                    <label htmlFor="password">Password</label><br />
                    <input onChange={this.handleInput} value={this.password} type="password" name="password" id="password" /><br />
                    <p>{this.state.errors.password}</p>
                    <label htmlFor="cnfpassword">Confirm Password</label><br />
                    <input onChange={this.handleInput} value={this.cnfpassword} type="password" name="cnfpassword" id="cnfpassword" /><br />
                    <p>{this.state.errors.cnfpassword}</p>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default Validation