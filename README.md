# @atomazing-org/telegram-web-app

A lightweight wrapper to load and initialize the [Telegram Web App](https://core.telegram.org/bots/webapps) JavaScript SDK dynamically.

## Features

- Loads Telegram Web App script asynchronously
- Resolves with the `Telegram` object after the SDK is ready
- Automatically skips loading if already present

## Installation

```bash
npm install @atomazing-org/telegram-web-app
```

## Usage

```ts
import { Telegram } from '@atomazing-org/telegram-web-app';

Telegram?.WebApp?.ready();
console.log(Telegram?.WebApp?.platform);
```

The module exports a single object `Telegram`, which is awaited internally and is ready to use upon import.

## How It Works

- Loads `https://telegram.org/js/telegram-web-app.js` dynamically
- Returns the `window.Telegram` global object after the script loads successfully
- Throws an error if the script fails to load

## Example

```ts
import { Telegram } from '@atomazing-org/telegram-web-app';

Telegram.WebApp.expand();
Telegram.WebApp.setBackgroundColor("#ffffff");
```

## Build

```bash
npm install
npm run build
```

## License

MIT