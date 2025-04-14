import Router from "@/router";
import { useAuth } from "@/hooks/useAuth";

const AppContent = () => {
  const { state } = useAuth();
  if (state.isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  return <Router />;
};

export default AppContent;
