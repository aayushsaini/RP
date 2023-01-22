<h1>Assignment 1 • Inception </h1>
<b>1. What is EMMET?</b>
<p>EMMET is a free tool/extension for the code editor that lets the user type the code in the form of shortcuts which gets expanded to their complete form. 
<p>For e.g., RFCE in react expands & enters the code for React Functional Component Export</p>
</p>
<b>2. Difference between library & framework</b>
<p>
Both the library & frameworks are the collection of resuable code written by someone else. <br/>
👉 &nbsp;Library is a set of helper/utility functions which your code can invoke & use as per the requirement. <blockquote>You control the flow of code</blockquote> <br/>
👉 &nbsp;Frameworks are the like the skeleton i.e., things are well structured, opinionated here. We as a developer have to plug our code according the specification of that framework.<br/>
<blockquote>Frameworks are in charge of the flow of code</blockquote>
</p>
<b>3. What is a CDN? Why do we use it?</b>
<p>CDNs or Content Delivery Networks are usually used to serve the users/clients the static files (cached) that are not very oftenly changed. 

For e.g., we might host our Frontend code base on a CDN to make the user/client receive the front-end code faster without making the user wait for the complete transmission of data via all the apis</p>
<b>4. Why is React known as React?</b>
<p>It is called React because React as a library reacts to the state changes. It was developed by Facebook (a site that constantly updates their data) to improve the UI development that efficiently reacts to the state & data changes in the application </p>
<b>5. What is a CROSS-origin in the script tag</b>
<p>This attribute is used to change the HTTP request type to an HTTP CORS Request. Often, we need the data from different servers which as a security practice restricts the non-authorized or non-same-origin request to get the data. So, in order to get the CSS/JS library hosted on a CDN, we change the request to an HTTP-CORS request.</p>
<b>6. Difference between React & React-DOM</b>
<p>React is the core library that is responsible for creating components, managing states, props, etc. whereas the React-DOM is responsible to render them to the browser. They were separated with the arrival of the React-Native library.</p>
<b>7. What is difference between react.development.js and react.production.js files via CDN?</b>
<p>The first one meant to be used only for the development & is not suitable for the production. As the production requires minified & optimized code which can be found in the react.production.js files from the CDN.</p>
<b>8. What is Async & Defer?</b>
<p>These are the two ways of loading & executing the scripts when the browser loads a new page

👉 &nbsp;Defer: This attribute tells the browser to not to wait for the scripts to be loaded & executed. Instead, the browser will continue to load & build the DOM. The scripts load in the <b>background</b>, & then executes them once the DOM is fully built.
<blockquote>Deferred scripts keep their relative order, just like regular scripts</blockquote><br/>
<ul>
<li>Scripts with defer never block the page.</li>
<li>Scripts are executed after DOM is fully built but before the <b>DOMContentLoaded</b> event</li>
</ul>
<b>Result: </b><br/>
1. Page shows up immediately <br/> 
2. <b>DOMContentLoaded</b> event waits to be fired until the defered scripts are loaded & executed.<br/><br>
👉 &nbsp;Async: This attribute is similar to the defer as it also makes the scripts non-blocking. The browser does not wait for the execution to be completed therefore, the event <b>DOMContentLoaded</b> may fire before or after the async scripts, irrespectively of them getting loaded & executed. Good for loading 3rd party independent scripts.
</p>