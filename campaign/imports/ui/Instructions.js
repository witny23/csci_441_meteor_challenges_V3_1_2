import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice creating React Props
      </p>
      <h2>Part 1: Create a placeholder for a footer (vids 16a &amp; 16b)</h2>
      <ul>
        <li>create an imports/ui/Footer.js file and then in that file:
          <ul>
            <li>create a component that returns an h1 'footer placeholder'</li>
          </ul>
        </li>
        <li>client/main.js:
          <ul>
            <li>import Footer.js</li>
            <li>use Footer in page after the &lt;form&gt;</li>
          </ul>
        </li>
      </ul>
      <h2>Part 2: Make the footer dynamic by adding a prop (vids 16a &amp; 16b)</h2>
      <ul>
        <li>client/main.js:
          <ul>
            <li>create a variable called footer_content = 'my foot'; </li>
            <li>pass the footer_content as a prop to the Footer component using &lt;Footer /&gt;</li>
          </ul>
        </li>
        
        <li>imports/ui/Footer.js:
          <ul>
            <li>modify Footer component to use the prop sent from the main</li>
          </ul>
        </li>
      </ul>
      <h2>Part 3: Require the footer prop as a string (vid 16a)</h2>
    </>
    );
  }
};