# lerna-react-app-components-sample

A sample that starts operation of multiple React apps and components with [Lerna](https://github.com/lerna/lerna).

## Set up & Start locally

```bash
git clone git@github.com:moriyuu/lerna-react-app-components-sample.git
cd lerna-react-app-components-sample
yarn install
yarn bootstrap
yarn dev # or `yarn dev:app1` or `yarn dev:app2`
# Open http://localhost:2000 or 3000
```

## tips

- Run `lerna add components --scope={app1,app2}` to `import { FooComponent } from "components"` in apps
- Some errors could be fixed by once more `lerna bootstrap` or `lerna clean && lerna bootstrap` 🤪
