const Location = () => {
  return (
    <section className="max-w-[90%] mx-auto px-4 py-16">
      <div className="mb-12">
        <span className="text-[#4737FF] font-semibold mb-4 block">
          LOCATION
        </span>
        <h2 className="text-4xl font-bold flex items-center gap-2">
          <span role="img" aria-label="map" className="text-3xl">
            🗺️
          </span>
          <span>Our Library Location</span>
        </h2>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-lg">
        {/* Replace src with your actual Google Maps embed URL */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2834792865104!2d106.6892146!3d-6.2123933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14cf1a2a5e5%3A0x3e5e12ba0b5e3e0a!2sSMK%20Negeri%204%20Kota%20Tangerang!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
