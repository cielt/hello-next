import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  const timestamp = new Date().toLocaleString();
  console.log('layout rendered');

  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          <p>Page rendered on {timestamp}</p>        
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
