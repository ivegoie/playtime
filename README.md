# Playtime

This project is a video game website database that retrieves data from the RAWG API. The purpose of this application is to provide users with a comprehensive collection of video games, including information such as game details, ratings, reviews, and more.

## Table of Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Demo

<img src="https://i.ibb.co/cyFhS06/Screenshot-2023-12-23-111518.png" alt='demo'/>

## Technologies

- <b>Front-End</b>

  - [React Vite](https://vitejs.dev/guide/)
  - [Tailwind](https://tailwindcss.com/docs/installation)
  - [DaisyUI](https://daisyui.com/docs/install/)
  - [Axios](https://axios-http.com/docs/intro)

- <b>Back-end</b>
  - [RAWG API](https://rawg.io/apidocs): A RESTful API that provides data about video games, including game details, ratings, and more.

## Features

- Search and browse a vast collection of video games.
- View detailed information about each game, including release date, genre, platform, and description.
- Access screenshots, trailers, and other media associated with each game.

## Installation

1. Clone the repository:

```shell
   git clone https://github.com/ivegoie/playtime.git
```

2. Navigate to the project directory

```shell
cd playtime
```

3. Install dependencies

```shell
npm install
```

4. Run the development server

```shell
# The app will be available at http://localhost:3000.
npm run dev
```

## Usage

Once the application is running, you can use the search functionality to find specific video games or browse through the collection. Clicking on a game will display its detailed information, including release date, genre, platform, and description. You can also view screenshots, trailers, and user reviews for each game. Additionally, you can save your favorite games to your personal library for quick access.

## API Documentation

API Documentation is available online on [RAWG API DOCS](https://api.rawg.io/docs/)

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please submit a bug report or a feature request through the appropriate channels. Refer to the project's contribution guidelines for more details.

## Build

To build the app for production, run the following command:

```shell
# The optimized and minified files will be generated in the dist directory.
npm run build
```

## License

This project is licensed under the [MIT License](LICENSE).
