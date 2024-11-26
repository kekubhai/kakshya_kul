"use client"

import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

const careerData = [
  { title: 'Software Engineer', avgSalary: 110000, jobGrowth: 22, skills: ['JavaScript', 'Python', 'SQL'] },
  { title: 'Data Scientist', avgSalary: 120000, jobGrowth: 31, skills: ['Python', 'R', 'Machine Learning'] },
  { title: 'UX Designer', avgSalary: 85000, jobGrowth: 13, skills: ['UI Design', 'User Research', 'Prototyping'] },
  { title: 'Product Manager', avgSalary: 115000, jobGrowth: 10, skills: ['Strategy', 'Communication', 'Analytics'] },
]

export default function CareerInsights() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCareers = careerData.filter(career => 
    career.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Career Insights</h1>
      
      <div className="mb-8">
        <Input
          placeholder="Search careers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCareers.map(career => (
          <Card key={career.title}>
            <CardHeader>
              <CardTitle>{career.title}</CardTitle>
              <CardDescription>Average Salary: ${career.avgSalary.toLocaleString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Job Growth: {career.jobGrowth}%</p>
              <h3 className="font-semibold mb-2">Key Skills:</h3>
              <ul className="list-disc list-inside">
                {career.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Salary Comparison</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={careerData}>
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgSalary" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

