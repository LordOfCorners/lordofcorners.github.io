---
layout: post
title: 'Grant Solutions'
date: 2017-05-31 10:59:56 -0400
categories: portfolio
featured-image: 'gs/grant-solutions.png'
project-tags: 'React, Redux, REST APIs, Jest, Thunks, Mockoon, AA Accessibility'
year: '2019–2020'
noindex: true
excerpt:
---

Huge was hired to build a web app for the Department of Health and Human Services that allows grantees and grantors to manage grants throughout the entire funding lifecycle. When I rolled onto the project, a previous team at Huge had already built a component library using `React`. My team's task was to build out the application using real data. I led the front-end portion of this which involved constructing pages using components from the library, and calling `REST APIs` to fill the application with data from the Java microservices made by back-end teammates.

For full configurability, I created a React application from scratch using `webpack`, `babel`, `Flow`, `stylelint`, `ESLint`, `Jest`, `prettier`, `Mockoon`, `PostCSS (Autoprefixer)`, `Redux`, `Keycloak`, and `pre-commit hooks`, and `React Router.`

I used `Redux Thunk` and `Axios` to fetch and store data from our Java microservices. By using thunks to dispatch asynchronous actions, we use a Redux action to trigger a call to the API, and then fire a success or fail action depending on the response from the server. The reducer then sets variables in the store so the application always knows if data is currently loading and if the data loaded successfully. This is useful for loading states across the application. Because every page needs to hit the server to fill in the data, I used a redux action to store the API response on a successful call, resulting in no loading time when revisiting a page.

We used Flow (similar to TypeScript) to ensure that components were receiving props of the correct type. This improves readability for someone coming onto the project and helps with debugging.

We used `React Hooks` throughout the project, but used a custom hook that uses interceptors to refresh the authorization token if necessary prior to making a request, and to handle specific server error responses in a uniform way across all API calls.

I had one engineer working with me on the front end, whom I supported by providing guidance as needed to keep us on track to finish within our sprint, while giving her the space to figure things out on her own.

{% include image-row.html image1="portfolio/gs/grants-list.png" image2="portfolio/gs/grant-detail.png" image3="portfolio/gs/grant-reports.png" %}
