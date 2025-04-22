export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 flex flex-col items-center justify-center text-white">
      {/* Logo et Titre */}
      <div className="text-center">
        <img
          src="/orion-logo.png"
          alt="Orion Logo"
          className="w-32 h-32 mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold tracking-tight">
          Bienvenue sur Orion Template
        </h1>
        <p className="mt-4 text-xl opacity-80 max-w-md mx-auto">
          Un template moderne avec Next.js, Tailwind CSS et Supabase, conçu pour booster vos projets web.
        </p>
      </div>

      {/* Call-to-Action */}
      <div className="mt-8">
        <a
          href="https://github.com/bk2024b/orion-next-template"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-blue-950 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Découvrir le Template
        </a>
      </div>
    </div>
  );
}
