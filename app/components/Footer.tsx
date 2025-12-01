import Link from 'next/link'
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'ROI Calculator', href: '/roi-calculator' },
    { name: 'College Comparison', href: '/college-comparison' },
    { name: 'Career Insights', href: '/career-insights' },
    { name: 'Scholarship Finder', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
}

const socialLinks = [
  { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold text-zinc-900 tracking-tight">
                Kakshya<span className="text-emerald-500">KUL</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-xs">
              Empowering Indian students with data-driven insights for smarter educational investments.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-emerald-50 flex items-center justify-center text-zinc-500 hover:text-emerald-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} KakshyaKUL. All rights reserved.
          </p>
          <p className="text-sm text-zinc-400">
            Made with ❤️ for Indian Students
          </p>
        </div>
      </div>
    </footer>
  )
}
