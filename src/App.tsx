import React from 'react';

import useWindowSize from './Hooks/useWindowSize';

import Homepage from './components/Homepage';
import GlobalStyles from './styles/GlobalStyles';
import HomepageMobile from './components/Mobile/HomepageMobile';

function App() {
  const width = useWindowSize();
  if (width > 900) {
    return (
      <>
        <Homepage />
        <GlobalStyles />
      </>
    );
  } else {
    return (
      <>
        <HomepageMobile />
        <GlobalStyles />
      </>
    )
  }

}

export default App;
