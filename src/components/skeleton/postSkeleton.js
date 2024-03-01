import React from "react";

export default function PostSkeleton() {
  return (
    <div className="placeholder-glow flex flex-wrap justify-between gap-y-4 xs:gap-y-6">
      <span className="placeholder w-[31%] h-auto aspect-[1.5] rounded-md xs:w-[47%]"></span>
      <span className="placeholder w-[31%] h-auto aspect-[1.5] rounded-md xs:w-[47%]"></span>
      <span className="placeholder w-[31%] h-auto aspect-[1.5] rounded-md xs:w-[47%]"></span>
      <span className="placeholder w-[31%] h-auto aspect-[1.5] rounded-md xs:w-[47%]"></span>
      <span className="placeholder w-[31%] h-auto aspect-[1.5] rounded-md xs:w-[47%]"></span>
      <span className="placeholder w-[31%] h-auto aspect-[1.5] rounded-md xs:w-[47%]"></span>
    </div>
  );
}
