export interface CreditTypesInterface {
    id: string,
    label: string,
    defaultAnnualRate: number,
    defaultFees: number,
    defaultInsuranceRate: number,
    maxMonths: number,
    minAmount: number,
    maxAmount: number
}

export interface EmploymentTypesInterface {
    id: string,
    label: string
}

export interface JobsInterface {
    id: string,
    label: string
}

export interface ApplicationInterface {
    id: number,
    simulationId: number,
    fullName: string,
    email: string,
    phone: string,
    creditTypeId: string,
    employmentTypeId: string,
    jobId: string,
    monthlyIncome: number,
    comment: string,
    status: string,
    priority: boolean,
    notes: (string | number)[],
    createdAt: string,
    updatedAt: string
}

interface AmortizationInterface {
    month: number,
    interest: number,
    principal: number,
    remaining: number
}

export interface SimulationsInterface {
    id: number,
    creditTypeId: CreditTypesInterface['id'],
    amount: number,
    months: number,
    annualRate: number,
    fees: number,
    insuranceRate: number,
    monthlyPayment: number,
    totalCost: number,
    apr: number,
    amortization: AmortizationInterface[],
    createdAt: string
}

export interface NotificationsInterface {
    id: number,
    type: string,
    applicationId: number,
    title: string,
    seen: boolean,
    createdAt: string
}

export interface AdminsInterface {
    id: number,
    email: string,
    password: string
}

export interface SettingsInterface {
    currency: string,
    maxSimRowsPreview: number,
    allowGuestApplications: boolean
}