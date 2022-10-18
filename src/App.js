import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './pages/routes';
import LoginLayout from './Layout/LoginLayout';
// import './index.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {privateRoutes.map((route, index) => {
                        let Layout = LoginLayout;
                        if (route.Layout) {
                            Layout = route.Layout;
                            if (Layout === null) {
                                Layout = Fragment;
                            }
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <route.component />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}
export default App;
