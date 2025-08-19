import ContactHero from "../components/Contact/ContactHero";
import QuickContacts from "../components/Contact/QuickContacts";
import ContactInfo from "../components/Contact/ContactInfo";
import DepartmentContacts from "../components/Contact/DepartmentContacts";
import LocationMap from "../components/Contact/LocationMap";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <main className="pt-20">
      <ContactHero />
      <QuickContacts />
      <ContactInfo />
      <DepartmentContacts />
      <LocationMap />

      {/* form section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Send&nbsp;Us a&nbsp;
              <span className="text-emerald-600">Message</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Fill in the form below and we’ll be in touch shortly.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
