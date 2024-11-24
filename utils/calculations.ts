// utils/calculations.ts


const calculateRoi = (input: RoiInput): RoiOutput => {
  const initialInvestment = input.collegeFees;
  const adjustedSalary = input.avgSalary * (1 + input.collegeTier / 10);
  const netSalary = adjustedSalary - input.collegeCityCostOfLiving;
  const totalEarnings = netSalary * 40;
  const roi = ((totalEarnings - initialInvestment) / initialInvestment) * 100;

  return {
    initialInvestment,
    adjustedSalary,
    netSalary,
    totalEarnings,
    roi,
  };
};

export { calculateRoi };