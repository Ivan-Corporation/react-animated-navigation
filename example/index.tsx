import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KomaNavigation } from '../.';


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

ReactDOM.render(<App />, document.getElementById('root'));
