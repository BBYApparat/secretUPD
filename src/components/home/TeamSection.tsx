import Link from 'next/link'
import Image from 'next/image'

export function TeamSection() {
  return (
    <section id="team" className="py-20 relative bg-linear-darker">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium mb-16 text-center">Our Team</h2>

        {/* Owner Section */}
        <div className="mb-16">
          <div className="max-w-lg mx-auto">
            <div className="clean-card p-8 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
              <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full relative">
                <Image
                  src="https://placehold.co/96x96"
                  alt="Chief Of Police"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2 text-center">
                David K. Marshall
              </h3>
              <p className="text-linear-white/70 mb-6 text-center">
                Chief Of Police / Head of IA
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="hover:text-linear-accent transition-colors"
                >
                  <i className="ri-discord-line text-xl"></i>
                </a>
                <Link
                  href="/chief"
                  className="hover:text-linear-accent transition-colors"
                >
                  <i className="ri-book-line text-xl"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full relative">
              <Image
                src="https://placehold.co/64x64"
                alt="Assistant Chief Of Police"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium mb-2 text-center">
              Jason S. Davenport
            </h3>
            <p className="text-linear-white/70 mb-4 text-center">
              Assistant Chief Of Police / Head of CID
            </p>
            <div className="flex justify-center space-x-3">
              <a href="" className="hover:text-linear-accent transition-colors">
                <i className="ri-discord-line"></i>
              </a>
              <Link
                href="/aschief"
                className="hover:text-linear-accent transition-colors"
              >
                <i className="ri-book-line"></i>
              </Link>
            </div>
          </div>

          <div className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full relative">
              <Image
                src="https://placehold.co/64x64"
                alt="Sheriff"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium mb-2 text-center">
              Oakley Neil Ceasar
            </h3>
            <p className="text-linear-white/70 mb-4 text-center">Sheriff</p>
            <div className="flex justify-center space-x-3">
              <a href="#" className="hover:text-linear-accent transition-colors">
                <i className="ri-discord-line"></i>
              </a>
              <Link
                href="/sheriff"
                className="hover:text-linear-accent transition-colors"
              >
                <i className="ri-book-line"></i>
              </Link>
            </div>
          </div>

          <div className="clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full relative">
              <Image
                src="https://placehold.co/64x64"
                alt="Commander"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium mb-2 text-center">
              Ronald Reagan
            </h3>
            <p className="text-linear-white/70 mb-4 text-center">
              Commander / Head of Patrol
            </p>
            <div className="flex justify-center space-x-3">
              <a href="#" className="hover:text-linear-accent transition-colors">
                <i className="ri-discord-line"></i>
              </a>
              <a href="#" className="hover:text-linear-accent transition-colors">
                <i className="ri-steam-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
