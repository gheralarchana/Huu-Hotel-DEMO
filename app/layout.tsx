import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Layout } from '@/components/Layout';

const display = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });

export const metadata: Metadata = {
  title: "HU'U Beach Front Hotel | Gili Trawangan",
  description: "A modern tropical sanctuary on Gili Trawangan, Lombok.",
  metadataBase: new URL('https://huu-beach-front-hotel.vercel.app')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${sans.variable}`}><body><Layout>{children}</Layout></body></html>;
}
