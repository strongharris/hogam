import React, { useState } from 'react';
import { TigerLogo } from './components/InkIcons';
import { LandingPage } from './pages/LandingPage';
import { DesignSystem } from './pages/DesignSystem';
import { Button } from './components/ui/button';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'design-system'>('landing');

  return (
    <>
      {/* Global Navigation wrapper to switch pages for development */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-soft rounded-full px-2 py-2 flex items-center gap-2 pointer-events-auto">
           <Button 
             variant={currentPage === 'landing' ? 'default' : 'ghost'} 
             size="sm"
             onClick={() => setCurrentPage('landing')}
           >
             Home
           </Button>
           <div className="w-px h-4 bg-gray-300"></div>
           <Button 
             variant={currentPage === 'design-system' ? 'default' : 'ghost'} 
             size="sm"
             onClick={() => setCurrentPage('design-system')}
           >
             Design System
           </Button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-0">
        {currentPage === 'landing' ? <LandingPage /> : <DesignSystem />}
      </div>
    </>
  );
}

export default App;