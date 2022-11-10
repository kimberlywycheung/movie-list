class Movie {
  constructor(title) {
    this.title = title;
    this.default = true;
    this.category = 'Watched';
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
    category: 'Watched',
    info: {
      year: '1995',
      runtime: '107 min',
      metascore: '46',
      imdbRating: '62'
    }
  }, {
    title: 'Hackers',
    default: true,
    category: 'Watched',
    info: {
      year: '1995',
      runtime: '107 min',
      metascore: '46',
      imdbRating: '62'
    }
  }, {
    title: 'The Grey',
    default: true,
    category: 'Watched',
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
    category: 'Watched',
    info: {
      year: '1995',
      runtime: '107 min',
      metascore: '46',
      imdbRating: '62'
    }
  }, {
    title: 'Ex Machina',
    default: true,
    category: 'Watched',
    info: {
      year: '1995',
      runtime: '107 min',
      metascore: '46',
      imdbRating: '62'
    }
  }
];

export default movielist;