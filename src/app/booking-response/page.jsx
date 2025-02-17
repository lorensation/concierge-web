'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BookingResponse() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState({ loading: true, success: false, message: '' });

  useEffect(() => {
    const action = searchParams.get('action');
    const message = action === 'accepted' 
      ? 'The meeting has been successfully confirmed.'
      : 'The meeting has been rejected.';

    setStatus({ loading: false, success: true, message });
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        {status.loading ? (
          <div className="text-center">
            <p>Processing...</p>
          </div>
        ) : (
          <div className="text-center">
            <div className={`mb-4 text-6xl ${status.success ? 'text-green-500' : 'text-red-500'}`}>
              {status.success ? '✓' : '✗'}
            </div>
            <h1 className="text-2xl font-bold mb-4">Booking Response</h1>
            <p className="text-gray-600">{status.message}</p>
          </div>
        )}
      </div>
    </div>
  );
} 