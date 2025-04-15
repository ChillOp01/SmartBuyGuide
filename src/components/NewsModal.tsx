import { X } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsModalProps {
  news: NewsItem;
  onClose: () => void;
}

export function NewsModal({ news, onClose }: NewsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{news.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-[400px] object-cover rounded-xl mb-6"
          />
          
          <div className="space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Published on {new Date(news.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {news.summary}
            </p>
            
            <div className="prose dark:prose-invert max-w-none">
              {/* This would be replaced with actual content from the API */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h3>Key Features</h3>
              <ul>
                <li>Advanced AI capabilities</li>
                <li>Improved camera system</li>
                <li>Enhanced performance</li>
                <li>Better battery life</li>
              </ul>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}