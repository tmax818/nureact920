class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bootcamp: "Nucamp",
    };
  }

  render() {
    const course = "React";
    return <div></div>;
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
