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
   // render: function () {
   render() {
      return React.createElement('h1', {}, this.props.title);
   },
});


const MovieTitle = React.createClass({
   propTypes: {
      title: React.PropTypes.string.isRequired
   },
   // render: function () {
   render() {
      return React.createElement('h2', {}, this.props.title);
   }
});

const MovieDescription = React.createClass({
   propTypes: {
      description: React.PropTypes.string.isRequired
   },
   // render: function () {
   render() {
      return React.createElement('p', {}, this.props.description);
   }
});

const MovieImage = React.createClass({
   propTypes: {
      src: React.PropTypes.string.isRequired
   },
   // render: function () {
   render() {
      return React.createElement('img', {
         // src: 'img/' + this.props.img
         src: `./img/${this.props.src}`
      });
   }
});
const Movie = React.createClass({
   propTypes: {
      // movie_id: React.PropTypes.object.number,
      // movie_title: React.PropTypes.object.string,
      // movie_description: React.PropTypes.object.string,
      // movie_img_url: React.PropTypes.object.string
      movie: React.PropTypes.object.isRequired
   },
   // render: function () {
   render() {
      console.log(this.props.movie);
      return (
         React.createElement(
            'li', {
               key: this.props.movie.id
            },
            React.createElement(
               MovieTitle,
               {
                  title: this.props.movie.title
               }
            ),
            React.createElement(
               MovieDescription,
               {
                  description: this.props.movie.desc
               }
            ),
            React.createElement(
               MovieImage,
               {
                  src: this.props.movie.img
               }
            )
         )
      );
   }
});


const MovieList = React.createClass({
   propTypes: {
      movies: React.PropTypes.array.isRequired
   },
   // render: function () {
   render() {
      const listTitle = React.createElement(
         ListTitle, { title: 'Lista filmów' }
      );
      const moviesElements = this.props.movies.map(function (movie) {
      // const movies = this.props.movies.map((movie) => {
         return (
            React.createElement(
               Movie,
               {
                  key: movie.id,
                  movie: movie
               }
            )
         );
      });
      return (
         React.createElement(
            'ul',
            {},
            listTitle,
            moviesElements)
      );
   }
});

const element = React.createElement(
   MovieList,
   {
      movies: movies
   }
);
ReactDOM.render(element, document.getElementById('app'));
