![Backup Data](https://github.com/cmsonfire/cmsonfire-data/workflows/Backup%20Data/badge.svg)

## cmsonfire-data

Git version of the Firestore version of the data for the cmsonfire.com site. Automatically backed up during publish.

To create this history repository:

```
mkdir cmsonfire-data
git init
yarn init -y
yarn add @cmsonfire/cli@latest
```

`package.json`

```json
{
  "name": "cmsonfire-data",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "private": true,
  "author": "Tony Alves (@talves)",
  "license": "MIT",
  "dependencies": {
    "@cmsonfire/cli": "^0.1.2"
  },
  "scripts": {
    "cms:data": "cmsonfire import cms-on-fire -k ./service-account-key.js -o . -c ./config.js -v -F",
    "cms:data:export": "cmsonfire export cms-on-fire -k ./firebase-admin-key.js -c ./config.js"
  }
}
```

Create an environment variable (secret key) for the repository `GOOGLE_APPLICATION_ADMIN` to be used by `service-account-key.js` to get credentials. These credentials are stored in the console for the firebase app.

Test the download using credentials

```bash
yarn cms:data
```
