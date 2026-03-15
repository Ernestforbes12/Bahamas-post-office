import { useState } from 'react';

function Calculator() {
  const [weight, setWeight] = useState('');
  const [destination, setDestination] = useState('local');
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    const rate = destination === 'local' ? 2.50 : 8.00;
    const total = (parseFloat(weight) * rate).toFixed(2);
    setPrice(total);
  };

  return (
    <section className="bg-navy py-16 px-6">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Rate Calculator
      </h1>
      <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg">
        
        {/* Weight Input */}
        <label className="block text-navy font-semibold mb-2">
          Weight (lbs)
        </label>
        <input
          type="number"
          placeholder="Enter weight..."
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 outline-none"
        />

        {/* Destination Select */}
        <label className="block text-navy font-semibold mb-2">
          Destination
        </label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 outline-none"
        >
          <option value="local">Local (Bahamas)</option>
          <option value="international">International</option>
        </select>

        {/* Calculate Button */}
        <button
          onClick={calculatePrice}
          className="w-full bg-teal text-white font-bold py-3 rounded-full"
        >
          Calculate
        </button>

        {/* Result */}
        {price && (
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">Estimated Cost</p>
            <p className="text-4xl font-bold text-navy">${price}</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Calculator;