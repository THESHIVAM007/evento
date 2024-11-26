"use client";
import { useState } from "react";
export default function SearchForm() {
    const [searchText, setSearchText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10 "
        spellCheck={false}
        placeholder="Search events for your city..."
      />
    </form>
  );
}