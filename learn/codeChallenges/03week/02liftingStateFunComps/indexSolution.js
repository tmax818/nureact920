class App extends React.Component {
  state = {
    bootcampName: "Nucamp",
  };

  render() {
    return <Welcome name={this.state.bootcampName} />;
  }
}

const Welcome = ({ name }) => {
  // console.log(props.name);
  return <h1>Welcome to {name}!</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
