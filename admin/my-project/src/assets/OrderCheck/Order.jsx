import React from 'react'
import Head1 from '../showdata/Head1'
import Check from './Check'

function Order() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50">
      <Head1 />
      <div className="animate-fade-in-up">
        <Check />
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 500ms ease-out; }
      `}</style>
    </div>
  )
}

export default Order