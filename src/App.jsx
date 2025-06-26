import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Toaster } from "@/components/ui/sonner"

import Container from './components/Container';
import Navbar from './components/Navbar'

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Blog = lazy(() => import('./pages/Blog'));
const Help = lazy(() => import('./pages/Help'));
const UrlDetails = lazy(() => import('./pages/Details'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

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
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
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
