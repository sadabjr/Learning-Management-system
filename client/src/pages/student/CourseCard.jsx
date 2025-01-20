import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CourseCard = () => {
  return (
    <Card className="overflow-hidden transition-all border-2 backdrop-blur-sm border-blue-200/20 dark:border-blue-800/20 hover:shadow-lg hover:scale-105 hover:border-blue-300/30 dark:hover:border-blue-700/30">
      <CardContent className="p-6">
        {/* Thumbnail Section */}
        <div className="flex items-center justify-center w-full mb-4 overflow-hidden rounded-lg aspect-video bg-gradient-to-br from-blue-500/30 to-indigo-500/30">
          <img
            src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
            alt="Course Thumbnail"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title */}
        <h3 className="mb-2 text-2xl font-semibold text-blue-900 dark:text-blue-100">
          Advanced Software Architecture
        </h3>

        {/* Description */}
        <p className="mb-4 text-blue-600/80 dark:text-blue-400/80">
          Master the art of designing scalable and maintainable systems.
        </p>

        {/* Duration and Level */}
        <div className="flex justify-between mb-4 text-sm text-blue-600/80 dark:text-blue-400/80">
          <span className="font-bold text-[1.5rem]">$999</span>
          <span className="px-2 py-1 text-xs text-white bg-green-600 rounded-full">
            Advanced
          </span>
        </div>

        {/* Button with Animation */}
        <Button
          className="w-full transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-md"
          size="lg"
          onClick={() => console.log("Start Learning clicked")}
        >
          Buy Now 
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          {/* <TicketCheck /> */}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
