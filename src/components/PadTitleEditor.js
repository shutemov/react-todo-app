import React from "react";
class PadTitleEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: undefined,
    };

    this.putNewTitleToState = this.putNewTitleToState.bind(this);
  }

  putNewTitleToState(event) {
    const title = event.target.value;
    this.setState({ title });
  }

  render() {
    const { editTitle } = this.props;

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
          onClick={() => {
            editTitle(this.state.title);
          }}
        >
          ✔️
        </button>
      </div>
    );
  }
}

export default PadTitleEditor;
