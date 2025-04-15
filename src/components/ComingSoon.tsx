import { Scale } from 'lucide-react';

export function ComingSoon() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Scale className="w-24 h-24 text-blue-500" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Phone Comparison Coming Soon
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          We're working hard to bring you the most comprehensive phone comparison tool. Stay tuned!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-8 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </a>
          <button
            className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-xl hover:bg-blue-500/10 transition-colors"
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}