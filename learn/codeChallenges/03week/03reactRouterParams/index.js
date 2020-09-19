const { HashRouter, Switch, Route, Link } = ReactRouterDOM;

const ALBUMSDATA = [
  {
    id: 2,
    title: "Mezzanine",
    artist: "Massive Attack",
    year: 1998,
  },
  {
    id: 3,
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

function Years(props) {
  return (
    <div>
      <h1>Years</h1>
      {props.albumsData.map((album) => (
        <li key={album.id}>
          <Link to={`/years/${album.year}`}>{album.year}</Link>
        </li>
      ))}
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
      <li>
        <Link to="/years">Years</Link>
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
    const AlbumInfo = (props) => {
      console.log(props);
      const album = this.state.albumsData.filter(
        (album) => album.id === +props.match.params.albumId
      )[0];
      return (
        <div>
          {album.title} - {album.artist} - {album.year}
        </div>
      );
    };

    const YearInfo = (props) => {
      console.log(props);
      const albums = this.state.albumsData.filter(
        (album) => album.year === +props.match.params.year
      );
      console.log(albums);
      return (
        <div>
          {albums.map((album) => {
            return (
              <li>
                {album.title} - {album.artist}
              </li>
            );
          })}
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
        <Route
          exact
          path="/years"
          render={() => <Years albumsData={this.state.albumsData} />}
        />
        <Route path="/years/:year" component={YearInfo} />
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
