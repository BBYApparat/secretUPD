import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Social Affairs Division - SR UPD',
  description: 'Social Affairs Division of the Unified Police Department',
}

export default function SAFPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-linear-darker via-linear-dark to-linear-black px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 clean-text">
              <span className="text-linear-accent">Social Affairs</span> Division
            </h1>
            <p className="text-lg md:text-xl text-linear-white/80 mb-12 max-w-3xl mx-auto">
              Το Social Affairs Division είναι η «καρδιά» της επικοινωνίας και της
              σύνδεσης του Unified Police Department με την κοινότητα του Secret
              Roleplay. Η αποστολή του τμήματος είναι να ενισχύει τη σχέση μεταξύ
              πολιτών και αστυνομίας, να προάγει τη διαφάνεια και να διασφαλίζει πως
              κάθε φωνή ακούγεται.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
                <i className="ri-team-line text-4xl text-linear-accent mb-4"></i>
                <h3 className="text-xl font-medium mb-3">Κοινοτική Σχέση</h3>
                <p className="text-linear-white/70">
                  Δημιουργία δεσμών εμπιστοσύνης με τους πολίτες μέσω διαλόγου και
                  συνεργασίας.
                </p>
              </div>
              <div className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
                <i className="ri-chat-smile-3-line text-4xl text-linear-accent mb-4"></i>
                <h3 className="text-xl font-medium mb-3">Διαφάνεια</h3>
                <p className="text-linear-white/70">
                  Προώθηση της διαφάνειας στις δράσεις της αστυνομίας και λογοδοσία
                  στην κοινότητα.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
