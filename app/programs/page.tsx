import { fetchAllPrograms } from "@/utils/actions";
import Link from "next/link";
import React from "react";

async function programsPage() {
  const programs = await fetchAllPrograms();
  return (
    <div>
      {programs.map((program) => (
        <Link
          href={`/programs/${program.id}/agreement`}
          className="text-blue-500 underline"
          key={program.id}
        >
          {program.title}
        </Link>
      ))}
    </div>
  );
}

export default programsPage;
