Steps:
1.Clone this repo
2.Run command - npm install
3.Run command - npm start
4.Server will start now

KeyNote: Did not use Redux since it was a very simple API and there were no such actions changing state at multiple places. In simple words, the flow of data is quite simple here, due to absence of any action.
If we get large number of items with more interactivity and actions affecting the state of various components, then we may use Redux for this purpose. We can use cached selectors for our task as well, using Reselect to make our selector efficient and memoize the results.