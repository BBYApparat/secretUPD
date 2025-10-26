import Link from 'next/link'

export function JoinSection() {
  return (
    <section
      id="join"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-darker"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium mb-16 text-center">Join US</h2>
        <div className="max-w-4xl mx-auto">
          {/* Application Info */}
          <div className="mb-12 p-8 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
            <div className="flex items-center justify-center mb-6">
              <i className="ri-pencil-line text-2xl text-linear-accent mr-3"></i>
              <h3 className="text-2xl font-medium">Apply Now</h3>
            </div>
            <div className="flex justify-center">
              <code className="text-xl font-mono bg-linear-black/50 px-6 py-3 rounded-lg select-all">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScEYuqs2tbHLxXZLdhawbEmFhtNsA0dE7SN5dOc96KjKyf5-w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-linear-accent transition-colors"
                >
                  Click Here
                </a>
              </code>
            </div>
          </div>

          {/* Join Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://discord.gg/xtnSNTyjxd"
              target="_blank"
              rel="noopener noreferrer"
              className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <i className="ri-discord-line text-2xl text-linear-accent"></i>
              </div>
              <h3 className="text-xl font-medium mb-2 text-center">
                Join Discord
              </h3>
              <p className="text-linear-white/70 text-center">
                Connect with our community
              </p>
            </a>

            <Link
              href="#"
              className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <i className="ri-discuss-line text-2xl text-linear-accent"></i>
              </div>
              <h3 className="text-xl font-medium mb-2 text-center">
                Join Ingame
              </h3>
              <p className="text-linear-white/70 text-center">
                Get Ready To Play with us!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
