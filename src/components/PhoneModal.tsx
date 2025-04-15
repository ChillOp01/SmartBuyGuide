import { X } from 'lucide-react';
import { Phone } from '../types';

interface PhoneModalProps {
  phone: Phone;
  onClose: () => void;
}

export function PhoneModal({ phone, onClose }: PhoneModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{phone.name}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src={phone.image} alt={phone.name} className="w-full rounded-lg" />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Available Stores</h3>
            <div className="space-y-3">
              {phone.stores.map((store) => (
                <a
                  key={store.name}
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{store.name}</span>
                    <span className="text-green-600 dark:text-green-400">{store.price}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Reviews</h3>
          <div className="space-y-4">
            {phone.reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{review.author}</span>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Video Reviews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {phone.videoReviews.map((video, index) => (
              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90"
              >
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-red-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium line-clamp-2">{video.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}