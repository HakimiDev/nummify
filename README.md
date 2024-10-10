# nummify

**nummify** is a lightweight and intuitive library designed for converting numbers into their written word representation in multiple languages. With its straightforward API, you can easily integrate it into any project to enhance number handling and presentation.

## Installation

You can install `nummify` using any of the following package managers:

### npm

```bash
npm install nummify
```

### yarn

```bash
yarn add nummify
```

### pnpm

```bash
pnpm add nummify
```

### bun

```bash
bun add nummify
```

## Usage

Getting started with `nummify` is simple. Here’s how to use the library:

### ES6 Import

```javascript
import numReader from 'nummify';

console.log(numReader.readNumbers('1234.5', 'en')); // Output: "one thousand two hundred thirty four point five"
console.log(numReader.readNumbers('1234.5', 'ar')); // Output: "الف ومئتان وأربعة وثلاثون فاصلة خمسة"
```

### CommonJS Require

```javascript
const numReader = require('nummify');

console.log(numReader.readNumbers('1234.5', 'en')); // Output: "one thousand two hundred thirty four point five"
console.log(numReader.readNumbers('1234.5', 'ar')); // Output: "الف ومئتان وأربعة وثلاثون فاصلة خمسة"
```

## Supported Languages

- **`ar`**: Arabic
- **`en`**: English

## Features

- **Simplicity**: Easy to use with minimal setup required.
- **Multi-language Support**: Converts numbers to words in both Arabic and English.
- **Versatile Handling**: Supports various number formats, including decimals and negative numbers.
- **Lightweight**: Designed to be unobtrusive and efficient, making it ideal for any project.

## Contributing

Contributions are encouraged! Please feel free to submit a pull request or open an issue to improve the library.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Author

#### Made By Software Engineer: `Shadi AL-Hakimi`

## Homepage

[GitHub Repository](https://github.com/HakimiDev/nummify)
