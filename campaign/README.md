vid[s] 02a-02b: Routes and Links Challenge - start


Route and Link challenge

GOALS

    Understand the utilization and implementation of:

        React Router
        - https://www.w3schools.com/react/react_router.asp
        - https://reactrouter.com/docs/en/v6/getting-started/overview

        BrowserRouter - A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
                - https://v5.reactrouter.com/web/api/BrowserRouter

        Routes - a container consisting of one or more <Route>

        Route - An object or Route Element typically with a shape of { path, element } or <Route path element>. The path is a path pattern. When the path pattern matches the current URL, the element will be rendered.
                - https://reactrouter.com/docs/en/v6/getting-started/concepts

        Route - to put another way: 
                    Route is the conditionally shown component that renders some UI when its path matches the current URL.


        Route Config - A tree of routes objects that will be ranked and matched (with nesting) against the current location to create a branch of route matches.
            
        <Link> - is used to set the URL and keep track of browsing history.
            - Nav links: https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
            - tutorial: https://reactrouter.com/docs/en/v6/getting-started/tutorial#add-some-links


INSTRUCTIONS

    Found on main.html when program is running or in imports/ui/Instructions.js



Stop runaway node or mongo on windows

taskkill /f /im mongod.exe
taskkill /f /im node.exe