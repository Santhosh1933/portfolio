import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Markdown } from "./Markdown";

export const ProjectDocs = ({ trigger, title,src }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          
          {trigger}</SheetTrigger>
        <SheetContent >
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription >
             <Markdown markdown={src}/>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
