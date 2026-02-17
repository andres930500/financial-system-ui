function App() {
  return (
    // 'bg-ucaldas-blue' debe pintar el fondo del azul oscuro de tus mockups
    <div className="min-h-screen flex flex-col items-center justify-center bg-ucaldas-blue p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">¡SAPFIAI Conectado!</h1>
        <p className="text-gray-600 mb-6">
          Si ves este botón dorado y el fondo azul, Tailwind está funcionando correctamente.
        </p>

        {/* 'bg-ucaldas-gold' debe ser el color dorado de tus diseños */}
        <button className="bg-ucaldas-gold hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
          Prueba de Estilo
        </button>
      </div>
    </div>
  );
}

export default App;
