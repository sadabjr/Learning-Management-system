// import CourseCard from './CourseCard';
import { Code, Cpu, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CourseCard from "./CourseCard";


const Courses = () => {
  //   const courses = [
  //     {
  //       title: 'Advanced Software Architecture',
  //       description: 'Master the art of designing scalable and maintainable systems.',
  //       icon: Code,
  //       duration: '12 Weeks',
  //       level: 'Advanced',
  //     },
  //     {
  //       title: 'Machine Learning Fundamentals',
  //       description: 'Learn the basics of machine learning and AI with hands-on projects.',
  //       icon: Cpu,
  //       duration: '8 Weeks',
  //       level: 'Intermediate',
  //     },
  //     {
  //       title: 'Data Science & Analytics',
  //       description: 'Explore data analysis, visualization, and statistical modeling.',
  //       icon: LineChart,
  //       duration: '10 Weeks',
  //       level: 'Intermediate',
  //     },
  //     {
  //       title: 'Full-Stack Web Development',
  //       description: 'Build modern web applications with React, Node.js, and databases.',
  //       icon: Code,
  //       duration: '14 Weeks',
  //       level: 'Beginner',
  //     },
  //   ];

  const isLoading = false;
  return (
    <div className="container px-4 py-12 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center text-blue-900 dark:text-blue-100">
        Explore Our Courses
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      
        {/* {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            icon={course.icon}
            duration={course.duration}
            level={course.level}
            onClick={() => console.log(`Clicked on ${course.title}`)}
          />
        ))} */}
        {
            isLoading ?Array.from({ length: 4 }).map((_, index) => (
              <CourseCardSkeleton key={index} />
            )): Array.from({ length: 4 }).map((_, index) => (
                <CourseCard key={index}/>
            )) 
        }
      </div>
    </div>
  );
};

export default Courses;

const CourseCardSkeleton = () => {
  return (
    <Card className="overflow-hidden border-2 backdrop-blur-sm border-blue-200/20 dark:border-blue-800/20">
      <CardContent className="p-6">
        {/* Icon Placeholder */}
        <div className="flex items-center justify-center w-full mb-4 rounded-lg aspect-video bg-gradient-to-br from-blue-500/30 to-indigo-500/30">
          <div className="w-12 h-12 rounded-full bg-blue-200/20 dark:bg-blue-800/20 animate-pulse" />
        </div>

        {/* Title Placeholder */}
        <div className="h-8 mb-4 rounded-lg bg-blue-200/20 dark:bg-blue-800/20 animate-pulse" />

        {/* Description Placeholder */}
        <div className="h-4 mb-2 rounded-lg bg-blue-200/20 dark:bg-blue-800/20 animate-pulse" />
        <div className="h-4 mb-4 rounded-lg bg-blue-200/20 dark:bg-blue-800/20 animate-pulse" />

        {/* Duration and Level Placeholder */}
        <div className="flex justify-between mb-4">
          <div className="w-20 h-4 rounded-lg bg-blue-200/20 dark:bg-blue-800/20 animate-pulse" />
          <div className="w-20 h-4 rounded-lg bg-blue-200/20 dark:bg-blue-800/20 animate-pulse" />
        </div>

        {/* Button Placeholder */}
        <div className="h-12 rounded-lg bg-blue-200/20 dark:bg-blue-800/20 animate-pulse" />
      </CardContent>
    </Card>
  );
};
