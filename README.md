# My Webflow Boilerplate

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [Clone the repository](#clone-the-repository)
  - [Install the dependencies](#install-the-dependencies)
- [Usage](#usage)
  - [Development](#development)
  - [Build](#build)
  - [Preview](#preview)
- [Directory Structure](#directory-structure)
- [Linting and Formatting](#linting-and-formatting)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [Stylelint](#stylelint)
- [Git Hooks](#git-hooks)
  - [Husky](#husky)
  - [Lint-staged](#lint-staged)
  - [Commitlint](#commitlint)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Vite** for fast development and build processes
- **TypeScript** for type safety
- **SCSS** for advanced styling capabilities
- **GSAP** and **Swiper** for animations and sliders
- **Dayjs** for date manipulation
- **Prettier** and **ESLint** for code formatting and linting
- **Stylelint** for SCSS linting
- **Husky** and **Lint-staged** for Git hooks and pre-commit linting
- **Commitlint** for enforcing commit message conventions

## Installation

### Clone the repository

To get started with this boilerplate, clone the repository:

```bash
git clone https://github.com/your-username/my-webflow-boilerplate.git
```

### Install the dependencies

After cloning the repository, navigate to the project directory and install the dependencies:

```bash
cd my-webflow-boilerplate
npm install
```

## Usage

### Development

To start the development server, run the following command:

```bash
npm run dev
```

This will launch the development server and you can access your application at `http://localhost:3000`.

### Build

To build the project for production, run the following command:

```bash
npm run build
```

This will generate optimized and minified files in the `dist` directory.

### Preview

To preview the production build, run the following command:

```bash
npm run serve
```

This will start a local server and you can access your application at `http://localhost:5000`.

## Directory Structure

The directory structure of the project is as follows:

```
my-webflow-boilerplate/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │   └── styles/
│   │       ├── main.scss
│   │       ├── _variables.scss
│   │       ├── _mixins.scss
│   │       └── _base.scss
│   ├── components/
│   │   ├── header/
│   │   │   ├── Header.ts
│   │   │   ├── Header.scss
│   │   │   └── index.ts
│   │   ├── footer/
│   │   │   ├── Footer.ts
│   │   │   ├── Footer.scss
│   │   │   └── index.ts
│   ├── libs/
│   │   ├── gsap.ts
│   │   ├── swiper.ts
│   │   └── dayjs.ts
│   ├── utils/
│   │   ├── debounce.ts
│   │   ├── throttle.ts
│   │   └── helpers.ts
│   ├── index.ts
│   └── index.html
├── .env
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .husky/
│   ├── pre-commit
│   ├── pre-push
│   └── commit-msg
└── README.md
```

## Linting and Formatting

The project uses the following tools for linting and formatting:

### ESLint

ESLint is used for linting TypeScript and JavaScript files. The configuration is defined in `.eslintrc.js`.

### Prettier

Prettier is used for code formatting. The configuration is defined in `.prettierrc`.

### Stylelint

Stylelint is used for linting SCSS files. The configuration is defined in `.stylelintrc.json`.

## Git Hooks

The project utilizes Git hooks for automated tasks. The hooks are defined in the `.husky` directory.

### Husky

Husky is used to manage Git hooks.

### Lint-staged

Lint-staged is used to run linters on staged files. The configuration is defined in `package.json`.

### Commitlint

Commitlint is used to enforce conventional commit messages. The configuration is defined in `package.json`.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please submit a pull request.

## License

This project is licensed under the MIT License.
