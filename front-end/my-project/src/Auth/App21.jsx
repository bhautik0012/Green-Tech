import React from "react";
import { AuthProvider } from "./AuthContext"; // Import AuthProvider instead of AuthContext

function App21() {
  return (
    <AuthProvider> {/* Use AuthProvider to wrap your components */}
      {/* Your application components go here */}
      <div>Your application content</div>
    </AuthProvider>
  );
}

export default App21;