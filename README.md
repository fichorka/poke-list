# Poke List

A Fronted app for displaying a list of Pokemon fetched from [PokéAPI](https://pokeapi.co/)

[Deployed here](https://filibit-poke-list.netlify.app/)

Home page features a list of Pokemon with **pagination**, **filtering** by type / ability and **search** functionality.

Pokemon page features **details** about the selected Pokemon, along with **images**, and **type modals**.

## Usage
`npm install` to install dependencies

`npm start` to start a virtual server with live reloading enabled

or

`npm run build` to output production files into `dist` folder

## Details
| Function          | Tool         |
| ----------------- | ------------ |
| **Bundling**      | webpack      |
| **Transpiling**   | Babel        |
| **Type checking** | Typescript   |
| **Framework**     | React        |
| **Routing**       | React Router |
| **Linter**        | ES Lint      |
| **Formatting**    | Prettier     |

## Notes
Virtual server, created by `npm start` script serves correct files on reload of any route. However, production files, and a deployment on Netlify (see above) produced by `npm run build` do not. They require a server of their own, which needs to be configured to enable single page application routing.
