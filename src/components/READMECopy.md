## About this Project

This is my personal portfolio project.

Build stack:

- Scaffolding: [create-react-app](https://github.com/facebook/create-react-app)
- Navigation: [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
- Database: [Airtable](https://airtable.com/).
- Styling: [node-sass](https://github.com/sass/node-sass)
- IDE: [Glitch](https://glitch.com/)
- Deployment: [Netlify](https://www.netlify.com/)

### Why React?

React isn't necessarily recommended for simple websites like this, but I've been needing to put together a portfolio website for a very long time and I decided this would be a perfect chance to really play around with React.

In particular, I wanted to learn how to work with the Airtable API since that is where I have been storing & organizing all of my design projects, and I'm most familiar with using [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for API calls. 

Once I have a chance to learn GraphQL, I'll be able to rebuilt this site with [Gatsby](https://www.gatsbyjs.org/).


### Up Next

- [ ] Do a whole heck of a lot of code clean up (I've left quite a mess)  
- [x] Add react-router for linking between pages  
- [x] write About page (what do I say about myself??)  
- [x] figure out what exactly to put on the homepage  
- [x] add some links to the footer  
- [ ] create a form for the Contact page that submits data to Airtable  
- [ ] add a page to feature CodePen projects    
- [x] add markdown to the "description" Gallery field, and render with [react-markdown](https://github.com/rexxars/react-markdown)  
- [ ] optimize images so they load faster  
- [ ] do an accessibility pass to make sure I meet basic standards  

*bugs to fix*

- [ ] figure out what's wrong with my manifest.json file  
- [ ] figure out why GitHub is giving me a bunch of security warnings 

**big future plans**

- [ ] do a more in-depth accessibility analysis  
- [ ] add a blog module that uses markdown  
- [ ] add a blog subdomain to netlify  
- [ ] clean up & refactor my css a LOT  
- [ ] clean up & refactor some of my javascript and component organization

**even bigger future plans**

- [ ] learn GraphQL and redo the entire thing in Gatsby  
- [ ] migrate everything out of Glitch to my own local environment  
- [ ] convert this codebase to be used for [dexo.dev](https://dexo.dev/)  
- [ ] redo the layout so that I can have a sidebar component  
- [ ] look into SEO stuff

---

---

## Credits

In this section, I'll try to keep track of where I get ideas & code snippets from. I obviously won't list every Stack Overflow answer and documentation site that I come across, but if I use a whole chunk of code, library, or other framework or take inspiration from a particular source, it will be credited here (...as long as I didn't lose it in my sea of 500 tabs).

#### CSS

- Super cool text-shadow: [Hit the Floor Text Effect by ThatGuySam](https://codepen.io/ThatGuySam/pen/CytDA)
- CSS entities for custom bullets & all sorts of lightweight icons: [Complete CSS Entity Reference](https://www.w3schools.com/cssref/css_entities.asp)

#### Assets

- Super neat mountain background: [SVG Backgrounds](https://www.svgbackgrounds.com/)
- Favicon: [Favicon.io](https://favicon.io/)

#### JavaScript

- easy Intersection Observer trick that I use everywhere: [Detecting when an Element Becomes Fixed in CSS position:sticky with an Intersection Observer](https://usefulangle.com/post/108/javascript-detecting-element-gets-fixed-in-css-position-sticky)  


#### React Components

- Super easy placeholder text for prototyping: [DummyJS](https://dummyjs.com/)
- Making stuff look like it's loading while it's loading: [LazyLoad](https://github.com/twobin/react-lazyload)
- FontAwesome icons for React: [FortAwesome/react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
- Making it easy to write a lot of content in markdown and then parsing it to react/html: [React Markdown](https://github.com/rexxars/react-markdown)  
- Masonry style layout: [React Masonry CSS](https://www.npmjs.com/package/react-masonry-css)  
- Controlling scroll for a modal: [react-scroll-lock-component](https://github.com/orteth01/react-scroll-lock-component)   
- The current image carousel that I'm using (with heavily customized styling): [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)

#### Useful tutorials & other resources that I depend on

- The best hex code & rgb color picker ever(I LIVE out of this website): [HTML Color Codes](https://htmlcolorcodes.com/)

### Made using [Glitch](https://glitch.com/)

\ ゜ o ゜)ノ

Here are the Glitch projects that helped me figure stuff out:

- [airtable-example](https://glitch.com/~airtable-example)
- [starter-react-template](https://glitch.com/~starter-react-template)


[![Netlify Status](https://api.netlify.com/api/v1/badges/d542ec44-94b5-4fe2-b61d-f2909adf8e75/deploy-status)](https://app.netlify.com/sites/quirky-curie-d765f6/deploys)