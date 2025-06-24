import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Toaster } from "@/components/ui/sonner"

import Container from './components/Container';
import Navbar from './components/navbar/Navbar'

const Home = lazy(() => import('./pages/Home/App'));
const Dashboard = lazy(() => import('./pages/Dashboard/App'));
const Pricing = lazy(() => import('./pages/Pricing/App'));
const Blog = lazy(() => import('./pages/Blog/App'));
const Help = lazy(() => import('./pages/Help/App'));
const UrlDetails = lazy(() => import('./pages/Details/App'));

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Toaster richColors />
          <Navbar />

          <Container className="flex-grow">
            <Suspense fallback={<div className="text-center mt-10"></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/help" element={<Help />} />
                <Route path="/details/:shortId" element={<UrlDetails />} />
              </Routes>
            </Suspense>
          </Container>
        </div>
      </Router>
    </>
  )
}

export default App
