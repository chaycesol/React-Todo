import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor(props) {
    super(props);
    this.state = {
      itemText: "",

    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      itemText: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    const { addItem } = this.props;
    e.preventDefault();
    // call addItem prop
    addItem(this.state.itemText);
    this.setState({
      itemText: ""
    });
  };

  render() {
    // destructure props or state here
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="itemText"
          value={this.state.itemText}
          onChange={this.handleChanges}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
