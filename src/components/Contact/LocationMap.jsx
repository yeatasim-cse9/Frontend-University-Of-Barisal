export default function LocationMap() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Find&nbsp;Us on the&nbsp;Map
        </h2>

        <div className="overflow-hidden rounded-3xl shadow-lg border border-blue-100">
          <iframe
            title="University of Barishal"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58441.2441536686!2d90.30343674377476!3d22.701096359357455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375070196b1dfccf%3A0x411bd26a9a4a42a1!2sUniversity%20of%20Barishal!5e0!3m2!1sen!2sbd!4v1679428557980!5m2!1sen!2sbd"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
