# Swiperz

A fun 2 player game which mimics connect 4, but sideways!

Game Rules
==
- Connect 4 in a row, column or diagonally to win!
- Game will declare a tie if no spaces left
- Each player takes turns placing a block on either side of the board

To-Do List
==
- [x] Boilerplate app
- [x] Create board, 7x7, rows x columns
- [x] Players take turn adding pieces to a row on one of the sides
- [x] pieces stack beside each other
- [x] Game ends when no spaces left, or a player has four consecutive pieces on a diagonal, column, or row
- [x] Displays "player n won!" after game ends
- [x] Use relational database for back end
- [ ] Two players see the board
- [x] Browser does not need to refresh to see a player move / update pieces
- [x] create api for backend psql db
- [ ] additional features, leaderboard, eg; red 1 : 2 Blue -> BLUE WINS!


example board - x wins
 
 0. [ _ _ _ _ o x o ]
 1. [ o x x x x _ o ]
 2. [ x _ _ _ _ _ x ]
 3. [ x _ _ _ _ _ o ]
 4. [ o _ _ _ _ _ _ ]
 5. [ _ _ _ _ _ _ _ ]
 6. [ _ _ _ _ _ _ _ ]

Available Scripts
==

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.