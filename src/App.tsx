import { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:scale-110 transition-all active:scale-95"
          aria-label="Toggle Theme"
        >
          {darkMode ? (
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-8 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM14 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM6 10a1 1 0 011-1h1a1 1 0 110 2H7a1 1 0 01-1-1zM12 10a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      {/* Header / Hero Section */}
      <header className={`relative overflow-hidden border-b pt-16 pb-24 lg:pt-24 lg:pb-32 transition-colors duration-300 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-50 transition-colors duration-300 ${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'}`} />
          <div className={`absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-50 transition-colors duration-300 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 border transition-colors duration-300 ${darkMode ? 'bg-indigo-900/30 text-indigo-400 border-indigo-800' : 'bg-indigo-50 text-indigo-600 border-indigo-100'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Modern CSS Preprocessing
          </div>
          <h1 className={`text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">SCSS</span>
          </h1>
          <p className={`max-w-2xl mx-auto text-lg lg:text-xl mb-10 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Sassy CSS (SCSS) is a powerful preprocessor that extends CSS with features like variables, 
            nesting, and mixins, making your stylesheets more maintainable and scalable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#features" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 w-full sm:w-auto">
              Explore Features
            </a>
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer" className={`px-8 py-3 font-semibold rounded-lg border transition-all w-full sm:w-auto ${darkMode ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}>
              Official Docs
            </a>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="transition-colors duration-300">
              <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>What is SCSS?</h2>
              <p className={`text-lg mb-4 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                SCSS is the most popular syntax of Sass. It is a superset of CSS, meaning every valid CSS file is also a valid SCSS file. 
                It allows you to use programming logic in your styles.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                By adding structural power to CSS, SCSS helps developers organize their code, avoid repetition, and manage 
                complex themes with ease.
              </p>
              <ul className="space-y-3">
                {['Faster development workflow', 'Better code organization', 'Dynamic style generation', 'Modular architecture'].map((item) => (
                  <li key={item} className={`flex items-center gap-3 font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 rounded-2xl p-1 shadow-2xl">
              <div className="bg-slate-800 rounded-t-xl p-3 flex gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-indigo-300">
                  <code>{`/* SCSS Example */
$primary-color: #4f46e5;

.nav-bar {
  background: $primary-color;
  padding: 1rem;

  ul {
    list-style: none;
    display: flex;
    
    li {
      margin-right: 10px;
      a { color: white; }
    }
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Core Power Features</h2>
            <p className={`max-w-2xl mx-auto transition-colors duration-300 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Unlock the full potential of your styling workflow with these essential SCSS capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Variables */}
            <div className={`p-8 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Variables</h3>
              <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Store colors, fonts, or any CSS value and reuse them throughout your project.</p>
              <div className="bg-slate-900 rounded-lg p-4 text-xs font-mono text-indigo-300">
                <code>{`$brand: #6366f1;
$spacing: 20px;

.btn {
  color: $brand;
  margin: $spacing;
}`}</code>
              </div>
            </div>

            {/* Nesting */}
            <div className={`p-8 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 0a1 1 0 011 1v10a1 1 0 01-1 1h-3" /></svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Nesting</h3>
              <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Write cleaner, more intuitive selectors by nesting child elements inside parents.</p>
              <div className="bg-slate-900 rounded-lg p-4 text-xs font-mono text-indigo-300">
                <code>{`.card {
  padding: 20px;
  .title {
    font-weight: bold;
  }
  .content {
    font-size: 14px;
  }
}`}</code>
              </div>
            </div>

            {/* Mixins */}
            <div className={`p-8 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Mixins</h3>
              <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Create reusable blocks of styles that can be injected into multiple selectors.</p>
              <div className="bg-slate-900 rounded-lg p-4 text-xs font-mono text-indigo-300">
                <code>{`@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}`}</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 text-slate-400 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 border-slate-800'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="mb-4">Built with React & Tailwind CSS 4</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Github</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
          <p className="mt-8 text-xs opacity-50">
            © {new Date().getFullYear()} SCSS Learning Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
