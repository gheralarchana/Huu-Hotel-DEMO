import Image from 'next/image';
import { PageIntro } from '@/components/PageIntro';
import { SiteCard } from '@/components/SiteCard';

const diningImage = 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=88';
const poolImage = 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=88';
const oceanImage = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=88';
const bicycleImage = 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1200&q=88';

export default function Facilities() {
  return <>
    <PageIntro eyebrow="Dining, Bar & Island Leisure" title="Everything you need for an unhurried island stay." description="A single guide to the coastal dining, restorative facilities, and island experiences presented in the HU'U design concept." />
    <section className="content-wrap">
      <div className="contact-grid items-center">
        <div>
          <span className="eyebrow">The Shoreline Culinary Sanctuary</span>
          <h2>Al fresco dining under island skies.</h2>
          <p>Authentic Indonesian flavors meet Mediterranean coastal dining in a relaxed beachfront setting. Final menus, opening hours, and booking details will be confirmed by the hotel.</p>
          <div className="info-card mt-8"><h3>Signature dining</h3><p>Daily fresh catch, island breakfast, sunset aperitivo, and romantic beachfront dining are presented as concept highlights.</p></div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src={diningImage} alt="Elegant beachfront dining table with tropical cuisine" fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" /></div>
      </div>
      <div className="info-grid mt-12"><SiteCard title="Beachfront dining" icon="⌁">Taste the island in a relaxed setting close to the shore.</SiteCard><SiteCard title="Daily fresh catch" icon="◌">Local seafood and coastal ingredients when available.</SiteCard><SiteCard title="Sunset vistas" icon="✦">Slow evenings with expansive ocean views.</SiteCard></div>
    </section>
    <section id="facilities" className="content-wrap bg-surface-low max-w-none">
      <div className="mx-auto max-w-7xl"><span className="eyebrow">Seaside Indulgence</span><h2>Facilities for an unforgettable island escape.</h2><p className="max-w-2xl">Explore the core experiences presented in the HU&apos;U concept. Final operational details remain subject to hotel confirmation.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <article className="info-card overflow-hidden p-0 md:col-span-2"><div className="relative aspect-[16/8]"><Image src={poolImage} alt="Tropical infinity pool overlooking the ocean" fill sizes="(max-width: 900px) 100vw, 66vw" className="object-cover" /></div><div className="p-7"><h3>Infinity Horizon Pool</h3><p>Fresh-water relaxation with uninterrupted views over the Lombok Strait.</p></div></article>
          <article className="info-card overflow-hidden p-0"><div className="relative aspect-square"><Image src={oceanImage} alt="Snorkeling in clear tropical ocean water" fill sizes="(max-width: 900px) 100vw, 33vw" className="object-cover" /></div><div className="p-6"><h3>Marine Sanctuary</h3><p>Placeholder for confirmed reef and snorkeling guidance.</p></div></article>
          <article className="info-card overflow-hidden p-0"><div className="relative aspect-[4/3]"><Image src={bicycleImage} alt="Bicycle ready for an island ride" fill sizes="(max-width: 900px) 100vw, 33vw" className="object-cover" /></div><div className="p-6"><h3>Island Cruiser Bicycles</h3><p>Placeholder for confirmed bicycle access and island routes.</p></div></article>
          <SiteCard title="Oceanfront wellness" icon="⌁">Placeholder for confirmed spa and wellness treatments.</SiteCard><SiteCard title="High-speed Wi-Fi" icon="↗">Placeholder for confirmed connectivity details.</SiteCard>
        </div>
      </div>
    </section>
  </>;
}
