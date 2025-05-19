import { LoanType } from "@/constants/enums";
import { useState } from "react";

const [loanAmount, setLoanAmount] = useState<number | undefined>(0);
const [termYears, setTermYears] = useState

const loanTypeOptions = [
    LoanType.Personal,
    LoanType.Business,
    LoanType.Car,
    LoanType.Equipment,
  ];