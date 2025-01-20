import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import CourseCard from "./CourseCard";
import { Pencil, Mail, UserCircle, Loader2 } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [avatar, setAvatar] = React.useState("/api/placeholder/150/150");
  const [name, setName] = React.useState("John Smith");
  const isLoading = true;
  const enrolledCourses = [2];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {isLoading ? (
        <ProfileSkeleton />
      ) : (
        <div className="container px-4 py-8 mx-auto">
          {/* Profile Section */}
          <Card className="mb-8 overflow-hidden border-2 backdrop-blur-sm border-blue-200/20 dark:border-blue-800/20">
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                {/* Avatar */}
                <div className="relative group">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Profile"
                    className="object-cover w-32 h-32 rounded-full ring-2 ring-blue-500/20"
                  />
                </div>

                {/* Profile Info */}
                <div className="flex-grow text-center md:text-left">
                  <h1 className="mb-2 text-3xl font-bold text-blue-900 dark:text-blue-100">
                    {name}
                  </h1>
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center justify-center gap-2 md:justify-start text-blue-600/80 dark:text-blue-400/80">
                      <Mail className="w-4 h-4" />
                      john.smith@example.com
                    </div>
                    <div className="flex items-center justify-center gap-2 md:justify-start text-blue-600/80 dark:text-blue-400/80">
                      <UserCircle className="w-4 h-4" />
                      Student
                    </div>
                  </div>

                  {/* Edit Profile Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="gap-2">
                        <Pencil className="w-4 h-4" />
                        Edit Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="avatar">Profile Picture</Label>
                          <Input
                            id="avatar"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button type="submit" disabled={isLoading}>
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                              Please wait
                            </>
                          ) : (
                            "Save changes"
                          )}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enrolled Courses Section */}
          <div className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-blue-900 dark:text-blue-100">
              Enrolled Courses
            </h2>
            <p className="mb-6 text-blue-600/80 dark:text-blue-400/80">
              Continue your learning journey with your enrolled courses
            </p>

            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <CourseCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* {[1, 2, 3, 4].map((i) => (
              <CourseCard key={i} />
            ))} */}
                {enrolledCourses.length === 0 ? (
                  <h1 className="mb-6 text-center text-blue-600/80 dark:text-blue-400/80">
                    You havent enrolled it
                  </h1>
                ) : (
                  enrolledCourses.map((i) => <CourseCard key={i} />)
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

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

const ProfileSkeleton = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Profile Section Skeleton */}
      <Card className="mb-8 overflow-hidden border-2 backdrop-blur-sm border-blue-200/20 dark:border-blue-800/20">
        <CardContent className="p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            {/* Avatar Skeleton */}
            <div className="relative">
              <Skeleton className="w-32 h-32 rounded-full" />
            </div>

            {/* Profile Info Skeleton */}
            <div className="flex-grow text-center md:text-left">
              <Skeleton className="w-48 h-8 mx-auto mb-4 md:mx-0" />
              <div className="flex flex-col gap-2 mb-4">
                <Skeleton className="w-64 h-4 mx-auto md:mx-0" />
                <Skeleton className="w-56 h-4 mx-auto md:mx-0" />
              </div>
              <Skeleton className="w-32 h-10 mx-auto md:mx-0" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enrolled Courses Section Skeleton */}
      <div className="mb-8">
        <Skeleton className="w-48 h-8 mb-4" />
        <Skeleton className="w-64 h-4 mb-6" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
