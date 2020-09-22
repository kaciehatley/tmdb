# Movie Forward

#### Run Applicatiom [Here](https://kaciehatley.github.io/tmdb/)

## Contents
* [About](#about)
* [Installation](#installation)
* [Heroku](#ghpages)
* [Issues](#issues)
* [Next Steps](#steps)

## About<a name="about"></a>

Movie Forward is a front-end React application, allowing users to search for movies by title and access additional information about films including their rating and a brief overview.  

## Installation<a name="installation"></a>

### Built With

* [React](https://laravel.com/)
* [React Bootstrap](https://github.com/laravel/ui)

### Running Locally

* Clone the repository

<img width="154" alt="Screen Shot 2020-04-04 at 12 18 55 AM" src="https://user-images.githubusercontent.com/55072295/78418421-e2330880-7609-11ea-9598-8374f02146af.png">

Run the following command in your command line interface:

```
git clone <clone link here>
```

cd into the folder with this command-
```
cd tmdb
```

Install dependencies by running:

```
npm install
```

You should create an environment file using this command-
```
cp .env.example .env
```

Be sure to edit `.env` file, adding a variable titled 'REACT_APP_API_KEY'. You can set it equal to your TMDB API key which you can get [here](https://www.themoviedb.org/settings/api).

Use the following code to run the application locally.
```
npm start
```

## Run in Github Pages<a name="ghpages"></a>
[Run Application With GitHub Pages](https://kaciehatley.github.io/tmdb/)

### Search Movie Title
![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/55072295/93909421-be55a300-fccd-11ea-8ab2-0349a0e4fc25.gif)

## Current Issues<a name="issues"></a>

### Pagination

#### Issue

Pagination works about 50% of the time locally. Other times, page displays with no results rendered. When deployed, client receives 404 error.

#### Troubleshooting

* Checked console--no errors.

#### Potential Solution

* Hash in href on <a> in pagination.js.

### Mobile Responsiveness

#### Issue

On screens below 475px wide, cards shift to left side of screen. Screens below 1100px wide cut off the movie details modal.

#### Troubleshooting

* Experimented with grid display.
* Added inline-styling.
* Set horizontal margin to auto.

#### Potential Solution

* Add flex Bootstrap classes to grid. 
* Use [styled-components](https://styled-components.com/) to create custom syting for Boostrap elements.
* Add media queries.

## Next Steps <a name="steps"></a>

* Pagination
* Fetch additional data to add to movie details cards such as genre
* User can search by other keywords (actors, genres)
* Substitute inline styling for styled-components.

