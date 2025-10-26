import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-8 border-t border-linear-gray-lighter relative group">
      <div className="container mx-auto px-4 text-center">
        <p className="text-linear-white/70">
          &copy; 2025 Secret Roleplay - UPD. All rights reserved.
        </p>

        {/* Disclaimer */}
        <p className="mt-4 text-sm text-linear-white/60">
          <strong>Disclaimer:</strong> Το παρόν website αφορά αποκλειστικά την
          αστυνομική υπηρεσία του Roleplay Server «Secret». Οποιαδήποτε αναφορά
          ή ομοιότητα με πραγματικές αστυνομικές αρχές είναι καθαρά συμπτωματική
          και δεν συνιστά επίσημη σύνδεση ή εκπροσώπηση αυτών.
        </p>

        <div className="mt-4 text-sm">
          <span className="text-linear-white/50">Template by</span>
          <a
            href=""
            target="_blank"
            rel="noopener"
            className="inline-flex items-center text-linear-accent hover:text-linear-accent-light transition-colors ml-2"
          >
            FourTwentyDevs - CLB Designs 💖
            <i className="ri-external-link-line ml-1"></i>
          </a>
        </div>

        {/* Hidden Internal Affairs Link */}
        <div className="mt-6">
          <Link
            href="/departments/ia"
            target="_blank"
            className="inline-flex items-center gap-1 text-xs text-linear-white/0 opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:text-linear-accent group-hover:pointer-events-auto"
          >
            <i className="ri-shield-user-line"></i>
            Internal Affairs
          </Link>
        </div>
      </div>
    </footer>
  )
}
