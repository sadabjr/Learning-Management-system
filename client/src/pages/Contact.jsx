import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="relative pt-16 pb-2 overflow-hidden bg-background md:pt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-400/20 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-indigo-500/20 to-transparent blur-3xl" />

      <div className="container relative px-4 mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <div className="inline-block px-3 py-1 text-sm font-medium text-blue-600 rounded-lg bg-blue-500/10 dark:text-blue-400">
            Contact Us
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground md:text-xl">
            We d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
          </p>
        </div>

        {/* Contact Form and Information */}
        <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-blue-200/20 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/50 dark:to-transparent backdrop-blur">
            <CardContent className="p-6">
              <h2 className="mb-6 text-2xl font-semibold text-blue-900 dark:text-blue-100">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-600/80 dark:text-blue-400/80">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="border-blue-200/20 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-600/80 dark:text-blue-400/80">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border-blue-200/20 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-600/80 dark:text-blue-400/80">
                    Message
                  </label>
                  <Textarea
                    placeholder="Enter your message"
                    className="border-blue-200/20 focus:ring-blue-500"
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-blue-200/20 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/50 dark:to-transparent backdrop-blur">
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-semibold text-blue-900 dark:text-blue-100">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-lg font-medium text-blue-900 dark:text-blue-100">
                        Email
                      </p>
                      <p className="text-blue-600/80 dark:text-blue-400/80">
                        support@engineershub.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-lg font-medium text-blue-900 dark:text-blue-100">
                        Phone
                      </p>
                      <p className="text-blue-600/80 dark:text-blue-400/80">
                        +1 (123) 456-7890
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-lg font-medium text-blue-900 dark:text-blue-100">
                        Address
                      </p>
                      <p className="text-blue-600/80 dark:text-blue-400/80">
                        123 Tech Street, Silicon Valley, CA 94025
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-blue-200/20 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/50 dark:to-transparent backdrop-blur">
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-semibold text-blue-900 dark:text-blue-100">
                  Our Location
                </h2>
                <div className="w-full overflow-hidden rounded-lg aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.332538530907!2d-122.08624658469222!3d37.42206597984625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633023222539!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;