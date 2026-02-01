import { Helmet } from "react-helmet";
import { siteConfig } from "@/data/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | {siteConfig.name}</title>
      </Helmet>
      
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary text-gray-600">
          <h1>Privacy Policy</h1>
          <p className="lead">Your privacy is critically important to us. This policy outlines how {siteConfig.name} collects, uses, and protects your personal information.</p>
          
          <h2>Confidentiality</h2>
          <p>
            As a licensed mental health practice, we adhere to strict confidentiality standards mandated by HIPAA and state laws. 
            Information shared during sessions is confidential and will not be disclosed without your written consent, except in specific 
            situations required by law (e.g., imminent risk of harm to self or others).
          </p>

          <h2>Information Collection</h2>
          <p>
            We collect information you voluntarily provide via our contact forms, such as your name, email, and phone number. 
            This information is used solely to contact you regarding appointments or services.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement security measures to maintain the safety of your personal information. Our website uses SSL encryption 
            to protect data transmitted online.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at {siteConfig.email}.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
