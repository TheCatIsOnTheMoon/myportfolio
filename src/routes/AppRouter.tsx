import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from '../layout/Footer/Footer';
import Header from '../layout/Header/Header';
import Error from '../layout/Error/Error';
import Home from '../layout/Home/Home';

function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRouter;
