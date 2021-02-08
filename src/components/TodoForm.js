import React from "react";

class ToDoForm extends React.Component {
    constructor() {
        super()
        this.state({
            newTask: ""
        })
    }

    handleChanges = e => {
        this.setState({
            newTask: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.addTask()
    }
render(){
  return (
    <form>
      <label>
        <input name="name" 
        type="text" 
        value={this.state.task} 
        onChange={this.handleChanges} />
      </label>
      <button>Submit</button>
    </form>
  );
}
};

export default ToDoForm;
