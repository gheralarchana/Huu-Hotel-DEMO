'use client';

import { FormEvent, useState } from 'react';

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <form className="info-card form-grid" onSubmit={submit}><label>Check-in<input required type="date" /></label><label>Check-out<input required type="date" /></label><label>Guests<select defaultValue="2"><option value="2">2 Adults</option><option value="3">2 Adults, 1 Child</option><option value="4">4 Adults</option></select></label><label>Room type<select defaultValue="all"><option value="all">All accommodations</option><option value="ocean">Oceanfront</option><option value="pool">Pool access</option></select></label><div className="full form-actions"><button className="site-button" type="submit">Check availability</button>{submitted && <span className="form-message">Availability request captured for the hotel booking system.</span>}</div></form>;
}
