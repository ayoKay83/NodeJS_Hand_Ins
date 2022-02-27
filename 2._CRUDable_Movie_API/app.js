import express from 'express';
import { v4 as uuidv4 } from 'uuid';

//app is an instance of my server
const app = express();

//express 
app.use(express.json());

let movies = [
{id: uuidv4(), title: 'Frogs', description: `A group of helpless victims celebrate a birthday on an island estate 
crawling with killer amphibians, birds, insects, and reptiles.`, year: 1972, imdbScore: 4.4},
{id: uuidv4(), title: 'Zombeavers', description: `A fun weekend turns into madness and horror for a bunch of groupies 
looking for fun in a beaver infested swamp.`, year: 2012, imdbScore: 4.8},
{id: uuidv4(), title: 'Night of the lepus', description: `Giant mutant rabbits terrorize the south-west.`, 
year: 1972, imdbScore: 4.1},
{id: uuidv4(), title: 'Dogs', description: `A pack of dogs goes on a killing spree.`, year: 1976, imdbScore: 4.8},
{id: uuidv4(), title: 'Anaconda', description: `A National Geographic film crew is taken hostage by an insane hunter,
who forces them along on his quest to capture the world's largest - and deadliest - snake.`, year: 1997, imdbScore: 10.0}, 
];

//GET all movies
app.get("/movies", (req, res) => {
    res.send(movies);
});

//GET movie by id
app.get('/movies/:id', (req, res) => {
    const {id} = req.params;

    const foundMovie = movies.find((movie) => movie.id === id);

    res.send(foundMovie);
});

//CREATE new movie
app.post('/movies', (req, res) => {
    const movie = req.body;

    //id is generated with the uiid module
    const id = uuidv4();

    //if we want to generate our own id...
    //prefixed notation with ++ in front we increment imidiately
    //movie.id = ++id;

    const movieWithId = {id: id, ...movie}

    movies.push(movieWithId);
    
    res.send(`Movie with the title ${movieWithId.title} added to the API`);
});

//UPDATE entire movie object
app.put('/movies/:id', (req, res) => {
    const {id} = req.params;

    const {title, description, year, imdbScore} = req.body;

    const movieToBeUpdated = movies.find((movie) => movie.id === id);

    movieToBeUpdated.title = title;
    movieToBeUpdated.description = description;
    movieToBeUpdated.year = year;
    movieToBeUpdated.imdbScore = imdbScore;
    
    res.send(movieToBeUpdated);
});

//UPDATE specific properties of one movie 
app.patch('/movies/:id', (req, res) => {
    const {id} = req.params;

    const {title, description, year, imdbScore} = req.body;

    const movieToBeUpdated = movies.find((movie) => movie.id === id);

    if (title) { movieToBeUpdated.title = title; }
    if (description) { movieToBeUpdated.description = description; }
    if (year) { movieToBeUpdated.year = year; }
    if (imdbScore) { movieToBeUpdated.imdbScore = imdbScore; }

    res.send(movieToBeUpdated);
});

//Anders solution
//const movieToUpdateWith = { ...foundMovie, ...req.body, id: foundMovie.id}

//DELETE movie by id
app.delete('/movies/:id', (req, res) => {
    const {id} = req.params;

    movies = movies.filter((movie) => movie.id !== id);
    
    res.send(`Movie with the id ${id} has been deleted.`);
});


app.listen(8080);