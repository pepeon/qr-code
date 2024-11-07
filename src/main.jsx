import { Layout } from './Layout'
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Layout/>
  </BrowserRouter>
)
