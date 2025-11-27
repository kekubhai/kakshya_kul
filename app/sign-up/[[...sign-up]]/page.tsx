import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Create an account</h1>
          <p className="text-slate-600 mt-2">Start calculating your education ROI today</p>
        </div>
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-slate-900 hover:bg-slate-800 text-white',
              card: 'shadow-xl border border-slate-200',
              headerTitle: 'text-slate-900',
              headerSubtitle: 'text-slate-600',
              socialButtonsBlockButton: 'border-slate-200 hover:bg-slate-50',
              formFieldInput: 'border-slate-200 focus:border-slate-900 focus:ring-slate-900',
              footerActionLink: 'text-slate-900 hover:text-slate-700',
            }
          }}
        />
      </div>
    </div>
  )
}
