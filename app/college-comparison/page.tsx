"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, IndianRupee, Trophy, Briefcase, Plus, ArrowRight, CheckCircle2 } from "lucide-react";

const collegeData = [
  { name: "IIT Bombay", cost: 800000, ranking: 1, jobPlacement: 95, avgPackage: 2500000 },
  { name: "IIT Delhi", cost: 850000, ranking: 2, jobPlacement: 94, avgPackage: 2400000 },
  { name: "BITS Pilani", cost: 2000000, ranking: 8, jobPlacement: 92, avgPackage: 1800000 },
  { name: "NIT Trichy", cost: 500000, ranking: 12, jobPlacement: 90, avgPackage: 1200000 },
  { name: "VIT Vellore", cost: 1200000, ranking: 25, jobPlacement: 85, avgPackage: 800000 },
  { name: "SRM Chennai", cost: 1500000, ranking: 35, jobPlacement: 80, avgPackage: 700000 },
];

export default function CollegeComparison() {
  const [selectedColleges, setSelectedColleges] = useState<string[]>([]);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customCollege, setCustomCollege] = useState({
    name: "",
    cost: 0,
    ranking: 0,
    jobPlacement: 0,
    avgPackage: 0,
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
      setCustomCollege({ name: "", cost: 0, ranking: 0, jobPlacement: 0, avgPackage: 0 });
      setShowCustomForm(false);
    }
  };

  const selectedCollegeData = collegeData.filter((college) =>
    selectedColleges.includes(college.name)
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-emerald-400 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Compare up to 3 colleges
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              College <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Comparison</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Make data-driven decisions. Compare costs, rankings, and placement records side by side.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* College Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-zinc-900">Select Colleges</h2>
              <p className="text-zinc-500 text-sm mt-1">Choose up to 3 colleges to compare</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
              <span className="text-emerald-600 font-semibold">{selectedColleges.length}/3</span>
              <span className="text-emerald-600 text-sm">selected</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {collegeData.map((college, index) => (
              <motion.button
                key={college.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleCollegeSelect(college.name)}
                className={`group relative px-5 py-3 rounded-xl font-medium transition-all ${
                  selectedColleges.includes(college.name)
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25"
                    : "bg-white border border-zinc-200 text-zinc-700 hover:border-emerald-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-2">
                  {selectedColleges.includes(college.name) && (
                    <CheckCircle2 className="w-4 h-4" />
                  )}
                  <span>{college.name}</span>
                </div>
              </motion.button>
            ))}
            
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setShowCustomForm(!showCustomForm)}
              className="px-5 py-3 rounded-xl font-medium border-2 border-dashed border-zinc-300 text-zinc-500 hover:border-emerald-400 hover:text-emerald-600 transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Custom
            </motion.button>
          </div>
        </motion.div>

        {/* Custom College Form */}
        {showCustomForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mb-12"
          >
            <form
              onSubmit={handleCustomCollegeSubmit}
              className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-xl shadow-zinc-200/50"
            >
              <h3 className="text-lg font-bold text-zinc-900 mb-6">Add Your College</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <Input
                  placeholder="College Name"
                  value={customCollege.name}
                  onChange={(e) =>
                    setCustomCollege({ ...customCollege, name: e.target.value })
                  }
                  className="border-zinc-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                />
                <Input
                  type="number"
                  placeholder="Total Cost (₹)"
                  value={customCollege.cost || ""}
                  onChange={(e) =>
                    setCustomCollege({
                      ...customCollege,
                      cost: Number(e.target.value),
                    })
                  }
                  className="border-zinc-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                />
                <Input
                  type="number"
                  placeholder="NIRF Ranking"
                  value={customCollege.ranking || ""}
                  onChange={(e) =>
                    setCustomCollege({
                      ...customCollege,
                      ranking: Number(e.target.value),
                    })
                  }
                  className="border-zinc-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                />
                <Input
                  type="number"
                  placeholder="Placement %"
                  value={customCollege.jobPlacement || ""}
                  onChange={(e) =>
                    setCustomCollege({
                      ...customCollege,
                      jobPlacement: Number(e.target.value),
                    })
                  }
                  className="border-zinc-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                />
                <Input
                  type="number"
                  placeholder="Avg Package (₹)"
                  value={customCollege.avgPackage || ""}
                  onChange={(e) =>
                    setCustomCollege({
                      ...customCollege,
                      avgPackage: Number(e.target.value),
                    })
                  }
                  className="border-zinc-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowCustomForm(false)}
                  className="rounded-xl border-zinc-200"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl px-6"
                >
                  Add College
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Comparison Cards */}
        {selectedColleges.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-zinc-900 mb-6">Comparison Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {selectedCollegeData.map((college, index) => (
                <motion.div
                  key={college.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xl shadow-zinc-200/50 hover:shadow-2xl transition-all"
                >
                  <div className={`h-2 ${
                    index === 0 ? 'bg-gradient-to-r from-emerald-400 to-teal-400' :
                    index === 1 ? 'bg-gradient-to-r from-blue-400 to-indigo-400' :
                    'bg-gradient-to-r from-purple-400 to-pink-400'
                  }`} />
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900">{college.name}</h3>
                        <p className="text-zinc-500 text-sm">NIRF Rank #{college.ranking}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        index === 0 ? 'bg-emerald-100 text-emerald-600' :
                        index === 1 ? 'bg-blue-100 text-blue-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        <Trophy className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <IndianRupee className="w-4 h-4 text-zinc-400" />
                          <span className="text-sm text-zinc-500">Total Cost</span>
                        </div>
                        <span className="font-bold text-zinc-900">₹{(college.cost / 100000).toFixed(1)}L</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <Briefcase className="w-4 h-4 text-zinc-400" />
                          <span className="text-sm text-zinc-500">Placement</span>
                        </div>
                        <span className="font-bold text-emerald-600">{college.jobPlacement}%</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
                        <span className="text-sm text-emerald-700">Avg Package</span>
                        <span className="font-bold text-emerald-700">₹{(college.avgPackage / 100000).toFixed(1)} LPA</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-zinc-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-zinc-500">ROI Score</span>
                        <span className="text-lg font-bold text-zinc-900">
                          {((college.avgPackage * 10 / college.cost) * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="mt-2 h-2 bg-zinc-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            index === 0 ? 'bg-gradient-to-r from-emerald-400 to-teal-400' :
                            index === 1 ? 'bg-gradient-to-r from-blue-400 to-indigo-400' :
                            'bg-gradient-to-r from-purple-400 to-pink-400'
                          }`}
                          style={{ width: `${Math.min((college.avgPackage * 10 / college.cost) * 10, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-lg shadow-emerald-500/25">
                Calculate Detailed ROI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-zinc-400" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">No colleges selected</h3>
            <p className="text-zinc-500">Select colleges above to start comparing</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
