import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Code, Cpu, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Our courses cover a wide range of engineering disciplines, from software development to hardware design.",
    },
    {
      icon: GraduationCap,
      title: "Expert Instructors",
      description: "Learn from industry professionals and academic experts with years of experience.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a vibrant community of learners and collaborate on projects and discussions.",
    },
    {
      icon: Code,
      title: "Hands-On Projects",
      description: "Gain practical experience by working on real-world projects and case studies.",
    },
    {
      icon: Cpu,
      title: "Cutting-Edge Tools",
      description: "Access the latest tools and technologies used in the engineering industry.",
    },
    {
      icon: LineChart,
      title: "Career Guidance",
      description: "Get personalized career advice and job placement support.",
    },
  ];

  return (
    <div className="relative pt-16 pb-5 overflow-hidden bg-background md:pt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-400/20 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-indigo-500/20 to-transparent blur-3xl" />

      <div className="container relative px-4 mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <div className="inline-block px-3 py-1 text-sm font-medium text-blue-600 rounded-lg bg-blue-500/10 dark:text-blue-400">
            About Us
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
            Empowering the Next Generation of Engineers
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground md:text-xl">
            At our LMS portal, we are committed to providing high-quality engineering education that prepares students for the challenges of the modern world.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-blue-200/20 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/50 dark:to-transparent backdrop-blur">
                <CardContent className="p-6">
                  <Icon className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">{feature.title}</h3>
                  <p className="mt-2 text-blue-600/80 dark:text-blue-400/80">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
            Ready to Start Your Engineering Journey?
          </h2>
          <Button
            className="mt-6 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            size="lg"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;