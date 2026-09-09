import './globals.css';
import Link from 'next/link';
export const metadata={title:'Koperasi Sumber Makmur',description:'Katalog koperasi berbasis Next.js dan MariaDB'};
export default function RootLayout({children}:{children:React.ReactNode}){return <div className="paper surface-grid"><header className="nav"><div className="container nav-inner"><Link href="/" className="brand"><span className="brand-mark">SM</span><span>Koperasi Sumber Makmur</span></Link><nav className="nav-links"><Link href="/">Beranda</Link><Link href="/catalog">Katalog</Link><Link href="/admin">Admin</Link></nav></div></header>{children}</div>}
