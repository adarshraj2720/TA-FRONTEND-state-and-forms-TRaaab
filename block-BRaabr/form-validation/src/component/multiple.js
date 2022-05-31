import React from "react";

class Multiple extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username:"",
            dateinput:"",
            fileinput:"",
            readonly:"",
            textinput:""
        }
    }

    handleInput =({target})=>{
        let {name,value} = target

        this.setState({[name]:value})
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="username">Text Input</label><br />
                    <input onChange={this.handleInput} value={this.state.username} type="text" name="username" id="username" /><br />
                    <label htmlFor="dateinput">Date Input</label><br />
                    <input onChange={this.handleInput} value={this.state.dateinput} type="date" name="dateinput" id="dateinput" /><br />
                    <label htmlFor="fileinput">File Input</label><br />
                    <input onChange={this.handleInput} value={this.state.fileinput} type="file" name="fileinput" id="fileinput" /><br />
                    <label htmlFor="readonly">Read-Only Input</label><br />
                    <input onChange={this.handleInput} value={this.state.readonly} type="text" name="readonly" id="readonly" /><br />
                    <label htmlFor="disableinput">Disabled Input</label><br />
                    <input onChange={this.handleInput}  type="text" name="disableinput" id="disableinput" disabled /><br />
                    <label htmlFor="textinput">Textarea</label><br />
                    <textarea onChange={this.handleInput} value={this.state.textinput} type="text" name="textinput" id="textinput" /><br />
                    <label htmlFor="disabletextinput">Textarea</label><br />
                    <textarea onChange={this.handleInput}  type="text" name="disabletextinput" id="disabletextinput" disabled />
                </form>
            </>
        )
    }
}

export default Multiple