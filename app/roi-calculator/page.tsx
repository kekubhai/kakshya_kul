"use client"
import RoiCalculator from "../components/roi-calculator"

export default function Page() {
  return (
    <div className="container py-10">
      <RoiCalculator schema={undefined} defaultValues={undefined} steps={[]} onSubmit={function (values: any): Promise<void> {
        throw new Error("Function not implemented.")
      } } />
    </div>
  )
}

