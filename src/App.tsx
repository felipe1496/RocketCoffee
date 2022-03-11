import React, { createContext, useState } from 'react';

import useWindowSize from './Hooks/useWindowSize';

import Homepage from './components/Homepage';
import GlobalStyles from './styles/GlobalStyles';
import HomepageMobile from './components/Mobile/HomepageMobile';
import { findAllByDisplayValue } from '@testing-library/react';

type SideBarIsOpen = {
  value: boolean;
  setValue: (isOpen: boolean) => void;
}

export const SideBarIsOpenContext = createContext({} as SideBarIsOpen);

function App() {
  const [value, setValue] = useState(false);

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
        <SideBarIsOpenContext.Provider value={{ value, setValue }}>
          <HomepageMobile />
          <GlobalStyles />
        </SideBarIsOpenContext.Provider>
      </>
    )
  }

}

export default App;
