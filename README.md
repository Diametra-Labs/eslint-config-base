# @diametra/eslint-config-base

The Diametra-Labs ESLint configuration preset is intended for react projects that are **written only with javascript**. It offers a very flexible configuration. This preset is not meant to kill your productivity, just worry about coding : )

## Features

- using eslint best [practices](https://eslint.org/docs/rules/)

- with prettier support, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier). We take care of formatting the code for you 👌

- with [react](https://reactjs.org/), [react-hooks](https://reactjs.org/docs/hooks-intro.html)

## Installation

> including ECMAScript 6+

Install the package with

```sh
npm install @diametra/eslint-config-base --save-dev

# or

yarn add @diametra/eslint-config-base -D
```

## Usage

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@diametra/eslint-config-base"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "@diametra/eslint-config-base"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: '@diametra/eslint-config-base',
}
```

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- react and/or node environment
- browser and/or node environment
- parser: babel (used babel-eslint parser)


## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/markozxuu">
          <img width="150" height="150" src="https://github.com/markozxuu.png?v=3&s=150">
          </br>
          Markoz Peña
        </a>
        <div>
          <a href="https://twitter.com/markozxuu">
            <img src="https://img.shields.io/twitter/follow/markozxuu.svg?style=social&label=Follow" />
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>
