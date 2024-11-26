"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const collegeData = [
  { name: 'University A', cost: 50000, ranking: 15, jobPlacement: 92 },
  { name: 'College B', cost: 35000, ranking: 30, jobPlacement: 88 },
  { name: 'Institute C', cost: 45000, ranking: 22, jobPlacement: 90 },
]

export default function CollegeComparison() {
  const [selectedColleges, setSelectedColleges] = useState<string[]>([])
  const [customCollege, setCustomCollege] = useState({ name: '', cost: 0, ranking: 0, jobPlacement: 0 })

  const handleCollegeSelect = (collegeName: string) => {
    if (selectedColleges.includes(collegeName)) {
      setSelectedColleges(selectedColleges.filter(name => name !== collegeName))
    } else if (selectedColleges.length < 3) {
      setSelectedColleges([...selectedColleges, collegeName])
    }
  }

  const handleCustomCollegeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (customCollege.name && customCollege.cost && customCollege.ranking && customCollege.jobPlacement) {
      collegeData.push(customCollege)
      setSelectedColleges([...selectedColleges, customCollege.name])
      setCustomCollege({ name: '', cost: 0, ranking: 0, jobPlacement: 0 })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">College Comparison</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Select Colleges to Compare (Max 3)</h2>
        <div className="flex flex-wrap gap-4">
          {collegeData.map(college => (
            <Button
              key={college.name}
              variant={selectedColleges.includes(college.name) ? "default" : "outline"}
              onClick={() => handleCollegeSelect(college.name)}
            >
              {college.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Custom College</h2>
        <form onSubmit={handleCustomCollegeSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="College Name"
            value={customCollege.name}
            onChange={(e) => setCustomCollege({...customCollege, name: e.target.value})}
          />
          <Input
            type="number"
            placeholder="Cost"
            value={customCollege.cost || ''}
            onChange={(e) => setCustomCollege({...customCollege, cost: Number(e.target.value)})}
          />
          <Input
            type="number"
            placeholder="Ranking"
            value={customCollege.ranking || ''}
            onChange={(e) => setCustomCollege({...customCollege, ranking: Number(e.target.value)})}
          />
          <Input
            type="number"
            placeholder="Job Placement %"
            value={customCollege.jobPlacement || ''}
            onChange={(e) => setCustomCollege({...customCollege, jobPlacement: Number(e.target.value)})}
          />
          <Button type="submit" className="md:col-span-2">Add College</Button>
        </form>
      </div>

      {selectedColleges.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Comparison Table</h2>
          <Table>
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
                .filter(college => selectedColleges.includes(college.name))
                .map(college => (
                  <TableRow key={college.name}>
                    <TableCell>{college.name}</TableCell>
                    <TableCell>${college.cost.toLocaleString()}</TableCell>
                    <TableCell>{college.ranking}</TableCell>
                    <TableCell>{college.jobPlacement}%</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

