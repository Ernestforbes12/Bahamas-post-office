function Contact() {
  return (
    <section className="bg-navy py-16 px-6">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Get In Touch 📬
      </h1>
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
        
        {/* Name Input */}
        <label className="block text-navy font-semibold mb-2">Full Name</label>
        <input
          type="text"
          placeholder="Enter your name..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 outline-none"
        />

        {/* Email Input */}
        <label className="block text-navy font-semibold mb-2">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 outline-none"
        />

        {/* Message Input */}
        <label className="block text-navy font-semibold mb-2">Message</label>
        <textarea
          placeholder="Write your message..."
          rows="5"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 outline-none resize-none"
        />

        {/* Submit Button */}
        <button className="w-full bg-teal text-white font-bold py-3 rounded-full">
          Send Message
        </button>

      </div>
    </section>
  );
}

export default Contact;