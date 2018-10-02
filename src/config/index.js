function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/config/
importAll(require.context("./", true, /\.js$/));
