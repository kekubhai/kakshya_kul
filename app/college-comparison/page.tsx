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
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">
            College Comparison
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Compare colleges side by side to make an informed decision about your education investment.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            Select Colleges to Compare (Max 3)
          </h2>
          <div className="flex flex-wrap gap-3">
            {collegeData.map((college) => (
              <Button
                key={college.name}
                variant={selectedColleges.includes(college.name) ? "default" : "outline"}
                onClick={() => handleCollegeSelect(college.name)}
                className={`transition-all rounded-full px-6 ${
                  selectedColleges.includes(college.name)
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {college.name}
              </Button>
            ))}
          </div>
        </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Add Custom College</h2>
        <form
          onSubmit={handleCustomCollegeSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-8 rounded-2xl border border-slate-200"
        >
          <Input
            placeholder="College Name"
            value={customCollege.name}
            onChange={(e) =>
              setCustomCollege({ ...customCollege, name: e.target.value })
            }
            className="border-slate-200 focus:border-slate-900 bg-white"
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
            className="border-slate-200 focus:border-slate-900 bg-white"
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
            className="border-slate-200 focus:border-slate-900 bg-white"
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
            className="border-slate-200 focus:border-slate-900 bg-white"
          />
          <Button
            type="submit"
            className="md:col-span-2 bg-slate-900 text-white hover:bg-slate-800 rounded-full py-6 font-medium transition-all"
          >
            Add College
          </Button>
        </form>
      </div>

      {selectedColleges.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Comparison Table</h2>
          <div className="overflow-x-auto">
            <Table className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <TableHeader className="bg-slate-50">
                <TableRow className="border-slate-200">
                  <TableHead className="text-slate-900 font-semibold">College</TableHead>
                  <TableHead className="text-slate-900 font-semibold">Cost</TableHead>
                  <TableHead className="text-slate-900 font-semibold">Ranking</TableHead>
                  <TableHead className="text-slate-900 font-semibold">Job Placement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {collegeData
                  .filter((college) => selectedColleges.includes(college.name))
                  .map((college) => (
                    <TableRow
                      key={college.name}
                      className="hover:bg-slate-50 border-slate-200 transition-colors"
                    >
                      <TableCell className="text-slate-900 font-medium">{college.name}</TableCell>
                      <TableCell className="text-slate-600">₹{college.cost.toLocaleString()}</TableCell>
                      <TableCell className="text-slate-600">{college.ranking}</TableCell>
                      <TableCell className="text-slate-600">{college.jobPlacement}%</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  </div>
  );
}
