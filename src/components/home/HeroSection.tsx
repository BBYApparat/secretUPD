import Link from 'next/link'

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative hero-bg"
    >
      <div className="mx-auto px-8 py-22 max-w-3xl text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-medium mb-8 clean-text leading-tight">
          Secret Roleplay
          <span className="block text-linear-accent text-6xl md:text-7xl">
            Unified Police Department
          </span>
        </h1>
        <p className="text-lg text-linear-white/80 typing-text max-w-2xl mx-auto leading-relaxed">
          Η υπηρεσία μας στοχεύει να δημιουργήσει ένα ρεαλιστικό και δυναμικό
          περιβάλλον για όλους τους παίκτες, όπου κάθε μέλος της αστυνομίας
          καλείται να ενεργεί με{' '}
          <strong>σεβασμό, πειθαρχία και ομαδικότητα</strong>.<br />
          Είτε πρόκειται για περιπολία στους δρόμους, είτε για μεγάλες
          επιχειρήσεις, είτε για έρευνες και συλλήψεις, το{' '}
          <strong>SR-UPD είναι πάντα στην πρώτη γραμμή</strong>.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="#join"
            className="px-6 py-2.5 bg-linear-accent hover:bg-linear-accent-light text-sm font-medium tracking-wide transition-colors"
          >
            Join Us
          </Link>
          <Link
            href="#about"
            className="px-6 py-2.5 border border-linear-gray-lighter hover:bg-linear-gray text-sm font-medium tracking-wide transition-colors"
          >
            Learn More
          </Link>
          <Link
            href="/officer-portal"
            className="px-6 py-2.5 bg-linear-blue hover:bg-linear-blue-light text-white text-sm font-medium tracking-wide transition-colors flex items-center gap-2"
          >
            <i className="ri-shield-user-line"></i> Officer Portal
          </Link>
        </div>
      </div>
    </section>
  )
}
