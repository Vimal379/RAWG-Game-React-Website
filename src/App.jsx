import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {
  // ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn,
} from '@clerk/clerk-react';

import Home from './Pages/Home';
import Header from './Components/Header';
import GameDetail from './Components/GameDetail';
import Bookmark from './Components/Bookmark';


const App = () => {
  return (
      <Router>
        <div className="min-vh-100">
          <Header />
          <Routes>
            {/* 👥 Public Auth Routes */}
            <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
            <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />

            {/* 🔐 Protected Routes (show ONLY if signed in) */}
            <Route
              path="/"
              element={
                <>
                  <SignedIn>
                    <Home />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />

            <Route
              path="/game-detail/:id"
              element={
                <>
                  <SignedIn>
                    <GameDetail />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />

            <Route
              path="/bookmark"
              element={
                <>
                  <SignedIn>
                    <Bookmark />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />

            {/* Catch-All: redirect unknown paths */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    
  );
};

export default App;
