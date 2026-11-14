import Link from 'next/link';

export function Footer() {
  return <footer className="site-footer"><div className="site-footer__inner"><div className="site-footer__grid">
    <div><h3>HU&apos;U Beach Front</h3><p>A modern tropical sanctuary on Gili Trawangan. Hotel information, rates, and contact details are being finalized by the hotel team.</p></div>
    <div><h4>Explore</h4><Link href="/about-us">About Us</Link><Link href="/rooms">Rooms &amp; Suites</Link><Link href="/dining">Dining &amp; Bar</Link><Link href="/dining#facilities">Facilities</Link></div>
    <div><h4>Contact &amp; Location</h4><p>Official address and contact details will be published here once confirmed by the hotel.</p><Link href="/contact">Contact the hotel</Link></div>
    <div><h4>Newsletter</h4><p>Seasonal island updates and direct booking news.</p><Link href="/contact">Join the interest list</Link></div>
  </div><div className="site-footer__bottom"><span>© 2026 HU&apos;U Beach Front Hotel. Information subject to confirmation.</span><span>Privacy Policy · Terms &amp; Conditions</span></div></div></footer>;
}
