export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  