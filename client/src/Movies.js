class Movie {
  constructor(title) {
    this.title = title;
    this.default = true;
    this.watched = true;
    this.info = {
      Year: '1995',
      Runtime: '107 min',
      Metascore: '46',
      imdbRating: '6.2'
    }
  }
}

let movielist = [
  {
    title: 'Mean Girls',
    default: true,
    watched: true,
    info: {
      year: '1995',
      runtime: '107 min',
      metascore: '46',
      imdbRating: '62'
    }
  }, {
    title: 'Hackers',
    default: true,
    watched: true,
    info: {
      year: '1995',
      runtime: '107 min',
      metascore: '46',
      imdbRating: '62'
    }
  }, {
    title: 'The Grey',
    default: true,
    watched: true,
    info: {
      year: '1995',
      runtime: '107 min',
      metascore: '46',
      imdbRating: '62'
    }
  },
  {
    title: 'Sunshine',
    default: true,
    watched: true,
    info: {
      year: '1995',
      runtime: '107 min',
      metascore: '46',
      imdbRating: '62'
    }
  }, {
    title: 'Ex Machina',
    default: true,
    watched: true,
    info: {
      year: '1995',
      runtime: '107 min',
      metascore: '46',
      imdbRating: '62'
    }
  }
];

export default movielist;