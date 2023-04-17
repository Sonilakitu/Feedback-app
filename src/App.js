import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Card from "./components/shared/Card";
import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>
          <Card>
            <NavLink to="/" activeclassname="active">
              HOME
            </NavLink>

            <NavLink to="/about" activeclassname="active">
              About
            </NavLink>
          </Card>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import FeedbackList from "./components/FeedbackList";
// import FeedbackStats from "./components/FeedbackStats";
// import FeedbackForm from "./components/FeedbackForm";
// import AboutIconLink from "./components/AboutIconLink";
// import AboutPage from "./pages/AboutPage";
// import { FeedbackProvider } from "./context/FeedbackContext";

// function App() {
//   return (
//     <FeedbackProvider>
//       <Router>
//         <Header />
//         <div className="container">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <FeedbackForm />
//                   <FeedbackStats />
//                   <FeedbackList />
//                 </>
//               }
//             ></Route>

//             <Route path="/about" element={<AboutPage />} />
//           </Routes>

//           <AboutIconLink />
//         </div>
//       </Router>
//     </FeedbackProvider>
//   );
// }

// export default App;
