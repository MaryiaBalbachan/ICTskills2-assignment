# Assignment - ReactJS app.

Name: ... Maryia Balbachan ...

## Overview.
 
 + Feature 1: Popular page: Get a list of the current popular movies on TMDB. This list updates daily.
 + Feature 2: User can add movies to Must Watch list as well as favourite from both Upcoming movies and Popular Movies
 + Feature 3: Must watch page added to view movies that have been selected as a Must watch. User can also remove movies form their Must watch list/page
 + 
 

## Setup requirements.

...... A brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

## API Data Model.


![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.


## Independent learning (If relevant).

Not applicable


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png