import { useState } from "react";
import { contactFormFields } from "../../data/dummyData";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [data, setData] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 3500);
    }, 1500);
  };

  if (sent) {
    return (
      <div className="bg-green-50 p-10 rounded-3xl border border-green-200 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-green-700 mb-2">
          Message&nbsp;Sent
        </h3>
        <p className="text-green-600">We’ll reply within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6"
    >
      {contactFormFields.map((f) => (
        <div key={f.name}>
          <label className="block text-sm font-medium mb-2">
            {f.label}
            {f.required && <span className="text-red-500">*</span>}
          </label>

          {f.type === "textarea" ? (
            <textarea
              rows={5}
              name={f.name}
              required={f.required}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          ) : f.type === "select" ? (
            <select
              name={f.name}
              required={f.required}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select {f.label}</option>
              {f.options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          ) : (
            <input
              type={f.type}
              name={f.name}
              required={f.required}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:opacity-60"
      >
        {loading ? (
          <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
        ) : (
          <Send className="w-5 h-5" />
        )}
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
