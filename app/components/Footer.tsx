export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">KAKSHYA-KUL</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Empowering students with data-driven insights for smarter educational investments.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="/roi-calculator" className="hover:text-slate-900 transition-colors">ROI Calculator</a></li>
              <li><a href="/college-comparison" className="hover:text-slate-900 transition-colors">College Comparison</a></li>
              <li><a href="/career-insights" className="hover:text-slate-900 transition-colors">Career Insights</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Instagram</a></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Kakshya-KUL. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
