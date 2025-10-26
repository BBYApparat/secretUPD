import Link from 'next/link'
import Image from 'next/image'

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium mb-16 text-center">
          Our Divisions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-card bg-linear-dark rounded-lg overflow-hidden group">
            <div className="aspect-video relative">
              <Image
                src="https://i.ibb.co/kVz7sD62/R-T.png"
                alt="R&T Division"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-linear-dark to-transparent"></div>
            </div>
            <div className="p-6">
              <Link
                href="/departments/rt"
                target="_blank"
                className="block p-6 hover:text-linear-accent transition-colors"
              >
                <h3 className="text-2xl font-medium mb-2 group-hover:text-linear-accent transition-colors">
                  R&T Division
                </h3>
                <p className="text-linear-white/70">
                  Εκπαίδευση νέων μελών και συνεχή κατάρτιση του προσωπικού.
                </p>
              </Link>
            </div>
          </div>

          <div className="feature-card bg-linear-dark rounded-lg overflow-hidden group">
            <div className="aspect-video relative">
              <Image
                src="https://i.ibb.co/F4GJhspX/New-Project-5.png"
                alt="Social Affairs"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-linear-dark to-transparent"></div>
            </div>
            <div className="p-6">
              <Link
                href="/departments/saf"
                target="_blank"
                className="block p-6 hover:text-linear-accent transition-colors"
              >
                <h3 className="text-2xl font-medium mb-2 group-hover:text-linear-accent transition-colors">
                  Social Affairs
                </h3>
                <p className="text-linear-white/70">
                  Το Social Affairs Division είναι η «καρδιά» της επικοινωνίας
                  και της σύνδεσης του Unified Police Department με την κοινότητα
                  του Secret Roleplay. Η αποστολή του τμήματος είναι να ενισχύει
                  τη σχέση μεταξύ πολιτών και αστυνομίας, να προάγει τη διαφάνεια
                  και να διασφαλίζει πως κάθε φωνή ακούγεται.
                </p>
              </Link>
            </div>
          </div>

          <div className="feature-card bg-linear-dark rounded-lg overflow-hidden group">
            <div className="aspect-video relative">
              <Image
                src="https://i.ibb.co/1f2mMLbn/CID.png"
                alt="CID Division"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-linear-dark to-transparent"></div>
            </div>
            <Link
              href="/departments/cid"
              target="_blank"
              className="block p-6 hover:text-linear-accent transition-colors"
            >
              <h3 className="text-2xl font-medium mb-2">
                CID - Detective Bureau Division
              </h3>
              <p className="text-linear-white/70">
                Το Criminal Investigation Division αποτελεί την κορυφαία
                ερευνητική μονάδα του Unified Police Department στο Secret
                Roleplay. Η αποστολή του CID είναι η ανάλυση, έρευνα και επίλυση
                σοβαρών εγκληματικών υποθέσεων, με επαγγελματισμό, στρατηγική
                σκέψη και απόλυτη αφοσίωση στη δικαιοσύνη.
              </p>
            </Link>
          </div>

          <div className="feature-card bg-linear-dark rounded-lg overflow-hidden group">
            <div className="aspect-video relative">
              <Image
                src="https://i.ibb.co/5Xk9ggBj/New-Project-4.png"
                alt="HSPU & MBU"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-linear-dark to-transparent"></div>
            </div>
            <Link
              href="/departments/hspu"
              target="_blank"
              className="block p-6 hover:text-linear-accent transition-colors"
            >
              <h3 className="text-2xl font-medium mb-2 group-hover:text-linear-accent transition-colors">
                HSPU & MBU Division
              </h3>
              <p className="text-linear-white/70">
                Το High Speed Pursuit Unit (HSPU) και το Motorbike Unit (MBU)
                αποτελούν τις ταχύτερες και πιο ευέλικτες δυνάμεις του Unified
                Police Department. Είναι οι πρώτοι που φτάνουν στο σημείο, οι
                τελευταίοι που εγκαταλείπουν και εκείνοι που δεν αφήνουν ποτέ
                έναν ύποπτο να ξεφύγει.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
