import React, { useEffect, useRef } from 'react';

const WebGLCanvas = ({ width = 500, height = 500, driverScript, mathScript }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const setupWebGL = async () => {
      const canvas = canvasRef.current;

      // Get WebGL2 context
      const gl = canvas.getContext('webgl2');
      if (!gl) {
        console.error('WebGL2 is not supported by your browser.');
        return;
      }
      console.log('WebGL context successfully initialized:', gl);
      const loadScript = (src) =>
        new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });

      try {
        // Dynamically load driver and math scripts
        await loadScript(mathScript); // Load math.js
        await loadScript(driverScript); // Load driver.js
      } catch (err) {
        console.error('Failed to load scripts:', err);
        return;
      }

      // Call the global `setup` function
      if (typeof window.setup === 'function') {
        window.setup();
      } else {
        console.error('Global setup function is not defined in driver.js');
      }
    };

    setupWebGL();

    // Cleanup function
    return () => {
      // Any cleanup logic if necessary
    };
  }, [driverScript, mathScript]);

  return <canvas ref={canvasRef} width={width} height={height} style={{ background: 'black' }} />;
};

export default WebGLCanvas;
