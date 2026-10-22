import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SHŌKA Prints — Made personal', description: 'Custom DTF and sublimation prints on apparel, mugs, gifts and more in Hyderabad.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
