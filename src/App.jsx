import { useEffect, useState } from "react";
import WhiteBoard from "./components/WhiteBoard";
import "./App.css";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Check user agent
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      const isMobileUA = mobileRegex.test(userAgent.toLowerCase());
      
      // Check screen size (tablets and small screens)
      const isSmallScreen = window.innerWidth < 1024;
      
      setIsMobile(isMobileUA || isSmallScreen);
    };

    checkDevice();
    
    // Re-check on window resize
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-warning">
        <div className="warning-content">
          <svg 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12" y2="18"></line>
          </svg>
          <h2>Desktop Only</h2>
          <p>This application requires a desktop device for the best experience.</p>
          <p>Minimum screen width: 1024px</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <WhiteBoard />
    </div>
  );
};

export default App;