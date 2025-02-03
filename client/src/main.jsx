import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './assets/scss/style.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./scroll-to-top.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ScrollToTop>
      <Provider store={store}>
        <ToastContainer
          theme="dark"
        />
        <App />
      </Provider>
    </ScrollToTop>
  </Router>
);