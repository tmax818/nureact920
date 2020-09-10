class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partyType: "birthday",
      entertainment: "clowns",
      venue: {
        name: "Polly's Party Palace",
        capacity: 120,
      },
    };
  }

  render() {
    return (
      <div>
        <Party
          partyType={this.state.partyType}
          venue={this.state.venue}
          entertainment={this.state.entertainment}
        />
      </div>
    );
  }
}

class Party extends React.Component {
  render() {
    return (
      <div>
        <h3>Party Time!</h3>
        <p>
          This {this.props.partyType} party will be held at{" "}
          {this.props.venue.name} with a maximum capacity of{" "}
          {this.props.venue.capacity}.
        </p>
        <p>Featured entertainment: {this.props.entertainment}!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
