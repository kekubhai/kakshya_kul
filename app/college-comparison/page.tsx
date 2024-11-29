"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const collegeData = [
  { name: "IIT Dhanbad", cost: 500000, ranking: 15, jobPlacement: 92 },
  { name: "Amity University", cost: 3500000, ranking: 30, jobPlacement: 88 },
  { name: "NIT Calicut", cost: 450000, ranking: 22, jobPlacement: 90 },
];

export default function CollegeComparison() {
  const [selectedColleges, setSelectedColleges] = useState<string[]>([]);
  const [customCollege, setCustomCollege] = useState({
    name: "",
    cost: 0,
    ranking: 0,
    jobPlacement: 0,
  });

  const handleCollegeSelect = (collegeName: string) => {
    if (selectedColleges.includes(collegeName)) {
      setSelectedColleges(
        selectedColleges.filter((name) => name !== collegeName)
      );
    } else if (selectedColleges.length < 3) {
      setSelectedColleges([...selectedColleges, collegeName]);
    }
  };

  const handleCustomCollegeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      customCollege.name &&
      customCollege.cost &&
      customCollege.ranking &&
      customCollege.jobPlacement
    ) {
      collegeData.push(customCollege);
      setSelectedColleges([...selectedColleges, customCollege.name]);
      setCustomCollege({ name: "", cost: 0, ranking: 0, jobPlacement: 0 });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-center mb-8">
        College Comparison
      </h1>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Select Colleges to Compare (Max 3)
        </h2>
        <div className="flex flex-wrap gap-4">
          {collegeData.map((college) => (
            <Button
              key={college.name}
              variant={selectedColleges.includes(college.name) ? "default" : "secondary"}
              onClick={() => handleCollegeSelect(college.name)}
              className={`transition-transform transform hover:scale-105 border-white ${
                selectedColleges.includes(college.name)
                  ? "bg-blue-500 text-black border-white"
                  : " text-blue-500 border-white hover:bg-blue-200"
              }`}
            >
              {college.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Add Custom College</h2>
        <form
          onSubmit={handleCustomCollegeSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md"
        >
          <Input
            placeholder="College Name"
            value={customCollege.name}
            onChange={(e) =>
              setCustomCollege({ ...customCollege, name: e.target.value })
            }
            className="focus:ring-indigo-500"
          />
          <Input
            type="number"
            placeholder="Cost"
            value={customCollege.cost || ""}
            onChange={(e) =>
              setCustomCollege({
                ...customCollege,
                cost: Number(e.target.value),
              })
            }
          />
          <Input
            type="number"
            placeholder="Ranking"
            value={customCollege.ranking || ""}
            onChange={(e) =>
              setCustomCollege({
                ...customCollege,
                ranking: Number(e.target.value),
              })
            }
          />
          <Input
            type="number"
            placeholder="Job Placement %"
            value={customCollege.jobPlacement || ""}
            onChange={(e) =>
              setCustomCollege({
                ...customCollege,
                jobPlacement: Number(e.target.value),
              })
            }
          />
          <Button
            type="submit"
            className="md:col-span-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Add College
          </Button>
        </form>
      </div>

      {selectedColleges.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Comparison Table</h2>
          <div className="overflow-x-auto">
            <Table className="bg-white text-gray-800 rounded-lg shadow-md">
              <TableHeader>
                <TableRow>
                  <TableHead>College</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Ranking</TableHead>
                  <TableHead>Job Placement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {collegeData
                  .filter((college) => selectedColleges.includes(college.name))
                  .map((college) => (
                    <TableRow
                      key={college.name}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <TableCell>{college.name}</TableCell>
                      <TableCell>${college.cost.toLocaleString()}</TableCell>
                      <TableCell>{college.ranking}</TableCell>
                      <TableCell>{college.jobPlacement}%</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
