import { useMemo, useEffect, useRef, useState } from "react";

// Default placeholder image (company logo) served from public root
const DEFAULT_IMAGE = '/IMG_0142_logo.jpeg';

function normalizeImagePath(p) {
  if (!p) return DEFAULT_IMAGE;
  if (p.startsWith('/')) return p;
  // strip leading images/ if user provided that path
  const cleaned = p.replace(/^images\//, '');
  return `/${cleaned}`;
}

const sampleItems = [
  {
    id: 'coventry-refitted',
    title: 'Newly Refitted Off-Licence – Coventry',
    type: 'Commercial',
    price: 'Rent: £950 pcm (Ground Floor)',
    sales: '',
    location: 'Coventry',
    tenure: 'Leasehold',
    image: 'images/IMG_1410.jpeg',
    images: ['images/IMG_1410.jpeg'],
    short: 'Newly refitted off-licence in a busy, well-established area.',
    details: `An exciting opportunity to take over a newly refitted off-licence situated in a busy and well-established area of Coventry.

Key Features:
• Newly refitted and ready to trade
• Spacious layout with modern fittings
• Large car park and easy access
• Low rent: £950 per month
• Strong growth potential`
  },
  {
    id: 'birmingham-leasehold',
    title: 'Leasehold Off-Licence for Sale – Birmingham',
    type: 'Commercial',
    price: 'Leasehold',
    sales: 'Weekly Sales: £5,000',
    location: 'Birmingham',
    tenure: 'Leasehold',
    image: DEFAULT_IMAGE,
    images: [],
    short: 'Well-established off-licence with strong weekly sales and no competition.',
    details: `Weekly sales of approximately £5,000 with no local competition.

Short opening hours provide scope to increase turnover.

Key Features:
• Weekly sales: £5,000
• No competition nearby
• Ample parking
• Potential to franchise`
  },
  {
    id: 'derby-off-licence',
    title: 'Off-Licence for Sale – Derby',
    type: 'Commercial',
    price: 'Rent: £660 pcm',
    sales: 'Weekly Sales: £4,000',
    location: 'Derby',
    tenure: 'Leasehold',
    image: DEFAULT_IMAGE,
    images: [],
    short: 'Low-rent off-licence with steady takings.',
    details: `Steady weekly takings of £4,000 with very low rent.

Key Features:
• Weekly sales: £4,000
• Rent: £660 pcm
• Parking available
• Growth potential`
  },
  {
    id: 'reading-freehold',
    title: 'Freehold Off-Licence for Sale – Reading',
    type: 'Commercial / Freehold',
    price: 'Freehold',
    sales: 'Weekly Sales: £5,000',
    location: 'Reading',
    tenure: 'Freehold',
    image: DEFAULT_IMAGE,
    images: [],
    short: 'Rare freehold off-licence opportunity.',
    details: `Freehold off-licence with steady weekly sales.

Key Features:
• Freehold
• Weekly sales: £5,000
• No competition
• Parking available`
  },
  {
    id: 'ipswich-franchise',
    title: 'Franchise Convenience Store – Ipswich',
    type: 'Franchise Convenience',
    price: 'Contact for price',
    sales: 'Weekly Sales: £19,000–£20,000',
    location: 'Ipswich',
    tenure: 'Franchise',
    image: DEFAULT_IMAGE,
    images: [],
    short: 'High-performing franchise store.',
    details: `Prime location franchise with strong footfall.

Key Features:
• Weekly sales: £19,000–£20,000
• No immediate competition
• Strong franchise support`
  },
  {
    id: 'chesterfield-convenience',
    title: 'Convenience Store with Accommodation – Chesterfield',
    type: 'Leasehold Convenience',
    price: 'Rent: £1,000 pcm',
    sales: 'Weekly Sales: £7,000',
    location: 'Chesterfield',
    tenure: 'Leasehold',
    image: DEFAULT_IMAGE,
    images: [],
    short: 'Store with 3-bed accommodation included.',
    details: `Weekly sales of £7,000 with residential accommodation.

Key Features:
• Weekly sales: £7,000
• 3-bedroom flat included
• High-demand location`
  }
];

export default function Properties({ items = [] }) {
  const allListings = useMemo(() => (items.length ? items : sampleItems), [items]);
  const [listings, setListings] = useState(allListings);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const originalOverflow = useRef('');

  // Manage body overflow when modal is open
  useEffect(() => {
    originalOverflow.current = typeof document !== 'undefined' ? document.body.style.overflow : '';
    return () => {
      if (typeof document !== 'undefined') document.body.style.overflow = originalOverflow.current;
    };
  }, []);

  useEffect(() => {
    if (selected && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    } else if (typeof document !== 'undefined') {
      document.body.style.overflow = originalOverflow.current || '';
    }
  }, [selected]);

  // Keyboard handlers: Escape to close, arrows to cycle images
  useEffect(() => {
    function handleKeydown(e) {
      if (!selected) return;
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    }

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [selected]);

  function openDetails(item) {
    setSelected(item);
    setActiveImageIndex(0);
  }

  function closeDetails() {
    setSelected(null);
  }

  function nextImage() {
    if (!selected?.images?.length) return;
    setActiveImageIndex((i) => (i + 1) % selected.images.length);
  }

  function prevImage() {
    if (!selected?.images?.length) return;
    setActiveImageIndex((i) => (i - 1 + selected.images.length) % selected.images.length);
  }

  // Keep listings in sync if `items` prop changes
  useEffect(() => setListings(allListings), [allListings]);

  function handleFilter() {
    const q = query.trim().toLowerCase();
    if (!q) {
      setListings(allListings);
      return;
    }
    // Filter only by `location` (city)
    setListings(allListings.filter((item) => (item.location || '').toLowerCase().includes(q)));
  }

  return (
    <section id="properties" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">Available Properties</h2>
          <p className="mt-2 text-gray-400 max-w-2xl mx-auto">Browse curated listings below.</p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <input
              type="search"
              placeholder="Search by city"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleFilter(); }}
              className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <button onClick={handleFilter} className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full">Filter</button>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((item) => {
            const src = item.image ? normalizeImagePath(item.image) : DEFAULT_IMAGE;
            return (
              <article key={item.id} className="group flex flex-col rounded-xl bg-white/5 p-4 shadow transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative mb-3 overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={item.title}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.src = DEFAULT_IMAGE }}
                  />
                </div>

                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500">{item.title}</h3>

                <p className="text-sm text-gray-300">{item.short}</p>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-sm font-semibold text-yellow-500">{item.price}</span>

                  <button
                    className="inline-flex h-9 w-28 items-center justify-center rounded-md bg-[#162E52] text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-[#162E52]"
                    onClick={() => openDetails(item)}
                  >
                    View details
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={closeDetails}
        >
          <div className="relative w-full max-w-3xl rounded-xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 relative">
              <img
                src={selected.images?.[activeImageIndex] ? normalizeImagePath(selected.images[activeImageIndex]) : DEFAULT_IMAGE}
                alt={selected?.title || 'Property image'}
                className="mb-4 h-64 w-full rounded-lg object-cover"
                onError={(e) => { e.currentTarget.src = DEFAULT_IMAGE }}
              />

              {selected.images?.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2">‹</button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2">›</button>
                </>
              )}
            </div>

            <h2 className="text-2xl font-bold text-[#162E52]">{selected.title}</h2>

            <p className="mt-3 whitespace-pre-line text-sm text-[#162E52]/90">{selected.details}</p>

            <div className="mt-6 rounded-lg border bg-[#F9FAFB] p-4">
              <h3 className="mb-2 font-semibold text-[#162E52]">Enquire about this property</h3>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contact"
                  onClick={() => closeDetails()}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#162E52] px-6 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-[#162E52]"
                >
                  Contact us
                </a>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="rounded border px-5 py-2 text-sm text-[#162E52] transition hover:bg-[#162E52] hover:text-white"
                onClick={closeDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}