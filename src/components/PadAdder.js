import React from "react";
import styled from "styled-components";

const StyledPadAdder = styled.div`
  display: grid;
  width: 300px;
  height: 300px;
  align-items: center;
  justify-content: center;
  background-color: #a0a8b4;
`;

const ButtonContainer = styled.div`
  width: 150px;
  height: 150px;
`;

const PlusButton = styled.div`
  position: relative;
  left: 60px;
  width: 30px;
  height: 150px;
  background: #c4c4c4;

  &:after {
    position: absolute;
    left: -60px;
    top: 60px;
    width: 150px;
    height: 30px;
    content: "";
    background: #c4c4c4;
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
      title: undefined,
    };

    this.switchCreatingMode = this.switchCreatingMode.bind(this);
    this.createPadProxy = this.createPadProxy.bind(this);
    this._putNewTitleToState = this._putNewTitleToState.bind(this);
  }

  switchCreatingMode() {
    this.setState({ isCreating: !this.state.isCreating });
  }

  _putNewTitleToState(event) {
    const title = event.target.value;
    this.setState({ title });
  }

  _getCreatePadButtonFigure() {
    return (
      <ButtonContainer onClick={this.switchCreatingMode}>
        <PlusButton />
      </ButtonContainer>
    );
  }

  _getCreatePadInput() {
    return (
      <InputContainer>
        <Input
          type="text"
          placeholder="Enter pad title here"
          onChange={this._putNewTitleToState}
        />
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
    const title = this.state.title;
    this.props.padCreate(title);
    this.switchCreatingMode();
  }

  render() {
    const { isCreating } = this.state;

    return (
      <StyledPadAdder>
        {isCreating
          ? this._getCreatePadInput()
          : this._getCreatePadButtonFigure()}
      </StyledPadAdder>
    );
  }
}

export default PadAdder;
