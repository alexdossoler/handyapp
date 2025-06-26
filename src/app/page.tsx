import Link from "next/link";
import Image from "next/image";
import { Phone, Star, CheckCircle, Users, Clock, Shield } from "lucide-react";
import Gallery from "@/components/Gallery";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        tabIndex={1}
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3" aria-label="AppyHandy logo - Home">
                <Image 
                  src="/logo-icon.svg" 
                  alt="AppyHandy Logo" 
                  className="w-10 h-10"
                  width={40}
                  height={40}
                  priority
                />
                <span className="text-2xl font-bold text-blue-600">AppyHandy</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8" role="menubar">
              <Link 
                href="#services" 
                className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
                role="menuitem"
                aria-label="Navigate to Services section"
              >
                Services
              </Link>
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
                role="menuitem"
                aria-label="Navigate to About section"
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
                role="menuitem"
                aria-label="Navigate to Contact section"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="tel:+18647433178"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Call AppyHandy at (864) 743-3178"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>(864) 743-3178</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main-content" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-blue-600 block">Handyman Services</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Quality home repairs and improvements you can trust. From small fixes to major projects, 
                we handle it all with expertise and care.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8" role="group" aria-label="Primary call-to-action buttons">
                <a
                  href="tel:+18647433178"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Call AppyHandy now at (864) 743-3178 for immediate assistance"
                >
                  Call Now: (864) 743-3178
                </a>
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors text-center font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Get a free quote from AppyHandy handyman services"
                >
                  Get Free Quote
                </a>
              </div>
              <div className="flex items-center space-x-6 mt-8" role="group" aria-label="Trust indicators">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400" role="img" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-gray-600" aria-label="5.0 out of 5 stars rating">5.0 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                  <span className="text-gray-600">Fully Insured</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl" aria-labelledby="stats-heading">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center" role="img" aria-label="AppyHandy company logo">
                    <div className="text-blue-600 text-4xl font-bold">AH</div>
                  </div>
                  <h3 id="stats-heading" className="text-2xl font-bold text-gray-900 mb-2">Ready to Help!</h3>
                  <p className="text-gray-600 mb-6">Professional handyman services for your home</p>
                  <div className="grid grid-cols-3 gap-4 text-center" role="group" aria-label="Company statistics">
                    <div>
                      <div className="text-2xl font-bold text-blue-600" aria-label="Over 100 completed projects">100+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600" aria-label="5 star average rating">5★</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">24h</div>
                      <div className="text-sm text-gray-600">Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From minor repairs to major installations, we provide comprehensive handyman services 
              to keep your home in perfect condition.
            </p>
          </header>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Available services">
            {services.map((service, index) => (
              <article key={index} className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2" role="listitem">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6" role="img" aria-label={`${service.title} icon`}>
                  <service.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2" role="list" aria-label={`${service.title} features`}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2" role="listitem">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 id="gallery-heading" className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects and see the quality workmanship we deliver.
            </p>
          </header>
          <Gallery />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 id="why-choose-heading" className="text-4xl font-bold text-gray-900 mb-4">Why Choose AppyHandy?</h2>
            <p className="text-xl text-gray-600">
              We&apos;re committed to providing exceptional service and quality workmanship
            </p>
          </header>
          
          <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Reasons to choose AppyHandy">
            <article className="text-center" role="listitem">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6" role="img" aria-label="Experienced team icon">
                <Users className="w-10 h-10 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experienced Team</h3>
              <p className="text-gray-600">
                Years of experience in home repairs and improvements with a track record of satisfied customers.
              </p>
            </article>
            
            <article className="text-center" role="listitem">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6" role="img" aria-label="Quick response icon">
                <Clock className="w-10 h-10 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600">
                Fast response times and flexible scheduling to accommodate your busy lifestyle.
              </p>
            </article>
            
            <article className="text-center" role="listitem">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6" role="img" aria-label="Licensed and insured icon">
                <Shield className="w-10 h-10 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed and insured for your peace of mind and protection.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="quote-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 id="quote-heading" className="text-4xl font-bold text-gray-900 mb-4">Request a Quote</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a free estimate for your project. Fill out the form below and we&apos;ll get back to you with a detailed quote.
            </p>
          </header>
          <QuoteForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 id="contact-heading" className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8" role="group" aria-label="Contact options">
              <a
                href="tel:+18647433178"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                aria-label="Call AppyHandy at (864) 743-3178"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call: (864) 743-3178</span>
              </a>
              <a
                href="sms:+18647433178"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                aria-label="Send text message to AppyHandy at (864) 743-3178"
              >
                Text Us
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Available 7 days a week • Quick response guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo" aria-label="Site footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/logo-icon.svg" 
                  alt="AppyHandy Logo" 
                  className="w-8 h-8"
                  width={32}
                  height={32}
                />
                <span className="text-2xl font-bold text-blue-400">AppyHandy</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional handyman services for all your home repair and improvement needs.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>(864) 743-3178</span>
              </div>
            </div>
            
            <nav aria-label="Footer services navigation">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400" role="list">
                <li><a href="#services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Plumbing Repairs</a></li>
                <li><a href="#services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Electrical Work</a></li>
                <li><a href="#services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Carpentry</a></li>
                <li><a href="#services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Home Maintenance</a></li>
                <li><a href="#services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Appliance Installation</a></li>
              </ul>
            </nav>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <address className="space-y-2 text-gray-400 not-italic">
                <p>Phone: <a href="tel:+18647433178" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">(864) 743-3178</a></p>
                <p>Available 7 days a week</p>
                <p>Licensed & Insured</p>
                <p>Free Estimates</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AppyHandy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button for Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <a
          href="tel:+18647433178"
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Call AppyHandy at (864) 743-3178"
        >
          <Phone className="w-6 h-6" aria-hidden="true" />
        </a>
      </div>
    </main>
  );
}

const services = [
  {
    title: "Plumbing Services",
    description: "Professional plumbing repairs and installations",
    icon: CheckCircle,
    features: [
      "Leak repairs",
      "Faucet installation", 
      "Toilet repairs",
      "Pipe maintenance"
    ]
  },
  {
    title: "Electrical Work",
    description: "Safe and reliable electrical services",
    icon: CheckCircle,
    features: [
      "Outlet installation",
      "Light fixture mounting",
      "Switch repairs", 
      "Safety inspections"
    ]
  },
  {
    title: "Carpentry & Repairs",
    description: "Quality woodwork and home repairs",
    icon: CheckCircle,
    features: [
      "Cabinet installation",
      "Door repairs",
      "Trim work",
      "Custom shelving"
    ]
  },
  {
    title: "Home Maintenance", 
    description: "Regular maintenance to keep your home in top shape",
    icon: CheckCircle,
    features: [
      "Gutter cleaning",
      "Pressure washing",
      "Caulking",
      "Minor repairs"
    ]
  },
  {
    title: "Appliance Services",
    description: "Installation and repair of home appliances", 
    icon: CheckCircle,
    features: [
      "Washer/dryer hookup",
      "Dishwasher installation",
      "TV mounting",
      "Smart home setup"
    ]
  },
  {
    title: "Painting & Finishing",
    description: "Interior and exterior painting services",
    icon: CheckCircle, 
    features: [
      "Interior painting",
      "Touch-up work",
      "Deck staining",
      "Drywall repair"
    ]
  }
];