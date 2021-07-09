import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 200px;
  padding: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;

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
      <InputContainer>
        <Input
          type="text"
          placeholder="Enter new pad title here"
          onChange={this.putNewTitleToState}
        />
        <Button
          type="submit"
          onClick={() => {
            editTitle(this.state.title);
          }}
        >
          ✔️
        </Button>
      </InputContainer>
    );
  }
}

export default PadTitleEditor;
