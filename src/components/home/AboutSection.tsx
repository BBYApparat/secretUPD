export function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-linear-darker">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium mb-16 text-center">
          Γιατί να μας επιλέξεις
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
            <i className="ri-star-line text-2xl text-linear-accent mb-4"></i>
            <h3 className="text-xl font-medium mb-3">Unique Experience</h3>
            <p className="text-linear-white/70">
              Στο Secret Roleplay Unified Police Department, κάθε στιγμή είναι
              μια μοναδική εμπειρία που συνδυάζει ρεαλισμό, ένταση και ομαδικό
              πνεύμα. Από τις απλές περιπολίες μέχρι τις πιο απαιτητικές
              επιχειρήσεις, κάθε δράση μετράει — κάθε απόφαση έχει σημασία.
            </p>
          </div>
          <div className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
            <i className="ri-team-line text-2xl text-linear-accent mb-4"></i>
            <h3 className="text-xl font-medium mb-3">Active Community</h3>
            <p className="text-linear-white/70">
              Η κοινότητά μας είναι πάντα ενεργή και φιλόξενη, με μέλη που
              βοηθούν, μοιράζονται εμπειρίες και δίνουν ζωή σε κάθε στιγμή του
              server. Είτε είσαι νέος παίκτης είτε έμπειρος roleplayer, εδώ θα
              βρεις μια ομάδα ανθρώπων που αγαπά αυτό που κάνει.
            </p>
          </div>
          <div className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
            <i className="ri-shield-check-line text-2xl text-linear-accent mb-4"></i>
            <h3 className="text-xl font-medium mb-3">Why to Join</h3>
            <p className="text-linear-white/70">
              Επιλέγοντας το SR-UPD, γίνεσαι μέρος μιας ομάδας με κύρος και
              όραμα. Προσφέρουμε:
            </p>
            <ul className="text-linear-white/70 mt-2 space-y-1">
              <li>Πλήρες σύστημα ιεραρχίας και βαθμολογίας.</li>
              <li>Εκπαίδευση από έμπειρα στελέχη Roleplay.</li>
              <li>Συνεχή ευκαιρία εξέλιξης και ανάληψης ευθυνών.</li>
              <li>
                Ένα υποστηρικτικό και ενεργό περιβάλλον με έμφαση στον ρεαλισμό
                και τη συνεργασία.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
