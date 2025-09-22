import Link from 'next/link';

export default function Navbar() {
    return (
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><a href="/projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="/about" className="hover:text-gray-400">About</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  