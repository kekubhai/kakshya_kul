"use client"
import RoiCalculator from "@/components/roi-calculator"

export default function Page() {
  return (
    <div className="container py-10">
      <RoiCalculator schema={undefined} defaultValues={undefined} steps={[]} onSubmit={async function (): Promise<void> {
        throw new Error("Function not implemented.")
      } } />
    </div>
  )
}

