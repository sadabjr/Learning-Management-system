import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  BookOpen,
  GraduationCap,
  Users,
  ArrowRight,
  Code,
  Cpu,
  LineChart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  const stats = [
    { icon: Code, label: "Tech Courses", value: "500+" },
    { icon: Cpu, label: "Live Projects", value: "200+" },
    { icon: LineChart, label: "Job Placement", value: "92%" },
  ];

  return (
    <div className="relative pt-16 overflow-hidden bg-background md:pt-24">
      {/* Advanced Gradient Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-400/20 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-indigo-500/20 to-transparent blur-3xl" />

      <div className="container relative px-4 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 text-sm font-medium text-blue-600 rounded-lg bg-blue-500/10 dark:text-blue-400">
                Engineering Excellence
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                Master Advanced Engineering & Technology
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Join the elite community of tech innovators. Learn cutting-edge
                engineering skills with hands-on projects and industry-standard
                tools.
              </p>
            </div>

            {/* Enhanced Search Bar */}
            <div className="flex items-center w-full max-w-sm space-x-2">
              <form action="" className="flex">
                <div className="relative flex-1">
                  <Search className="absolute w-4 h-4 text-blue-500 -translate-y-1/2 left-3 top-1/2" />
                  <Input
                    type="text"
                    placeholder="Search technical courses..."
                    className="pl-10 pr-4 border-blue-200 dark:border-blue-800 focus:ring-blue-500"
                  />
                </div>
                <Button className="text-white bg-blue-600 hover:bg-blue-700">
                  Search
                </Button>
              </form>
            </div>

            {/* Tech-Focused Stats Cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="border-blue-200/20 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/50 dark:to-transparent backdrop-blur"
                  >
                    <CardContent className="flex flex-col items-center p-4">
                      <Icon className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
                      <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                        {stat.value}
                      </div>
                      <div className="text-sm text-blue-600/80 dark:text-blue-400/80">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Content - Technical Course Preview */}
          <div className="relative hidden lg:block">
            {/* Enhanced Decorative Elements */}
            <div className="absolute -translate-y-1/2 rounded-full -right-4 top-1/2 h-72 w-72 bg-blue-500/20 blur-3xl" />
            <div className="absolute w-48 h-48 rounded-full -left-4 top-1/4 bg-indigo-500/20 blur-2xl" />

            {/* Course Preview Card */}
            <div className="relative max-w-lg mx-auto">
              <Card className="overflow-hidden border-2 backdrop-blur-sm border-blue-200/20 dark:border-blue-800/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-full mb-4 rounded-lg aspect-video bg-gradient-to-br from-blue-500/30 to-indigo-500/30">
                    <Code className="w-12 h-12 text-blue-100" />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold text-blue-900 dark:text-blue-100">
                    Featured Engineering Course
                  </h3>
                  <p className="mb-4 text-blue-600/80 dark:text-blue-400/80">
                    Advanced Software Architecture & System Design
                  </p>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    size="lg"
                  >
                    Start Learning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Tech-Themed Floating Elements */}
              <div className="absolute transform -right-4 bottom-4 rotate-12">
                <Card className="flex items-center justify-center w-24 h-24 text-white bg-gradient-to-br from-blue-600 to-indigo-600">
                  <Cpu className="w-8 h-8" />
                </Card>
              </div>
              <div className="absolute transform -left-4 top-4 -rotate-12">
                <Card className="flex items-center justify-center w-20 h-20 text-white bg-gradient-to-br from-blue-500 to-blue-600">
                  <Code className="w-6 h-6" />
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="flex flex-col items-center mt-12 space-y-4 text-center">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
            Ready to Begin Your Tech Journey?
          </h2>
          <Button
            size="lg"
            className="text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            Explore Engineering Courses
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
