import React from "react";
import styled from "styled-components";

const StyledPadAdder = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #a0a8b4;
`;

const ButtonContainer = styled.div`
  width: 150px;
  height: 150px;
`;

const PlusButton = styled.div`
  background: #c4c4c4;
  height: 150px;
  width: 30px;
  position: relative;
  left: 60px;

  &:after {
    content: "";
    height: 30px;
    width: 150px;
    background: #c4c4c4;
    position: absolute;
    left: -60px;
    top: 60px;
  }
`;

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

class PadAdder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreating: false,
    };

    this.switchCreatingMode = this.switchCreatingMode.bind(this);
    this.createPadProxy = this.createPadProxy.bind(this);
  }

  switchCreatingMode() {
    this.setState({ isCreating: !this.state.isCreating });
  }

  _getCreatePadButtonContainer() {
    return (
      <ButtonContainer onClick={this.switchCreatingMode}>
        <PlusButton />
      </ButtonContainer>
    );
  }

  _getCreatePadInputContainer() {
    return (
      <InputContainer>
        <Input type="text" placeholder="Enter pad title here" />
        <Button
          type="submit"
          placeholder="Enter pad title here"
          value="+"
          onClick={this.createPadProxy}
        >
          +
        </Button>
      </InputContainer>
    );
  }

  createPadProxy() {
    this.props.padCreate();
    this.switchCreatingMode();
  }

  render() {
    const { isCreating } = this.state;

    return (
      <StyledPadAdder>
        {isCreating
          ? this._getCreatePadInputContainer()
          : this._getCreatePadButtonContainer()}
      </StyledPadAdder>
    );
  }
}

export default PadAdder;
