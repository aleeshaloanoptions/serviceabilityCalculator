"use client";

import React from 'react';
import LoInput from "@/app/components/LoInput";
import LoSlider from "@/app/components/LoSlider";
import LoDropdown from "@/app/components/LoDropdown";
import LoTable from "@/app/components/LoTable";
import { LoanType, MaritalStatus, State } from "@/constants/enums";
import { useState } from "react";

export default function Home() {

const [loanAmount, setLoanAmount] = useState<number | undefined>(0);
const [termYears, setTermYears] = useState<number | undefined>(3);
const [brokerFee, setBrokerFee] = useState<number>(0);
const [interestRate, setInterestRate] = useState<number | undefined>(0);
const [establishmentFee, setEstablishmentFee] = useState<number>(0);
const [dependants, setDependants] = useState<number | undefined>(0);
const [applicantIncome, setApplicantIncome] = useState<number | undefined>(0);
const [partnerIncome, setPartnerIncome] = useState<number | undefined>(0);
const [rentalIncome, setRentalIncome] = useState<number | undefined>(0);
const [governmentBenefits, setGovernmentBenefits] = useState<number | undefined>(0);
const [livingExpenses, setLivingExpenses] = useState<number>(0);
const [dependantExpenses, setDependentExpenses] = useState<number>(0);
const [rentExpenses, setRentExpenses] = useState<number>(0);
const [transportExpenses, setTransportExpenses] = useState<number>(0);
const [otherExpenses, setOtherExpenses] = useState<number>(0);
const [mortgagePayment, setMortgagePayment] = useState<number>(0);
const [personalLoanPayment, setPersonalLoanPayment] = useState<number>(0);
const [carLoanPayment, setCarLoanPayment] = useState<number>(0);
const [creditCard, setCreditCard] = useState<number>(0);

const loanTypeOptions = [
    LoanType.Personal,
    LoanType.Business,
    LoanType.Car,
    LoanType.Equipment
  ];

const maritalStatusOptions = [
    MaritalStatus.Single,
    MaritalStatus.Married,
    MaritalStatus.Divorced,
    MaritalStatus.Widowed,
    MaritalStatus.Separated,
    MaritalStatus.DeFacto
  ];  

const states = [
  State.NSW,
  State.VIC,
  State.QLD,
  State.WA,
  State.SA,
  State.TAS,
  State.ACT,
  State.NT
]

function calculateServiceability(): void {
  // TODO: Add calculation logic later
  console.log("Calculating serviceability...");
}

return (
  <main className="min-h-screen bg-[#5614bb] flex items-center justify-center px-4 py-12">
<div className="w-full max-w-6xl mx-auto">
  <div className="bg-white rounded-3xl shadow-2xl p-8">

{/* Header */}
<div className="mb-8">
<h1> Serviceability Calculator </h1>
<span>.</span>
<p>Assess your borrowing power by calculating your ability to service a loan based on your income, expenses, and other financial commitments. </p>
</div>

{/* Personal Loan Details */}
<div className="mb-8">
        <h2 className="mb-4">Personal Loan Details</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left column */}

          <div className="flex-1 space-y-4">

            {/* Requested Amount */}
            <LoInput 
            label="Requested Amount ($5K-$70K)"
            value={loanAmount?.toString() || ""}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            symbol="$"
            />

            {/* Requested Duration */}
            <LoSlider
            label="Requested Duration"
            min={1}
            max={7}
            step={1}
            defaultValue={3}
            value={termYears}
            onValueChange={setTermYears}
            valueFormatter={(val) => `${val} year${val > 1 ? "s" : ""}`}
            />

            {/* Interest Rate */}
            <LoInput
            label="Interest Rate"
            value={interestRate?.toString() || ""}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            symbol="$"
            />

          </div>

          {/* Right column */}

          <div className="flex-1 space-y-4">

            {/* Requested Product */}
            <LoDropdown
            label="Requested Product"
            items={loanTypeOptions}
            />

            {/* Broker Fee */}
            <LoInput
            label="Broker Fee (up to $1,990)"
            value={brokerFee?.toString() || ""}
            onChange={(e) => setBrokerFee(Number(e.target.value))}
            symbol="$"
            />

            {/* Establishment Fee */}
            <LoInput
            label="Establishment Fee (from $0 to $695)"
            value={establishmentFee?.toString() || ""}
            onChange={(e) => setEstablishmentFee(Number(e.target.value))}
            symbol="$"
            />

          </div>
        </div>
      </div>

{/* Applicant Details */}
<div className="mb-8">
  <h2 className="mb-4">Applicant Details</h2>
  <div className="flex flex-col md:flex-row gap-6">
          {/* Left column */}
          <div className="flex-1 space-y-4">
            {/* Marital Status */}
            {/* State */}
          </div>
          {/* Right column */}
          <div className="flex-1 space-y-4">
            {/* Number of Dependants */}
            {/* Residential Status */}
          </div>
        </div>
      </div>

{/* Monthly Income Details */}
<div className="mb-8">
  <h2 className="mb-4">Monthly Income Details</h2>
  <div className="flex flex-col md:flex-row gap-6">
          {/* Left column */}
          <div className="flex-1 space-y-4">
            {/* Applicant's Income After Tax */}
            {/* Rental Income */}
          </div>
          {/* Right column */}
          <div className="flex-1 space-y-4">
            {/* Partner's Income After Tax*/}
            {/* Government Benefits */}
          </div>
        </div>
      </div>

</div>


</div>
</main>
)

}