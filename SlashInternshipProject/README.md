# Project Title

storyblokAstroAPI

# Table of contents

- Project Title
- Table of contents
- Guide to Use the Project
- Development
- Features
- Author
- Footer

# Guide to Use the Project

- clone my repo `storyblokAstroAPI` to your local machine.
- open the project folder `SlashInternshipProject` in the command line.
- run this command to install all the required packages as the `node_modules` folder is not included.
```
npm install
```
- run this command to start the astro dev server and you can access it through your local host url that will show up.
```
npm run dev
```
- open your browser. you can press on `products` on the header of the first page, to vist the products second page and load the products, filter and sort them.  

# Development

- created a storyblok space, then added two stories. A story for each page.
- used already existing blocks and created new blocks to use them as components in the .astro files.
- Environment variables to be filled in the .env file:
  - STORYBLOK_TOKEN
- created a file called `[...slug].astro` in which I map over the different links or routes of the different pages to access these pages.
- checked what the provided products API responded with in the JSON format, to know what properties inside which objects exactly to catch and to map over which lists. I used postman to check the response.
- made a javascript file called `products_functions` located in the `util` folder. Which hosts all the different functions used in displaying, filtering, sorting the products.
- changed the styling a little bit to match a unified theme using tailwind CSS.
  
# Features

- Storyblok for backend content management (headless CMS [No frontend is connected in one system]). We can integrate any componenets made in any frontend frameworks like a react component or a vue component, etc into Storyblok.
- Astro is a frontend framework for visulaization of the front end components. It requests the content data through an API ```storyblokApi```. It has the responsibility of presenting that content in the website.
- you can filter the products through their price and rating, and sort the products through price (lowest to highest or highest to lowest).

# Author

Marwan Atef Hamed Ali Mohamed

# Footer

This task is made for educational purposes for Slash Company.
