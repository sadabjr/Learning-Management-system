import { Card, CardContent } from "@/components/ui/card";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";

const MyLearning = () => {
  const isLoading = true;
  const myLearningCourses = [3];
  return (
    <>
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-blue-900 dark:text-blue-100">
            My Learning
          </h1>
          <p className="text-blue-600/80 dark:text-blue-400/80">
            Continue your learning journey with your enrolled courses
          </p>
        </div>
        <div></div>
        {/* Courses Grid */}
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <CourseCardSkeleton key={i} />
            ))}
          </div>
        ) : myLearningCourses.length === 0 ? (
          <Card className="p-8 text-center">
            <CardContent>
              <h3 className="mb-2 text-xl font-semibold text-blue-900 dark:text-blue-100">
                No Enrolled Courses
              </h3>
              <p className="text-blue-600/80 dark:text-blue-400/80">
                You havent enrolled in any courses yet. Browse our course
                catalog to get started.
              </p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                Browse Courses
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4].map((i) => (
              <CourseCard key={i} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyLearning;

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
