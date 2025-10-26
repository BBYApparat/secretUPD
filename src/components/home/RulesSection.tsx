export function RulesSection() {
  return (
    <section id="rules" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium mb-16 text-center">UPD Rules</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
              <div className="flex items-center mb-6">
                <i className="ri-shield-check-line text-xl text-linear-accent mr-3"></i>
                <h3 className="text-xl font-medium">General Rules</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start text-linear-white/70">
                  <i className="ri-checkbox-circle-line text-linear-accent mr-3 mt-1"></i>
                  <span>Σεβασμός στην Ιεραρχία</span>
                </li>
                <li className="flex items-start text-linear-white/70">
                  <i className="ri-checkbox-circle-line text-linear-accent mr-3 mt-1"></i>
                  <span>Επαγγελματική Συμπεριφορά</span>
                </li>
                <li className="flex items-start text-linear-white/70">
                  <i className="ri-checkbox-circle-line text-linear-accent mr-3 mt-1"></i>
                  <span>Καθαρή Επικοινωνία στο Radio</span>
                </li>
                <li className="flex items-start text-linear-white/70">
                  <i className="ri-checkbox-circle-line text-linear-accent mr-3 mt-1"></i>
                  <span>Σεβασμός στους Πολίτες</span>
                </li>
              </ul>
            </div>

            <div className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
              <div className="flex items-center mb-6">
                <i className="ri-user-voice-line text-xl text-linear-accent mr-3"></i>
                <h3 className="text-xl font-medium">Patrol Rules</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start text-linear-white/70">
                  <i className="ri-checkbox-circle-line text-linear-accent mr-3 mt-1"></i>
                  <span>Πάντα με Partner (αν είναι διαθέσιμος)</span>
                </li>
                <li className="flex items-start text-linear-white/70">
                  <i className="ri-checkbox-circle-line text-linear-accent mr-3 mt-1"></i>
                  <span>Σωστή Οδήγηση</span>
                </li>
                <li className="flex items-start text-linear-white/70">
                  <i className="ri-checkbox-circle-line text-linear-accent mr-3 mt-1"></i>
                  <span>Χρήση Φάρων & Σειρήνας</span>
                </li>
                <li className="flex items-start text-linear-white/70">
                  <i className="ri-checkbox-circle-line text-linear-accent mr-3 mt-1"></i>
                  <span>Αλληλοϋποστήριξη</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
