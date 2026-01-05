export default function Contact() {
  const email = 'Eventus.estates@outlook.com';

  return (
    <section id="contact" className="mx-auto my-16 max-w-6xl px-6">
      <h1 className="mb-10 text-center text-4xl font-bold text-[#162E52]">
        Contact <span className="text-yellow-400">Eventus Estates</span>
      </h1>

      <div className="grid gap-10 md:grid-cols-2">
        {/* BUYERS */}
        <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-[#162E52]">Looking to Buy or Invest?</h2>

          <p className="mb-6 text-sm text-[#162E52]/80">
            If you’re searching for a business, investment opportunity, or commercial property, get in touch and we’ll help you find the right opportunity.
          </p>

          <a
            href={`mailto:${email}?subject=${encodeURIComponent('Buyer Enquiry')}`}
            className="inline-block rounded bg-[#162E52] px-6 py-3 font-semibold text-white transition hover:bg-yellow-400 hover:text-[#162E52]"
          >
            Contact as a Buyer
          </a>
        </div>

        {/* SELLERS */}
        <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-[#162E52]">Looking to Sell?</h2>

          <p className="mb-6 text-sm text-[#162E52]/80">
            Thinking of selling your business or property? We offer confidential, professional marketing and access to serious buyers.
          </p>

          <a
            href={`mailto:${email}?subject=${encodeURIComponent('Seller Enquiry')}`}
            className="inline-block rounded bg-yellow-400 px-6 py-3 font-semibold text-[#162E52] transition hover:bg-[#162E52] hover:text-white"
          >
            Contact as a Seller
          </a>
        </div>
      </div>
    </section>
  );
}