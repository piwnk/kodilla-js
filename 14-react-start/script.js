const movies = [
   {
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
   }
];


movies.map((movie) => {
   movie.id = movies.indexOf(movie) + 1;
});

const moviesElements = movies.map((movie) => {
   return React.createElement('li', {
      key: movie.id
   }, React.createElement('h2', {}, movie.title),
   React.createElement('p', {}, movie.desc), React.createElement('img', {
      src: 'img/' + movie.img
   }));
});

// const element = React.createElement('div', {}, 'Hello world!');

const element = React.createElement('div', {}, React.createElement('h1', {}, 'Lista filmów'),
// React.createElement('ul', {},    React.createElement('li', {},
// React.createElement('h2', {}, 'Harry Potter'),       React.createElement('p',
// {}, 'Film o czarodzieju')    ),    React.createElement('li', {},
// React.createElement('h2', {}, 'Król lew'),       React.createElement('p', {},
// 'Film o królu sawanny')    ) )
React.createElement('ul', {}, moviesElements));

ReactDOM.render(element, document.getElementById('app'));