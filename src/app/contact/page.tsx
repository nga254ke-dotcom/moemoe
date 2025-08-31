
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { ScrollAnimation } from '@/components/scroll-animation';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with MoeMoe Enterprises. Contact us for quotes, questions, or service inquiries in Atlanta. Call, email, or visit our office in Tucker, GA.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container max-w-7xl text-center">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
              We're here to help. Reach out to us with any questions or to get started with our services.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold font-headline">Get in Touch Directly</h2>
                  <p className="mt-2 text-muted-foreground">Find us at our office, give us a call, or send an email.</p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      Our Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>MoeMoe Enterprises LLC</p>
                    <p>4936 Presidents Way #206, Tucker, GA 30084</p>
                  </CardContent>
                </Card>
                <div className="grid sm:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Phone className="h-6 w-6 text-primary" />
                        Phone
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="tel:404-375-9495" className="text-muted-foreground hover:text-primary">
                        (404) 375-9495
                      </a>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Mail className="h-6 w-6 text-primary" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="mailto:info@moemoeenterprise.com" className="text-muted-foreground hover:text-primary break-all">
                        info@moemoeenterprise.com
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div>
                  <h2 className="text-3xl font-bold font-headline">Send Us a Message</h2>
                  <p className="mt-2 text-muted-foreground">
                    Have a question or need a custom quote? Fill out the form below.
                    For a detailed service quote, please use our <Link href="/quote" className="text-primary underline">quote request form</Link>.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
