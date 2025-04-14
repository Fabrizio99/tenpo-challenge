import AppContent from "./AppContent";
import { AuthProvider } from "@/context/auth/Provider";
import { UserProvider } from "@/context/user/Provider";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
