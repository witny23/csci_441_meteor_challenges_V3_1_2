import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice implementing scss techniques in our application
      </p>
      <h2>Part 1: Set up your style to use rem (root element's font size) units (vid 24a)</h2>
      <li>imports/client/styles/main.scss:
          <ul>
            <li>Perform a reset of the margin and padding (set to 0) for everything using the universal selector (*).</li>
            <li>Set the font size of your html to 62.5% which is setting everying to be 10px</li>
            <li>Set your body's font family, font color, and background color to anything you want.</li>
            <li>Using rem, set the h1's font size to an appropriate size. </li>
            <li>Set margin-left to 2 rem for list items</li>
          </ul>
      </li>
      <h2>Part 2: Stylize the TitleBar (vid 24a)</h2>
      <li>imports/client/styles/main.scss:
          <ul>
            <li>Create a class selector for the title bar. Then:
              <ul>
                <li>provide a font and background color different than that set on the body</li>
              </ul>
            </li>
            <li>Create another class selector to be used to center the title bar. Then:
              <ul>
                <li>center that class by using the margin / auto technique</li>
                <li>limit the max width of contents in your class using rem (pick any size that is small enough to notice)</li>
                <li>provide some padding using rem (just something that looks decent)</li>
                <li>provide some background color (something different - it might not look great but this is for practice)</li>

              </ul>
            </li>
          </ul>
      </li>
      <li>imports/ui/TitleBar.js:
          <ul>
            <li>Apply your previously developed class selector for the titleBar color and background on the TitleBar using className</li>
            <li>Use your centering class to center the titleBar</li>
          </ul>
      </li>
      
      <h2>Part 3: scss imports (vid 25a)</h2>
      
      <li>Create a new <strong>base</strong> directory in imports/client/styles
        <ul><li>In web dev frameworks, the base folder in a project is typically used for foundational styles that serve as the base layer of the site's styling. These styles are usually generic, foundational rules that create a consistent, clean slate for the rest of the site's design.</li></ul>
      </li>
      <li>Create a new imports/client/styles/<strong>base/_reset.scss</strong>
          <ul>
            <li>Move everything from <strong>Part 1</strong> into this partial</li>
          </ul>
      </li>
      <li>Create a new <strong>components</strong> directory in imports/client/styles</li>
      <li>Create a new imports/client/styles/<strong>components/_titleBar.scss</strong>
          <ul>
            <li>Move the class selector for the titleBar's color and background located in main.scss into this partial</li>
          </ul>
      </li>
      <li>Create a new imports/client/styles/<strong>components/_wrapper.scss</strong>
          <ul>
            <li>Move the class selector for centering the titleBar located in main.scss into this partial</li>
          </ul>
      </li>
      <li>imports/client/styles/main.scss
          <ul>
            <li>import the _reset.scss (hint <strong>@use ./base/...</strong> the ./ indicates to start in current folder)</li>

            <li>import the _titleBar.scss</li>
            <li>import the _wrapper.scss</li>
            <li>The previous three lines should be the only thing in your main.scss</li>
          </ul>
      </li>
      <li>Test to make sure your style loads</li>
      <hr/><hr/>
    </>
    );
  }
};