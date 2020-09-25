// You have learned to use 'import' to bring in components from libraries in your React project. Using const is another way to do it that works better in Codepen. Do not be concerned about the difference at this time.
const { Modal, ModalBody, Button } = Reactstrap;

// The code you should pay attention to begins after this comment.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.toggleModal}>Click Me</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalBody>I'm a damn modal!!</ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
