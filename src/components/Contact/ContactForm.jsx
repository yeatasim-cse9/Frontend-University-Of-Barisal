import { useEffect, useRef, useState } from "react";
import { contactFormFields } from "../../data/dummyData";
import { Send, CheckCircle, X } from "lucide-react";

function Modal({ open, title = "Message Sent", onClose, children }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-success-title"
    >
      {/* backdrop */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
      />

      {/* dialog */}
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-100">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h3
              id="contact-success-title"
              className="text-lg font-semibold text-gray-900"
            >
              {title}
            </h3>
            <button
              ref={closeRef}
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-gray-100"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="px-5 pt-5 pb-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
              <div className="text-sm text-gray-700">{children}</div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-2">
              <button
                onClick={onClose}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [data, setData] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      // reset form values
      formRef.current?.reset();
      setData({});
    }, 1200);
  };

  return (
    <>
      {/* Success Modal */}
      <Modal
        open={sent}
        onClose={() => setSent(false)}
        title="Thanks! Your message was sent."
      >
        <p>
          We\'ve received your enquiry and will get back to you within{" "}
          <span className="font-medium">24 hours</span>.
        </p>
        {data?.name || data?.email || data?.subject ? (
          <div className="mt-3 text-gray-700">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              Summary
            </p>
            <ul className="text-sm space-y-1">
              {data?.name && (
                <li>
                  <span className="text-gray-500">Name:</span> {data.name}
                </li>
              )}
              {data?.email && (
                <li>
                  <span className="text-gray-500">Email:</span> {data.email}
                </li>
              )}
              {data?.subject && (
                <li>
                  <span className="text-gray-500">Subject:</span> {data.subject}
                </li>
              )}
            </ul>
          </div>
        ) : null}
      </Modal>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6"
      >
        {contactFormFields.map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} className="block text-sm font-medium mb-2">
              {f.label}
              {f.required && <span className="text-red-500">*</span>}
            </label>

            {f.type === "textarea" ? (
              <textarea
                id={f.name}
                rows={5}
                name={f.name}
                required={f.required}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            ) : f.type === "select" ? (
              <select
                id={f.name}
                name={f.name}
                required={f.required}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select {f.label}</option>
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={f.name}
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
    </>
  );
}
