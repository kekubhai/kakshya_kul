/* eslint-disable @typescript-eslint/no-unused-vars */
// types/RoiTypes.ts
interface RoiInput {
    collegeFees: number;
    familyIncome: number;
    avgSalary: number;
    collegeTier: number;
    collegeCityCostOfLiving: number;
  }
  
  interface RoiOutput {
    initialInvestment: number;
    adjustedSalary: number;
    netSalary: number;
    totalEarnings: number;
    roi: number;
  }