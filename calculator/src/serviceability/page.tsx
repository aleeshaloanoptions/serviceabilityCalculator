import { LoanType, MaritalStatus, State } from "@/constants/enums";
import { useState } from "react";

const [loanAmount, setLoanAmount] = useState<number | undefined>(0);
const [termYears, setTermYears] = useState<number | undefined>(3);
const [interestRate, setInterestRate] = useState<number | undefined>(0);
const [dependants, setDependants] = useState<number | undefined>(0);

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