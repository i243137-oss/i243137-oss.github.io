import React, { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <header className="p-5 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Umair Hassan</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      <main className="p-6 space-y-10">
        <section id="about">
          <h2 className="text-3xl font-bold mb-2">About</h2>
          <p>I am Umair Hassan, a passionate developer with interests in Web Development and Machine Learning.</p>
        </section>

        <section id="projects">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <ul className="list-disc list-inside">
            <li>Portfolio Website</li>
            <li>Soil Sensor Dashboard</li>
          </ul>
        </section>

        <section id="skills">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <p>React, TailwindCSS, Python, ML, GitHub</p>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <p>Email: umair@example.com</p>
        </section>
      </main>
    </div>
  );
}
