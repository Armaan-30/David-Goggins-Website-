import type { Metadata } from 'next';
import './globals.css';
import './hero-portrait.css';
import FluidLines from './fluid-lines';
export const metadata: Metadata = { title: 'GOGGINS — THE GRIND', description: 'An independent editorial tribute to David Goggins. Endurance. Discipline. Mindset. Unofficial fan-made concept.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}<FluidLines/></body></html>; }
