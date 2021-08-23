# Assignment - ReactJS app.

Name: ... Maryia Balbachan: 20029834 ...

## Overview.
 ........
 + Feature 1: Popular page: Get a list of the current popular movies on TMDB. This list updates daily.
 + Feature 2: User can add movies to Must Watch list as well as favourite from both Upcoming movies and Popular Movies
 + Feature 3: Must watch page added to view movies that have been selected as a Must watch. User can also remove movies form their Must watch list/page
 + Feature 4: Top rated movies of all times page added with the same functionality as Upcoming and Popular to add movies to favourites and Must Watch.
 .........

## Setup requirements.

...... Clone the repository onto your local machine, open in VS Code and run npm install to install all the dependencies ........

## API Data Model.

.....Additional Endpoints used:
+ Popular Movies `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
+ Top Rated Movies `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`.........

![][model]
>TMDB popular query response.

![][model1]
>TMDB top rated query response.


## App Design.

### Component catalogue.

I have kept the same structure for Storybook park as our lab work. The only amendements I have made is adding the AddToMustWatch button to the Movie card for default and exception cases.
![][stories]
![][stories1]
![][stories2]
![][stories3]

### UI Design.

![][view]
>This page displays Populat movies.

![][view1]
>This page displays movies added to Must watch List. On this page you can delete movies from your must watch list.

![][view2]
>This page displays Top Rated movies from TMDB. User can add movies to favourites and Must watch lists. 

### Routing.

+ GET /movie/top_rated Get the top rated movies on TMDB.
+ GET /movie/popular Get a list of the current popular movies on TMDB. This list updates daily.

## Independent learning (If relevant).

Not applicable


[model]: ./popularresponse.png
[model1]: ./topratedresponse.png
[view]: ./popular.png
[view1]: ./mustwatch.png
[view2]: ./toprated.png
[stories]: ./storybook.png
[stories1]: ./storybook1.png
[stories2]: ./storybook2.png
[stories2]: ./storybook3.png