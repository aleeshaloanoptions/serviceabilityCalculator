import React from 'react';
import { LoanType, MaritalStatus, State } from "@/constants/enums";
import { useState } from "react";

export default function Home() {

const [loanAmount, setLoanAmount] = useState<number | undefined>(0);
const [termYears, setTermYears] = useState<number | undefined>(3);
const [interestRate, setInterestRate] = useState<number | undefined>(0);
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
    MaritalStatus.De Facto
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

function calculateServiceability(

)

return (
  <main>
<div>
<h1> Serviceability Calculator </h1>
<span>.</span>
<p>Assess your borrowing power by calculating your ability to service a loan based on your income, expenses, and other financial commitments. </p>
</div>
)

</main>
}