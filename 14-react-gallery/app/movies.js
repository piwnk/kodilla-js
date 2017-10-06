const movies = [{
   title: 'Harry Potter',
   desc: 'Film o czarodzieju',
   img: 'harry-potter.jpg'
}, {
   title: 'Król Lew',
   desc: 'Film o królu sawanny',
   img: 'lion-king.jpg'
}, {
   title: 'Podziemny krąg',
   desc: 'Film o niczym',
   img: 'fight-club.jpg'
}];

movies.map((movie) => {
   movie.id = movies.indexOf(movie) + 1;
});


// const element = React.createElement('div', {},
//    React.createElement('h1', {}, 'Lista filmów'),
//    React.createElement('ul', {}, moviesElements));


const ListTitle = React.createClass({
   propTypes: {
      title: React.PropTypes.string.isRequired
   },
   render: function () {
      React.createElement('h1', {}, this.props.title)
   }
})

const MovieList = React.createClass({
   propTypes: {
      movies: React.PropTypes.array.isRequired
   },
   render: function () {
      return React.createElement('ul', {}, this.props.movies)
   }
})

const Movie = React.createClass({
   propTypes: {
      // movie_id: React.PropTypes.object.number,
      // movie_title: React.PropTypes.object.string,
      // movie_description: React.PropTypes.object.string,
      // movie_img_url: React.PropTypes.object.string
      movie: React.PropTypes.object.isRequired
   },
   render: function () {
      return React.createElement('li', {
         key: this.props.movie.id
      }, 
         React.createElement(MovieTitle, {
            title: this.props.movie.title
         }),
         React.createElement(MovieDescription, {
            description: this.props.movie.description
         }),
         React.createElement(MovieImage, {
            src: this.props.movie.img
         })
      )
   }
})

const MovieTitle = React.createClass({
   propTypes: {
      title: React.PropTypes.string.isRequired
   },
   render: function () {
      return React.createElement('h2', {}, this.props.title)
   }
})

const MovieDescription = React.createClass({
   propTypes: {
      description: React.PropTypes.string.isRequired
   },
   render: function () {
      return React.createElement('p', {}, this.props.description)
   }
})

const MovieImage = React.createClass({
   propTypes: {
      src: React.PropTypes.string.isRequired
   },
   render: function () {
      React.createElement('img', {
         src: 'img/' + this.props.img
      })
   }
})

const movieElements = movies.map((movie) => {
   return React.createElement(Movie, {
         key: movie.id
      },
      React.createElement(MovieTitle, { title: movie.title }),
      React.createElement(MovieDescription, { description: movie.desc }),
      React.createElement(MovieImage, { src: movie.img })
   );
});

const element = React.createElement(MovieList, { movies: movieElements })

ReactDOM.render(element, document.getElementById('app'));