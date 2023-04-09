# NetflixSearchUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

ChatGPT 4 built most of this UI based on this prompt:

- Hello I am a Senior Software Engineer who specializes building web apps. I need some help building a web application
  quickly, using a lightweight front end framework and AWS lambda and AWS API gateway to serve data to the front end. I
  would like if you helped me and be my programming assistant. I look forward to working with you. Follow these next
  instructions:
- I need help creating a web app that would allow me to search on two countries by country code abbreviation, to see
  what Netflix shows or movies they have in common. I am an American and my wife is Brazilian and we both live on
  separate continents while we wait for her visa to process. We run into the issue that either she or I find something
  we want to watch on Netflix, but the other person's country doesn't have it.

- Create a search page, a page to show the list of similar shows or movies, and then a page to fetch and display the
  details of that show or movie

- The data for this app will be retrieved through AWS API gateway, that serves data from lambdas that hit the UNOGS
  netflix API through rapid api. The API gateway and lambdas have already been created and deployed using serverless.
  The uri to hit is /search. For the details page the endpoint is /details/{id}

- First think step-by-step-describe your plan for what to build in psuedocode, written in markdown to great detail.

- Then output the code in a single codeblock for each component you create

- I would like the front end to use angular and PrimeNG UI library

- I am excited to learn as we build the app together.

I only had to update a little bit of the code manually to get a good looking search UI.

## Demo
[![Netflix Search Demo](https://img.youtube.com/vi/N_ER0gkuWSk/0.jpg)](https://www.youtube.com/watch?v=N_ER0gkuWSk)
