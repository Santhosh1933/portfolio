import React from "react";

export const GitHub = () => {
  return (
    <div>
      <h1 className="font-medium pb-4 text-2xl">GitHub</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Santhosh1933&theme=light&hide_border=false"
          alt="GitHub Streak"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Santhosh1933&theme=light&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
          alt="Top Languages"
        />
      </div>
    </div>
  );
};
