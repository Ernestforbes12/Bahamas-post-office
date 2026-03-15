function Locations() {
  const branches = [
    {
      name: "General Post Office",
      address: "East Hill Street, Nassau, New Providence",
      phone: "+1 242 397 3600",
      hours: "Mon-Fri: 9am - 5pm"
    },
    {
      name: "Shirley Street Post Office",
      address: "Shirley Street, Nassau, New Providence",
      phone: "+1 242 322 3344",
      hours: "Mon-Fri: 9am - 5pm"
    },
    {
      name: "Sandy Port Post Office",
      address: "Sandy Port, Nassau, New Providence",
      phone: "+1 242 327 1552",
      hours: "Mon-Fri: 9am - 5pm"
    },
    {
      name: "Freeport Post Office",
      address: "Explorer's Way, Freeport, Grand Bahama",
      phone: "+1 242 352 9371",
      hours: "Mon-Fri: 9am - 5pm"
    },
    {
      name: "Marsh Harbour Post Office",
      address: "Marsh Harbour, Abaco",
      phone: "+1 242 367 2571",
      hours: "Mon-Fri: 9am - 5pm"
    },
    {
      name: "Governor's Harbour Post Office",
      address: "Governor's Harbour, Eleuthera",
      phone: "+1 242 332 2060",
      hours: "Mon-Fri: 9am - 5pm"
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-navy text-center mb-12">
        Find a Branch 📍
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {branches.map((branch, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-navy mb-2">{branch.name}</h3>
            <p className="text-gray-500 text-sm mb-1">📍 {branch.address}</p>
            <p className="text-gray-500 text-sm mb-1">📞 {branch.phone}</p>
            <p className="text-gray-500 text-sm">🕐 {branch.hours}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Locations;