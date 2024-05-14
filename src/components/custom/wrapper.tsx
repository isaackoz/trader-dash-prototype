"use client";
import { cn } from "@/lib/utils";
import { Divider } from "@nextui-org/divider";
import React from "react";

const Wrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto flex min-h-[calc(100vh-200px)] max-w-7xl flex-col p-4",
      className
    )}
    {...props}
  />
));

Wrapper.displayName = "Wrapper";

const TitleHeaderWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("h-[100px] w-full", className)} {...props}>
    {props.children}
    <Divider />
  </div>
));
TitleHeaderWrapper.displayName = "TitleHeaderWrapper";

const TitleHeaderContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto flex h-full max-w-7xl items-center px-6", className)}
    {...props}
  />
));
TitleHeaderContent.displayName = "TitleHeaderContent";

const TitleHeaderName = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1 ref={ref} className={cn("flex-grow text-3xl", className)} {...props} />
));
TitleHeaderName.displayName = "TitleHeaderName";

const TitleHeaderActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props} />
));
TitleHeaderActions.displayName = "TitleHeaderActions";

export {
  Wrapper,
  TitleHeaderWrapper,
  TitleHeaderContent,
  TitleHeaderName,
  TitleHeaderActions,
};
