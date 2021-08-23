# Assignment - ReactJS app.

Name: ... Maryia Balbachan ...

## Overview.
 
 + Feature 1: Popular page: Get a list of the current popular movies on TMDB. This list updates daily.
 + Feature 2: User can add movies to Must Watch list as well as favourite from both Upcoming movies and Popular Movies
 + Feature 3: Must watch page added to view movies that have been selected as a Must watch. User can also remove movies form their Must watch list/page
 + Feature 4: Top rated movies of all times page added with the same functionality as Upcoming and Popular to add movies to favourites and Must Watch.
 

## Setup requirements.

...... Clone the repository onto your local machine, open in VS Code and run npm install to install all the dependencies ........

## API Data Model.


![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

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

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.


## Independent learning (If relevant).

Not applicable


[model]: ./data.jpg
[view]: ./popular.png
[view1]: ./mustwatch.png
[view2]: ./toprated.png
[stories]: ./storybook.png
[stories1]: ./storybook1.png
[stories2]: ./storybook2.png
[stories2]: ./storybook3.png