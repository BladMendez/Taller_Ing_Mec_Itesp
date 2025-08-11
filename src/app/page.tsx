export default function Home() {
  return (
    <main className="min-h-[80vh] grid place-items-center bg-gray-50">
      <section className="max-w-3xl w-full text-center space-y-4 p-8 bg-white rounded-2xl shadow">
        <h1 className="text-3xl font-bold">
          Sistema de Taller de Ingeniería Mecánica
        </h1>
        <p className="text-gray-600">
          Bienvenido. Aquí podrás gestionar el préstamo y control de herramientas.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <a href="/inventario" className="px-4 py-2 rounded-lg border">
            Inventario
          </a>
          <a href="/prestamos" className="px-4 py-2 rounded-lg bg-black text-white">
            Registrar préstamo
          </a>
          <a href="/calendario" className="px-4 py-2 rounded-lg border">
            Calendario
          </a>
        </div>
      </section>
    </main>
  );
}
