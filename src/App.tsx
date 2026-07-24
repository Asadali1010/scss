export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header / Hero Section */}
      <header className="relative overflow-hidden bg-white border-b border-slate-200 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6 border border-indigo-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Modern CSS Preprocessing
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">SCSS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed">
            Sassy CSS (SCSS) is a powerful preprocessor that extends CSS with features like variables, 
            nesting, and mixins, making your stylesheets more maintainable and scalable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#features" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 w-full sm:w-auto">
              Explore Features
            </a>
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-all w-full sm:w-auto">
              Official Docs
            </a>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What is SCSS?</h2>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                SCSS is the most popular syntax of Sass. It is a superset of CSS, meaning every valid CSS file is also a valid SCSS file. 
                It allows you to use programming logic in your styles.
              </p>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                By adding structural power to CSS, SCSS helps developers organize their code, avoid repetition, and manage 
                complex themes with ease.
              </p>
              <ul className="space-y-3">
                {['Faster development workflow', 'Better code organization', 'Dynamic style generation', 'Modular architecture'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
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
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Core Power Features</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Unlock the full potential of your styling workflow with these essential SCSS capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Variables */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Variables</h3>
              <p className="text-slate-600 mb-6">Store colors, fonts, or any CSS value and reuse them throughout your project.</p>
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
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 0a1 1 0 011 1v10a1 1 0 01-1 1h-3" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Nesting</h3>
              <p className="text-slate-600 mb-6">Write cleaner, more intuitive selectors by nesting child elements inside parents.</p>
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
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Mixins</h3>
              <p className="text-slate-600 mb-6">Create reusable blocks of styles that can be injected into multiple selectors.</p>
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
      <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
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
