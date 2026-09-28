import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, X } from 'lucide-react';
import {
  DISCOVERY_URL,
  explorerIndustries,
  explorerPriorities,
  softwareProducts,
  type SoftwareProduct,
} from '../data/softwareCatalog';

function eligible(product: SoftwareProduct, industry: string) {
  return industry === 'all' || product.industries.includes('all') || product.industries.includes(industry);
}

function covered(product: SoftwareProduct, priorities: string[]) {
  return priorities.filter((p) => product.tags.includes(p));
}

export default function SolutionExplorer() {
  const [industry, setIndustry] = useState('all');
  const [pains, setPains] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const [compare, setCompare] = useState<string[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return softwareProducts
      .filter((s) => eligible(s, industry))
      .filter((s) => {
        if (!q) return true;
        return [s.name, s.market, s.description, ...s.modules, ...s.pains].join(' ').toLowerCase().includes(q);
      })
      .sort((a, b) => {
        const ca = covered(a, pains).length;
        const cb = covered(b, pains).length;
        if (cb !== ca) return cb - ca;
        if (industry !== 'all') {
          const ia = Number(a.industries.includes(industry));
          const ib = Number(b.industries.includes(industry));
          if (ib !== ia) return ib - ia;
        }
        return Number(a.number) - Number(b.number);
      });
  }, [industry, pains, query]);

  const selected = compare
    .map((id) => softwareProducts.find((s) => s.id === id))
    .filter(Boolean) as SoftwareProduct[];

  const open = softwareProducts.find((s) => s.id === openId) || null;
  const industryLabel = explorerIndustries.find(([id]) => id === industry)?.[1] || 'All industries';

  const togglePain = (id: string) => {
    setPains((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
  };

  const toggleCompare = (id: string) => {
    setCompare((prev) => {
      if (prev.includes(id)) return prev.filter((p) => p !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const reset = () => {
    setIndustry('all');
    setPains([]);
    setQuery('');
  };

  return (
    <div id="explorer" className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <div className="px-6 md:px-8 py-6 border-b border-white/10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted mb-2">01 / Explore the library</p>
          <h3 className="font-sans text-2xl md:text-3xl font-medium text-white">Start with your customer.</h3>
          <p className="text-sm text-muted mt-2 max-w-xl">
            20 systems from the 2026 Master Library. Match by industry and priority, then compare up to three.
          </p>
        </div>
        <a
          href={DISCOVERY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300"
        >
          Open full Solution Explorer
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
        <aside className="border-b lg:border-b-0 lg:border-r border-white/10 p-6" aria-label="Customer context">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-white">Customer context</h4>
            <button type="button" onClick={reset} className="text-xs text-muted hover:text-white">Reset</button>
          </div>
          <label htmlFor="explorer-industry" className="block text-xs uppercase tracking-wider text-muted mb-2">Industry</label>
          <select
            id="explorer-industry"
            value={industry}
            onChange={(e) => { setIndustry(e.target.value); setPains([]); }}
            className="w-full mb-6 bg-black border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white"
          >
            <option value="all">All industries</option>
            {explorerIndustries.map(([id, label]) => (
              <option key={id} value={id}>{label}</option>
            ))}
          </select>
          <fieldset>
            <legend className="text-xs uppercase tracking-wider text-muted mb-2">What needs to improve?</legend>
            <div className="space-y-2">
              {explorerPriorities.map(([id, label]) => (
                <label key={id} className="flex items-start gap-2 text-sm text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pains.includes(id)}
                    onChange={() => togglePain(id)}
                    className="mt-1 accent-green-400"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </aside>

        <div className="p-6">
          <label className="flex items-center gap-2 bg-black border border-white/15 rounded-lg px-3 py-2.5 mb-5">
            <Search size={16} className="text-muted" aria-hidden="true" />
            <span className="sr-only">Search systems, modules or pain points</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search systems, modules or pain points…"
              className="w-full bg-transparent text-sm text-white outline-none"
            />
          </label>

          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-white" aria-live="polite">
              {results.length} {results.length === 1 ? 'solution' : 'solutions'}
              {industry === 'all' ? ' in the library' : ` for ${industryLabel.toLowerCase()}`}
            </p>
            <span className="text-xs text-muted">
              {pains.length ? 'Sorted by priority coverage' : industry === 'all' ? 'Library order' : 'Industry systems first'}
            </span>
          </div>

          {pains.length > 0 && results[0] && (
            <div className="mb-5 rounded-2xl border border-green-500/20 bg-green-500/5 p-4">
              <p className="text-[11px] uppercase tracking-wider text-green-400 mb-1">Recommended starting point</p>
              <h4 className="text-lg font-medium text-white">FS {results[0].name}</h4>
              <p className="text-sm text-gray-400 mt-1">
                Covers {covered(results[0], pains).length} of {pains.length} selected priorities
                {industry !== 'all' ? ` in your ${industryLabel.toLowerCase()} context` : ''}.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((s) => {
              const fit = covered(s, pains);
              const inCompare = compare.includes(s.id);
              return (
                <article key={s.id} className={`rounded-2xl border p-5 bg-black/40 ${inCompare ? 'border-green-400/50' : 'border-white/10'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] tracking-wider text-muted">FS / {s.number}</span>
                    <span className="text-[11px] text-gray-500">{s.market}</span>
                  </div>
                  {pains.length > 0 && (
                    <p className="text-xs text-green-400 mb-2">
                      {fit.length ? `${fit.length} of ${pains.length} priorities covered` : 'Complementary system'}
                    </p>
                  )}
                  <h4 className="text-base font-semibold text-white mb-2">{s.name}</h4>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-3">{s.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {s.modules.slice(0, 3).map((m) => (
                      <span key={m} className="px-2 py-0.5 text-[11px] rounded-full bg-white/5 text-gray-400">{m}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => setOpenId(s.id)} className="text-xs text-white/80 hover:text-white">
                      View solution ↗
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleCompare(s.id)}
                      aria-pressed={inCompare}
                      className={`ml-auto text-xs px-3 py-1.5 rounded-full border ${inCompare ? 'border-green-400 text-green-400' : 'border-white/20 text-gray-300'}`}
                    >
                      {inCompare ? 'Added' : 'Compare'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          {results.length === 0 && (
            <div className="text-center py-12">
              <h4 className="text-white mb-2">No systems found.</h4>
              <p className="text-sm text-muted mb-4">Try a different search or explore another industry.</p>
              <button type="button" onClick={() => { setQuery(''); reset(); }} className="text-sm text-green-400">Reset filters</button>
            </div>
          )}
        </div>
      </div>

      {selected.length > 0 && (
        <div className="border-t border-white/10 px-6 py-4 flex flex-col md:flex-row md:items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-muted">Shortlist {selected.length}/3</span>
          <div className="flex flex-wrap gap-2 flex-1">
            {selected.map((s) => (
              <span key={s.id} className="inline-flex items-center gap-2 text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white">
                {s.name}
                <button type="button" onClick={() => toggleCompare(s.id)} aria-label={`Remove ${s.name} from shortlist`}>
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
          <a
            href={DISCOVERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white text-black font-medium"
          >
            Continue in Solution Explorer
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm flex items-end md:items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="explorer-dialog-title"
          onClick={() => setOpenId(null)}
        >
          <div className="w-full max-w-lg rounded-2xl bg-[#111] border border-white/10 p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted mb-1">System {open.number} / {open.market}</p>
                <h4 id="explorer-dialog-title" className="text-xl font-medium text-white">FS {open.name}</h4>
              </div>
              <button type="button" onClick={() => setOpenId(null)} aria-label="Close dialog" className="text-muted hover:text-white text-2xl leading-none">×</button>
            </div>
            <p className="text-sm text-gray-300 mb-4">{open.description}</p>
            <p className="text-xs uppercase tracking-wider text-muted mb-2">Modules</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {open.modules.map((m) => (
                <span key={m} className="px-2 py-0.5 text-[11px] rounded-full bg-white/5 text-gray-300">{m}</span>
              ))}
            </div>
            {open.pains.length > 0 && (
              <>
                <p className="text-xs uppercase tracking-wider text-muted mb-2">Customer pains this system addresses</p>
                <ul className="text-sm text-gray-400 space-y-1 mb-5 list-disc list-inside">
                  {open.pains.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </>
            )}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => toggleCompare(open.id)}
                className="px-4 py-2 rounded-full border border-white/20 text-sm text-white"
              >
                {compare.includes(open.id) ? 'Remove from compare' : 'Add to compare'}
              </button>
              <a
                href={DISCOVERY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium inline-flex items-center gap-1"
              >
                Open in Discovery Portal <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
