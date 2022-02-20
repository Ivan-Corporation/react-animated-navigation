[![NPM](https://img.shields.io/npm/v/react-animated-navigation.svg)](https://www.npmjs.com/package/react-animated-navigation)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![NPM](https://img.shields.io/npm/l/react-animated-navigation)
![npm](https://img.shields.io/npm/dm/react-animated-navigation)
![GitHub stars](https://img.shields.io/github/stars/Ivan-Corporation/github-react-animated-navigation?style=social)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-animated-navigation)


# Beauty animated navigation menu for ```react```

### This beauty navigation menu can help you made improve your static site with another layout and animate navigation links





## Example:
---

<img src='./menu-nav.gif'>

### Check demo here:
### https://komolio.netlify.app/

---

## Install:
```bash
npm i react-animated-navigation
---
yarn add react-animated-navigation
```

## Usage:
```jsx
// don't forget change props
import { KomaNavigation } from 'react-animated-navigation';


const App = () => {
  return (
    <div>
      <KomaNavigation

        link1='/'
        title1='Main'

        link2='/history'
        title2='History'

        link3='/projects'
        title3='Projects'

        link4='/form'
        title4='Form'

      />
    </div>
  );
};
```

---
## Props:

### They are limited for responsive solution (all be good in mobile too)

| props  | required | default  | description |
| ------------- | ------------- | ------------- | ------------- |
| link1(string)| yes | - | link to something |
| title1(string) | yes | - | name of the link |
| link2(string)| yes | - | link to something |
| title2(string) | yes | - | name of the link |
| link3(string)| yes | - | link to something |
| title3(string) | yes | - | name of the link |
| link4(string)| yes | - | link to something |
| title4(string) | yes | - | name of the link |
