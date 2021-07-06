import React from "react";
class PadTitleEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: undefined,
    };

    this.putNewTitleToState = this.putNewTitleToState.bind(this);
    this.editTitle = this.editTitle.bind(this);
  }

  putNewTitleToState(event) {
    const title = event.target.value;
    this.setState({ title });
  }

  editTitle() {
    this.props.editTitle(this.state.title);
  }

  render() {
    return (
      <div className="pad__input-container">
        <input
          className="pad__title-input"
          type="text"
          placeholder="Enter new pad title here"
          onChange={this.putNewTitleToState}
        />
        <button
          className="pad__input-edit-button"
          type="submit"
          onClick={this.editTitle}
        >
          ✔️
        </button>
      </div>
    );
  }
}

export default PadTitleEditor;
