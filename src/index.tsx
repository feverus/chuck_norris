import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react'
import Main from '~Components/main';
import searchDataStore from '~Store/searchDataStore'

import  './index.module.scss'

const stores = {
  searchDataStore,
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider {...stores}>
    <Main />
  </Provider>
)