# Contributing to Boss Admin

## Testing

1. NPM link

```sh
cd boss-admin
npm run build
npm link
```

2. Create test project

```sh
npx create-react-app test-boss-admin
cd test-boss-admin
npm install -D typescript
npm install -D @types/react
npm install -D @types/react-dom
npm link 'react-boss-admin'
```

2. Link react

```sh
cd ../boss-admin/
npm link ../test-boss-admin/node_modules/react
```

3. Test

```sh
cd ../test-boss-admin/
npm start
```

```tsx
import { BossAdmin } from 'react-boss-admin'

...

    return (
        <BossAdmin />
    )
```

## Compatibility Table

- Check Node.js es compatibility
    https://node.green/
- Check Node.js previous version with compatible npm version
    https://nodejs.org/en/download/releases/
- Check currently supported node.js version
    https://nodejs.org/en/about/releases/
