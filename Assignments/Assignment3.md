<h1>Assignment 3 - Laying the foundation</h1>
<b>1. What is JSX?</b>
<p>JSX is an HTML-like syntax extension for the Javascript to be used in the React. It is not a string or an HTML element but just an Javascript Extended Syntax (JSX). <br>
JSX is not mandatory while writing a React application.</p>
<b>2. Super powers of JSX?</b>
<p>Following are some benefits of the JSX:
<ul>
<li>Sanitizes the code before sending to server to avoid XSS
<li>Since it follows an HTML like syntax thus it makes it easy to read & write the UI code for the React application
<li>JSX allows react to show more usefull errors & warnings
<li>Faster than normal JS, as it performs optimization while converting to normal JS
</ul></p>
<b>3. Role of type attribute in script tag? What else option can we use?</b>
<p>The type attributes specifies the type of script we are going to use/implement.
<br>
Types could be - module, text/application, text/javascript, etc.</p>
<b>4. {TitleComponent} vs {&lt;TitleComponent /&gt;} vs {&lt; TitleComponent &gt;&lt;/ TitleComponent&gt;}</b>
<p>
• {TitleComponent} is just a reference to the component (JS function) or if not a functional component then it should be a jsx var which would return an obj.<br>
• {&lt;TitleComponent /&gt;} vs {&lt; TitleComponent &gt;&lt;/ TitleComponent&gt;} - Both are same, used to a render component. Use first if you don't want to compose or render a child component inside it.
</p>
