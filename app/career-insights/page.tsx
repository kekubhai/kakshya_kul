/* eslint-disable @typescript-eslint/no-unused-vars */


"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Search, TrendingUp, Briefcase, IndianRupee } from 'lucide-react';

type Career = {
  title: string;
  avgSalary: number;
  jobGrowth: number;
  skills: string[];
}



// gpt thing here
const careerData: Career[] = [
  { title: 'Software Engineer', avgSalary: 110000, jobGrowth: 22, skills: ['JavaScript', 'Python', 'SQL'] },
  { title: 'Data Scientist', avgSalary: 120000, jobGrowth: 31, skills: ['Python', 'R', 'Machine Learning'] },
  { title: 'UX Designer', avgSalary: 85000, jobGrowth: 13, skills: ['UI Design', 'User Research', 'Prototyping'] },
  { title: 'AI Research Scientist', avgSalary: 140000, jobGrowth: 40, skills: ['Artificial Intelligence', 'Deep Learning', 'Natural Language Processing'] },
  { title: 'Blockchain Developer', avgSalary: 130000, jobGrowth: 35, skills: ['Blockchain Technology', 'Cryptography', 'Smart Contracts'] },
  { title: 'Mechanical Engineer', avgSalary: 100000, jobGrowth: 15, skills: ['CAD', 'Thermodynamics', 'Fluid Mechanics'] },
  { title: 'Electrical Engineer', avgSalary: 105000, jobGrowth: 18, skills: ['Circuit Design', 'Power Systems', 'Electronics'] },
  { title: 'Civil Engineer', avgSalary: 95000, jobGrowth: 12, skills: ['Structural Design', 'Construction Management', 'Geotechnical Engineering'] },
  { title: 'Chemical Engineer', avgSalary: 100000, jobGrowth: 20, skills: ['Chemical Process Design', 'Thermodynamics', 'Fluid Mechanics'] },
  { title: 'Aerospace Engineer', avgSalary: 110000, jobGrowth: 25, skills: ['Aerodynamics', 'Flight Mechanics', 'Spacecraft Design'] },
  { title: 'Biomedical Engineer', avgSalary: 90000, jobGrowth: 17, skills: ['Biomechanics', 'Medical Imaging', 'Biomedical Instrumentation'] },
  { title: 'Environmental Engineer', avgSalary: 95000, jobGrowth: 15, skills: ['Environmental Impact Assessment', 'Waste Management', 'Air Pollution Control'] },
  { title: 'Petroleum Engineer', avgSalary: 120000, jobGrowth: 30, skills: ['Reservoir Engineering', 'Drilling Engineering', 'Production Engineering'] },
  { title: 'Nuclear Engineer', avgSalary: 115000, jobGrowth: 28, skills: ['Nuclear Reactor Design', 'Radiation Protection', 'Nuclear Waste Management'] },
  { title: 'Mining Engineer', avgSalary: 100000, jobGrowth: 12, skills: ['Mine Planning', 'Mineral Processing', 'Mine Safety'] },
  { title: 'Industrial Engineer', avgSalary: 95000, jobGrowth: 10, skills: ['Operations Research', 'Supply Chain Management', 'Quality Control'] },
  { title: 'Materials Engineer', avgSalary: 100000, jobGrowth: 15, skills: ['Materials Science', 'Metallurgy', 'Polymer Science'] },
  { title: 'Computer Hardware Engineer', avgSalary: 105000, jobGrowth: 20, skills: ['Digital Design', 'Computer Architecture', 'Embedded Systems'] },
  { title: 'Agricultural Engineer', avgSalary: 90000, jobGrowth: 15, skills: ['Agricultural Machinery Design', 'Irrigation Engineering', 'Food Processing'] },
  { title: 'Biological Engineer', avgSalary: 95000, jobGrowth: 18, skills: ['Bioprocess Engineering', 'Biomedical Engineering', 'Biological Systems Engineering'] },
  { title: 'Fire Protection Engineer', avgSalary: 100000, jobGrowth: 22, skills: ['Fire Dynamics', 'Fire Protection Systems', 'Fire Risk Assessment'] },
  { title: 'Marine Engineer', avgSalary: 110000, jobGrowth: 25, skills: ['Marine Systems Engineering', 'Marine Structural Engineering', 'Marine Electrical Engineering'] },
  { title: 'Naval Architect', avgSalary: 115000, jobGrowth: 30, skills: ['Ship Design', 'Ship Construction', 'Ship Stability'] },
  { title: 'Health and Safety Engineer', avgSalary: 95000, jobGrowth: 15, skills: ['Occupational Health and Safety', 'Process Safety Management', 'Industrial Hygiene'] },
  { title: 'Mining and Geological Engineer', avgSalary: 100000, jobGrowth: 20, skills: ['Geotechnical Engineering', 'Mineral Processing', 'Mine Safety'] },
  { title: 'Nuclear Engineer', avgSalary: 105000, jobGrowth: 25, skills: ['Nuclear Reactor Design', 'Radiation Protection', 'Nuclear Waste Management'] },
  { title: 'Petroleum Engineer', avgSalary: 110000, jobGrowth: 30, skills: ['Reservoir Engineering', 'Drilling Engineering', 'Production Engineering'] },
  { title: 'Software Engineer', avgSalary: 110000, jobGrowth: 22, skills: ['JavaScript', 'Python', 'SQL'] },
  { title: 'Data Scientist', avgSalary: 120000, jobGrowth: 31, skills: ['Python', 'R', 'Machine Learning'] },
  { title: 'UX Designer', avgSalary: 85000, jobGrowth: 13, skills: ['UI Design', 'User Research', 'Prototyping'] },
  { title: 'Product Manager', avgSalary: 115000, jobGrowth: 10, skills: ['Strategy', 'Communication', 'Analytics'] },
  { title: 'Doctor', avgSalary: 200000, jobGrowth: 20, skills: ['Medicine', 'Surgery', 'Diagnosis'] },
  { title: 'Nurse', avgSalary: 70000, jobGrowth: 15, skills: ['Patient Care', 'Medication Administration', 'Wound Care'] },
  { title: 'Dentist', avgSalary: 150000, jobGrowth: 18, skills: ['Dental Surgery', 'Oral Medicine', 'Orthodontics'] },
  { title: 'Pharmacist', avgSalary: 120000, jobGrowth: 22, skills: ['Pharmacology', 'Pharmacy Practice', 'Pharmaceutical Chemistry'] },
  { title: 'Physical Therapist', avgSalary: 85000, jobGrowth: 25, skills: ['Therapeutic Exercise', 'Manual Therapy', 'Functional Training'] },
  { title: 'Occupational Therapist', avgSalary: 80000, jobGrowth: 30, skills: ['Therapeutic Activities', 'Assistive Technology', 'Adaptive Equipment'] },
  { title: 'Speech-Language Pathologist', avgSalary: 75000, jobGrowth: 35, skills: ['Speech Therapy', 'Language Therapy', 'Swallowing Therapy'] },
  { title: 'Veterinarian', avgSalary: 120000, jobGrowth: 20, skills: ['Veterinary Medicine', 'Surgery', 'Preventive Care'] },
  { title: 'Veterinary Technician', avgSalary: 50000, jobGrowth: 15, skills: ['Animal Care', 'Laboratory Procedures', 'Surgical Assistance'] },
  { title: 'Medical Assistant', avgSalary: 35000, jobGrowth: 18, skills: ['Patient Care', 'Medical Office Procedures', 'Medical Terminology'] },
  { title: 'Radiologic Technologist', avgSalary: 60000, jobGrowth: 22, skills: ['Radiography', 'Fluoroscopy', 'Computed Tomography'] },
  { title: 'Dental Hygienist', avgSalary: 75000, jobGrowth: 25, skills: ['Dental Prophylaxis', 'Periodontal Therapy', 'Dental Radiography'] },
  { title: 'Respiratory Therapist', avgSalary: 65000, jobGrowth: 30, skills: ['Respiratory Care', 'Patient Assessment', 'Ventilator Management'] },
  { title: 'Optometrist', avgSalary: 120000, jobGrowth: 20, skills: ['Vision Care', 'Eye Health Evaluation', 'Prescription of Eyewear'] },
  { title: 'Phlebotomist', avgSalary: 30000, jobGrowth: 15, skills: ['Venipuncture', 'Blood Collection', 'Specimen Processing'] },
  { title: 'Medical Records Technician', avgSalary: 40000, jobGrowth: 18, skills: ['Health Information Management', 'Medical Coding', 'Medical Billing'] },
  { title: 'Surgical Technologist', avgSalary: 50000, jobGrowth: 22, skills: ['Surgical Assistance', 'Surgical Equipment Management', 'Surgical Asepsis'] },
  { title: 'Physical Therapy Assistant', avgSalary: 60000, jobGrowth: 25, skills: ['Therapeutic Exercise', 'Functional Training', 'Patient Education'] },
  { title: 'Occupational Therapy Assistant', avgSalary: 55000, jobGrowth: 30, skills: ['Therapeutic Activities', 'Adaptive Equipment', 'Assistive Technology'] },
  { title: 'Radiation Therapist', avgSalary: 80000, jobGrowth: 20, skills: ['Radiation Therapy', 'Patient Care', 'Treatment Planning'] },
  { title: 'Diagnostic Medical Sonographer', avgSalary: 70000, jobGrowth: 15, skills: ['Ultrasound Imaging', 'Patient Care', 'Equipment Maintenance'] },
  { title: 'Cardiovascular Technologist', avgSalary: 65000, jobGrowth: 18, skills: ['Cardiac Catheterization', 'Electrocardiography', 'Vascular Sonography'] },
  { title: 'Nuclear Medicine Technologist', avgSalary: 75000, jobGrowth: 22, skills: ['Nuclear Medicine Imaging', 'Radiopharmaceutical Administration', 'Patient Care'] },
  { title: 'Dietitian', avgSalary: 70000, jobGrowth: 25, skills: ['Nutritional Assessment', 'Dietary Counseling', 'Medical Nutrition Therapy'] },
  { title: 'Nutritionist', avgSalary: 60000, jobGrowth: 30, skills: ['Nutritional Assessment', 'Dietary Counseling', 'Nutrition Education'] },
  { title: 'Chiropractor', avgSalary: 100000, jobGrowth: 20, skills: ['Chiropractic Adjustment', 'Spinal Manipulation', 'Physical Therapy'] },
  { title: 'Massage Therapist', avgSalary: 50000, jobGrowth: 15, skills: ['Massage Therapy', 'Client Assessment', 'Treatment Planning'] },
  { title: 'Athletic Trainer', avgSalary: 50000, jobGrowth: 18, skills: ['Injury Prevention', 'Injury Evaluation', 'Rehabilitation'] },
  { title: 'Recreational Therapist', avgSalary: 50000, jobGrowth: 22, skills: ['Recreational Therapy', 'Patient Assessment', 'Treatment Planning'] },
  { title: 'Art Therapist', avgSalary: 60000, jobGrowth: 25, skills: ['Art Therapy', 'Patient Assessment', 'Treatment Planning'] },
  { title: 'Music Therapist', avgSalary: 60000, jobGrowth: 30, skills: ['Music Therapy', 'Patient Assessment', 'Treatment Planning'] },
  { title: 'Dance Therapist', avgSalary: 60000, jobGrowth: 20, skills: ['Dance Therapy', 'Patient Assessment', 'Treatment Planning'] },
  { title: 'Drama Therapist', avgSalary: 60000, jobGrowth: 15, skills: ['Drama Therapy', 'Patient Assessment', 'Treatment Planning'] },
  { title: 'Rehabilitation Counselor', avgSalary: 50000, jobGrowth: 18, skills: ['Rehabilitation Counseling', 'Client Assessment', 'Treatment Planning'] },
  { title: 'Genetic Counselor', avgSalary: 80000, jobGrowth: 22, skills: ['Genetic Counseling', 'Patient Assessment', 'Treatment Planning'] },
  { title: 'Veterinary Pathologist', avgSalary: 150000, jobGrowth: 25, skills: ['Veterinary Pathology', 'Diagnostic Testing', 'Disease Management'] },
  { title: 'Veterinary Anatomist', avgSalary: 150000, jobGrowth: 30, skills: ['Veterinary Anatomy', 'Teaching', 'Research'] },
  { title: 'Veterinary Physiologist', avgSalary: 150000, jobGrowth: 20, skills: ['Veterinary Physiology', 'Teaching', 'Research'] },
  { title: 'Veterinary Microbiologist', avgSalary: 150000, jobGrowth: 15, skills: ['Veterinary Microbiology', 'Diagnostic Testing', 'Disease Management'] },
  { title: 'Veterinary Parasitologist', avgSalary: 150000, jobGrowth: 18, skills: ['Veterinary Parasitology', 'Diagnostic Testing', 'Disease Management'] },
  { title: 'Veterinary Pharmacologist', avgSalary: 150000, jobGrowth: 22, skills: ['Veterinary Pharmacology', 'Drug Development', 'Toxicology'] },
  { title: 'Veterinary Toxicologist', avgSalary: 150000, jobGrowth: 25, skills: ['Veterinary Toxicology', 'Toxicity Testing', 'Risk Assessment'] },
  { title: 'Veterinary Epidemiologist', avgSalary: 150000, jobGrowth: 30, skills: ['Veterinary Epidemiology', 'Disease Surveillance', 'Outbreak Investigation'] },
  { title: 'Veterinary Radiologist', avgSalary: 150000, jobGrowth: 20, skills: ['Veterinary Radiology', 'Diagnostic Imaging', 'Interventional Procedures'] },
  { title: 'Veterinary Ophthalmologist', avgSalary: 150000, jobGrowth: 15, skills: ['Veterinary Ophthalmology', 'Ocular Surgery', 'Ocular Disease Management'] },
  { title: 'Veterinary Dermatologist', avgSalary: 150000, jobGrowth: 18, skills: ['Veterinary Dermatology', 'Diagnostic Testing', 'Disease Management'] },
  { title: 'Veterinary Dentist', avgSalary: 150000, jobGrowth: 22, skills: ['Veterinary Dentistry', 'Dental Surgery', 'Oral Disease Management'] },
  { title: 'Veterinary Anesthesiologist', avgSalary: 150000, jobGrowth: 25, skills: ['Veterinary Anesthesiology', 'Anesthetic Management', 'Pain Management'] },
  { title: 'Veterinary Behaviorist', avgSalary: 150000, jobGrowth: 30, skills: ['Veterinary Behavior', 'Behavior Modification', 'Behavioral Medicine'] },
  { title: 'Veterinary Nutritionist', avgSalary: 150000, jobGrowth: 20, skills: ['Veterinary Nutrition', 'Nutritional Assessment', 'Dietary Management'] },
  { title: 'Veterinary Internist', avgSalary: 150000, jobGrowth: 15, skills: ['Veterinary Internal Medicine', 'Diagnostic Testing', 'Disease Management'] },
  { title: 'Veterinary Oncologist', avgSalary: 150000, jobGrowth: 18, skills: ['Veterinary Oncology', 'Cancer Treatment', 'Palliative Care'] },
  { title: 'Veterinary Surgeon', avgSalary: 150000, jobGrowth: 22, skills: ['Veterinary Surgery', 'Surgical Procedures', 'Postoperative Care'] },
  { title: 'Veterinary Radiologist', avgSalary: 150000, jobGrowth: 25, skills: ['Veterinary Radiology', 'Diagnostic Imaging', 'Interventional Procedures'] },
  { title: 'Veterinary Ophthalmologist', avgSalary: 150000, jobGrowth: 30, skills: ['Veterinary Ophthalmology', 'Ocular Surgery', 'Ocular Disease Management'] },
  { title: 'Veterinary Dermatologist', avgSalary: 150000, jobGrowth: 20, skills: ['Veterinary Dermatology', 'Diagnostic Testing', 'Disease Management'] },
  { title: 'Veterinary Dentist', avgSalary: 150000, jobGrowth: 15, skills: ['Veterinary Dentistry', 'Dental Surgery', 'Oral Disease Management'] },
  { title: 'Veterinary Anesthesiologist', avgSalary: 150000, jobGrowth: 18, skills: ['Veterinary Anesthesiology', 'Anesthetic Management', 'Pain Management'] },
  { title: 'Veterinary Behaviorist', avgSalary: 150000, jobGrowth: 22, skills: ['Veterinary Behavior', 'Behavior Modification', 'Behavioral Medicine'] },
  { title: 'Veterinary Nutritionist', avgSalary: 150000, jobGrowth: 25, skills: ['Veterinary Nutrition', 'Nutritional Assessment', 'Dietary Management'] },
  { title: 'Veterinary Internist', avgSalary: 150000, jobGrowth: 30, skills: ['Veterinary Internal Medicine', 'Diagnostic Testing', 'Disease Management'] },
  { title: 'Veterinary Oncologist', avgSalary: 150000, jobGrowth: 20, skills: ['Veterinary Oncology', 'Cancer Treatment', 'Palliative Care'] },
  { title: 'Veterinary Surgeon', avgSalary: 150000, jobGrowth: 15, skills: ['Veterinary Surgery', 'Surgical Procedures', 'Postoperative Care'] },
  { title: 'Veterinary Radiologist', avgSalary: 150000, jobGrowth: 18, skills: ['Veterinary Radiology', 'Diagnostic Imaging', 'Interventional Procedures'] },
  { title: 'Veterinary Ophthalmologist', avgSalary: 150000, jobGrowth: 22, skills: ['Veterinary Ophthalmology', 'Ocular Surgery', 'Ocular Disease Management'] },
  { title: 'Veterinary Dermatologist', avgSalary: 150000, jobGrowth: 25, skills: ['Veterinary Dermatology', 'Diagnostic Testing', 'Disease Management'] },
  { title: 'Agricultural Engineer', avgSalary: 90000, jobGrowth: 15, skills: ['Agricultural Machinery Design', 'Irrigation Engineering', 'Food Processing'] },
  { title: 'Biomedical Engineer', avgSalary: 95000, jobGrowth: 18, skills: ['Bioprocess Engineering', 'Biomedical Engineering', 'Biological Systems Engineering'] },
  { title: 'Chemical Engineer', avgSalary: 100000, jobGrowth: 20, skills: ['Chemical Process Design', 'Thermodynamics', 'Fluid Mechanics'] },
  { title: 'Civil Engineer', avgSalary: 95000, jobGrowth: 12, skills: ['Structural Design', 'Construction Management', 'Geotechnical Engineering'] },
  { title: 'Computer Hardware Engineer', avgSalary: 105000, jobGrowth: 20, skills: ['Digital Design', 'Computer Architecture', 'Embedded Systems'] },
  { title: 'Electrical Engineer', avgSalary: 100000, jobGrowth: 18, skills: ['Circuit Design', 'Power Systems', 'Electronics'] },
  { title: 'Environmental Engineer', avgSalary: 95000, jobGrowth: 15, skills: ['Environmental Impact Assessment', 'Waste Management', 'Air Pollution Control'] },
  { title: 'Health and Safety Engineer', avgSalary: 95000, jobGrowth: 15, skills: ['Occupational Health and Safety', 'Process Safety Management', 'Industrial Hygiene'] },
  { title: 'Industrial Engineer', avgSalary: 95000, jobGrowth: 10, skills: ['Operations Research', 'Supply Chain Management', 'Quality Control'] },
  { title: 'Marine Engineer', avgSalary: 110000, jobGrowth: 25, skills: ['Marine Systems Engineering', 'Marine Structural Engineering', 'Marine Electrical Engineering'] },
  { title: 'Materials Engineer', avgSalary: 100000, jobGrowth: 15, skills: ['Materials Science', 'Metallurgy', 'Polymer Science'] },
  { title: 'Mechanical Engineer', avgSalary: 100000, jobGrowth: 15, skills: ['CAD', 'Thermodynamics', 'Fluid Mechanics'] },
  { title: 'Mining and Geological Engineer', avgSalary: 100000, jobGrowth: 20, skills: ['Geotechnical Engineering', 'Mineral Processing', 'Mine Safety'] },
  { title: 'Nuclear Engineer', avgSalary: 105000, jobGrowth: 25, skills: ['Nuclear Reactor Design', 'Radiation Protection', 'Nuclear Waste Management'] },
  { title: 'Petroleum Engineer', avgSalary: 110000, jobGrowth: 30, skills: ['Reservoir Engineering', 'Drilling Engineering', 'Production Engineering'] },
  { title: 'Software Engineer', avgSalary: 110000, jobGrowth: 22, skills: ['JavaScript', 'Python', 'SQL'] },
  { title: 'Data Scientist', avgSalary: 120000, jobGrowth: 31, skills: ['Python', 'R', 'Machine Learning'] },
  { title: 'UX Designer', avgSalary: 85000, jobGrowth: 13, skills: ['UI Design', 'User Research', 'Prototyping'] },
  { title: 'Product Manager', avgSalary: 115000, jobGrowth: 10, skills: ['Strategy', 'Communication', 'Analytics'] },
    { title: 'Software Engineer', avgSalary: 110000, jobGrowth: 22, skills: ['JavaScript', 'Python', 'SQL'] },
    { title: 'Data Scientist', avgSalary: 120000, jobGrowth: 31, skills: ['Python', 'R', 'Machine Learning'] },
    { title: 'UX Designer', avgSalary: 85000, jobGrowth: 13, skills: ['UI Design', 'User Research', 'Prototyping'] },
    { title: 'Product Manager', avgSalary: 115000, jobGrowth: 10, skills: ['Strategy', 'Communication', 'Analytics'] },
    { title: 'Doctor', avgSalary: 200000, jobGrowth: 20, skills: ['Medicine', 'Surgery', 'Diagnosis'] },
    { title: 'Nurse', avgSalary: 70000, jobGrowth: 15, skills: ['Patient Care', 'Medication Administration', 'Wound Care'] },
    { title: 'Dentist', avgSalary: 150000, jobGrowth: 18, skills: ['Dental Surgery', 'Oral Medicine', 'Orthodontics'] },
    { title: 'Pharmacist', avgSalary: 120000, jobGrowth: 22, skills: ['Pharmacology', 'Pharmacy Practice', 'Pharmaceutical Chemistry'] },
    { title: 'Physical Therapist', avgSalary: 85000, jobGrowth: 25, skills: ['Therapeutic Exercise', 'Manual Therapy', 'Functional Training'] },
    { title: 'Occupational Therapist', avgSalary: 80000, jobGrowth: 30, skills: ['Therapeutic Activities', 'Assistive Technology', 'Adaptive Equipment'] },
    { title: 'Veterinarian', avgSalary: 120000, jobGrowth: 20, skills: ['Veterinary Medicine', 'Surgery', 'Preventive Care'] },
    { title:'Cybersecurity Analyst' ,avgSalary :120000 ,jobGrowth :31 ,skills :['Network Security','Risk Assessment','Incident Response']},
    { title:'Blockchain Developer' ,avgSalary :130000 ,jobGrowth :35 ,skills :['Blockchain Technology','Cryptography','Smart Contracts']},
    { title:'AI Research Scientist' ,avgSalary :140000 ,jobGrowth :40 ,skills :['Artificial Intelligence','Deep Learning','Natural Language Processing']},
    { title:'Graphic Designer' ,avgSalary :60000 ,jobGrowth :10 ,skills :['Adobe Creative Suite','Typography','Branding']},
    { title:'Marketing Manager' ,avgSalary :90000 ,jobGrowth :15 ,skills :['Digital Marketing','Content Strategy','SEO']},
    { title:'Sales Representative' ,avgSalary :65000 ,jobGrowth :12 ,skills :['Customer Relationship Management','Negotiation','Product Knowledge']},
    { title:'Financial Analyst' ,avgSalary :80000 ,jobGrowth :11 ,skills :['Financial Modeling','Data Analysis','Excel']},
    { title:'Human Resources Manager' ,avgSalary :95000 ,jobGrowth :14 ,skills :['Recruitment','Employee Relations','Performance Management']},
    { title:'Project Manager' ,avgSalary :100000 ,jobGrowth :16 ,skills :['Project Planning','Risk Management','Agile Methodologies']},
    { title:'Content Writer' ,avgSalary :55000 ,jobGrowth :20 ,skills :['Creative Writing','SEO Writing','Research Skills']},
    { title:'Social Media Manager' ,avgSalary :70000 ,jobGrowth :25 ,skills :['Social Media Strategy','Content Creation','Analytics']},
    { title:'Film Director' ,avgSalary :80000 ,jobGrowth :18 ,skills :['Storytelling','Visual Composition','Leadership']},
    { title:'Fashion Designer' ,avgSalary :70000 ,jobGrowth :15 ,skills :['Fashion Trends','Pattern Making','Textile Science']},
    { title:'Business Development Manager' ,avgSalary :110000 ,jobGrowth :20 ,skills :['Strategic Planning','Market Analysis','Partnership Building']},
    { title:'Content Creator' ,avgSalary :60000 ,jobGrowth :22 ,skills :['Video Production','Photography','Editing']},
    { title:'Influencer Marketing Specialist' ,avgSalary :65000 ,jobGrowth :25 ,skills :['Influencer Research','Campaign Management','Social Media']},
    { title:'Event Planner' ,avgSalary :55000 ,jobGrowth :18 ,skills :['Event Design','Logistics Management','Communication']},
    { title:'Digital Content Manager' ,avgSalary :70000 ,jobGrowth :20 ,skills :['Content Strategy','Digital Asset Management','Analytics']},
    { title:'Cinematographer' ,avgSalary :90000 ,jobGrowth :20 ,skills :['Camera Operation','Lighting Design','Visual Storytelling']},
    { title:'Fashion Stylist' ,avgSalary :60000 ,jobGrowth :18 ,skills :['Fashion Trends','Wardrobe Management','Photography']},
    { title:'Business Analyst' ,avgSalary :85000 ,jobGrowth :15 ,skills :['Data Analysis','Process Improvement','Communication']},
    { title:'Content Strategist' ,avgSalary :75000 ,jobGrowth :22 ,skills :['Content Marketing','Social Media','Analytics']},
    { title:'Social Media Influencer' ,avgSalary :70000 ,jobGrowth :25 ,skills :['Content Creation','Audience Engagement','Brand Partnerships']},
    { title:'Film Editor' ,avgSalary :80000 ,jobGrowth :20 ,skills :['Video Editing','Storytelling','Visual Composition']},
    { title:'Fashion Buyer' ,avgSalary :65000 ,jobGrowth :15 ,skills :['Fashion Trends','Merchandising','Negotiation']},
    { title:'Entrepreneur' ,avgSalary :100000 ,jobGrowth :25 ,skills :['Business Planning','Marketing','Leadership']},
    { title:'Digital Marketing Specialist' ,avgSalary :70000 ,jobGrowth :20 ,skills :['Digital Marketing','SEO','Social Media']},
    { title:'Content Marketing Manager' ,avgSalary :85000 ,jobGrowth :22 ,skills :['Content Strategy','Content Creation','Analytics']},
];





