function App() {
  return (
    <body id="home">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
        crossOrigin="anonymous"
      ></link>
      <header className="hero">
        <div id="navbar" className="navbar top">
          <h1 className="logo">
            <img
              src={process.env.PUBLIC_URL + "/images/pcbuildstrans.jpg"}
              alt="PcBuilds"
            ></img>
          </h1>
        </div>

        <div className="content">
          <h1>PC Builds</h1>
          <p>Susitiksime greitai!</p>
        </div>
      </header>

      <footer className="footer bg-dark">
        <div className="social">
          <a href="https://www.facebook.com/groups/1835508580061169">
            <i className="i fab fa-facebook fa-2x"></i>
          </a>
        </div>
        <p>Copyright &copy; 2022 - PC Builds Lietuva</p>
      </footer>
    </body>
  );
}

export default App;
