function Footer() {
  return (
    <footer className="bg-navy text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-gold mb-4">
            🇧🇸 Bahamas Post Office
          </h2>
          <p className="text-gray-400 text-sm">
            Delivering The Bahamas, one package at a time. 
            Serving New Providence and the Family Islands.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-teal mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Track Package</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-teal mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📍 East Hill Street, Nassau</li>
            <li>📞 +1 242 397 3600</li>
            <li>✉️ bahamaspostoffice@bahamas.gov.bs</li>
            <li>🕐 Mon-Fri: 9am - 5pm</li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Bahamas Post Office. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;