import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { CrisisBanner } from './components/CrisisBanner';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { SurveyFindings } from './pages/SurveyFindings';
import { Resources } from './pages/Resources';
import { SupportDirectory } from './pages/SupportDirectory';
import { Emergency } from './pages/Emergency';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <a href="#main" className="skip-link label">
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey-findings" element={<SurveyFindings />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/support" element={<SupportDirectory />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CrisisBanner />
    </>
  );
}

export default App;
