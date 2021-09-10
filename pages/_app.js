import { Provider } from "react-redux";
import store from '../redux/store';
import Layout from '../Layouts/HomeLayout';

import '../styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      )

}

export default App
