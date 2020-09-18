const { HashRouter, Switch, Route, Link } = ReactRouterDOM;

const ALBUMSDATA = [
  {
    id: 1,
    title: "Mezzanine",
    artist: "Massive Attack",
    year: 1998,
  },
  {
    id: 2,
    title: "The Ruminant Band",
    artist: "Fruit Bats",
    year: 2009,
  },
];

function Home() {
  return <h1>Home</h1>;
}

function Albums(props) {
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {props.albumsData.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>Album {album.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MyNav() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/albums">Albums</Link>
      </li>
    </ul>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsData: ALBUMSDATA,
    };
  }

  render() {
    const AlbumInfo = ({ match }) => {
      const album = this.state.albumsData.filter(
        (album) => album.id === +match.params.albumId
      )[0];
      return (
        <div>
          {album.title} - {album.artist} - {album.year}
        </div>
      );
    };

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/albums/:albumId" component={AlbumInfo} />
        <Route
          exact
          path="/albums"
          render={() => <Albums albumsData={this.state.albumsData} />}
        />
      </Switch>
    );
  }
}

function App() {
  return (
    <div>
      <MyNav />
      <br />
      <Main />
    </div>
  );
}

// Stop paying attention here. Below code is just to make React Router work with Codepen.
// We are using HashRouter here, but outside of here you would use BrowserRouter for a web app.
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
