import { Helmet } from "react-helmet";
import { siteConfig } from "@/data/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";

export default function InsuranceFees() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Insurance & Fees | {siteConfig.name}</title>
      </Helmet>
      
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">Investment in Yourself</h1>
            <p className="text-xl text-muted-foreground">
              Transparent pricing and insurance information to help you plan your care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Standard Rates */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-6">Session Rates</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="font-medium text-lg">Individual Therapy (50 min)</span>
                  <span className="font-bold text-lg text-foreground">{siteConfig.insurance.fees.individual}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="font-medium text-lg">Couples Counseling (50 min)</span>
                  <span className="font-bold text-lg text-foreground">{siteConfig.insurance.fees.couples}</span>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground italic">
                    * {siteConfig.insurance.fees.slidingScale}
                  </p>
                </div>
              </div>
            </div>

            {/* Insurance */}
            <div className="bg-secondary/10 rounded-2xl p-8 border border-secondary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">Insurance Accepted</h2>
              <p className="text-muted-foreground mb-6">
                We are in-network with the following providers. For out-of-network plans, we can provide a superbill for reimbursement.
              </p>
              <ul className="space-y-3">
                {siteConfig.insurance.accepted.map((provider) => (
                  <li key={provider} className="flex items-center text-foreground font-medium">
                    <div className="bg-white rounded-full p-1 mr-3 text-secondary shadow-sm">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {provider}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Questions about coverage?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Navigating insurance can be confusing. Our team is happy to verify your benefits before your first appointment so there are no surprises.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-md"
            >
              Contact Us for Verification
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