const CareerCard = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Engineering", "Medical", "Business", "Creative", "Tech"];

  const filteredData = careerData.filter((career) =>
    career.title.toLowerCase().includes(search.toLowerCase())
  );

  // Get unique careers (deduplicate)
  const uniqueCareers = filteredData.reduce((acc: Career[], current) => {
    const x = acc.find(item => item.title === current.title);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-violet-400 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Explore {uniqueCareers.length}+ Career Paths
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Career <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              Discover salary trends, job growth, and in-demand skills across industries in India.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search careers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-xl font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/25"
                  : "bg-white border border-zinc-200 text-zinc-600 hover:border-violet-300"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Career Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {uniqueCareers.slice(0, 12).map((career, index) => (
            <motion.div
              key={`${career.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-lg shadow-zinc-200/50 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400" />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-violet-600 transition-colors">
                      {career.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm text-emerald-600 font-medium">+{career.jobGrowth}% growth</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
                    <IndianRupee className="w-5 h-5 text-violet-600" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-zinc-500 mb-1">Average Salary (Indian Context)</p>
                  <p className="text-3xl font-bold text-zinc-900">
                    ₹{Math.round(career.avgSalary * 0.012 / 100000 * 100) / 100}L
                    <span className="text-sm font-normal text-zinc-400 ml-1">/year</span>
                  </p>
                </div>
                
                {/* Mini Chart */}
                <div className="h-20 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: "Entry", value: career.avgSalary * 0.6 },
                      { name: "Mid", value: career.avgSalary },
                      { name: "Senior", value: career.avgSalary * 1.5 },
                    ]}>
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#18181b', 
                          border: 'none',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '12px'
                        }}
                        formatter={(value: number) => [`₹${Math.round(value * 0.012 / 1000)}K`, '']}
                      />
                      <Bar dataKey="value" fill={`url(#gradient-${index})`} radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {career.skills.slice(0, 3).map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs px-3 py-1.5 bg-zinc-100 text-zinc-600 rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white border border-zinc-200 rounded-xl font-semibold text-zinc-700 hover:border-violet-300 hover:shadow-lg transition-all">
            Load More Careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;