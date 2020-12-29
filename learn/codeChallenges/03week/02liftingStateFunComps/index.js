class Welcome extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      bootcampName: "Nucamp"
    };
  }
  
  render() {
    return (
      <h1>Welcome to {this.state.bootcampName}!</h1>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));