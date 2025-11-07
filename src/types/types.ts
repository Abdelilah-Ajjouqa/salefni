export interface CreditTypes {
    id: string,
    label: string,
    defaultAnnualRate: number,
    defaultFees: number,
    defaultInsuranceRate: number,
    maxMonths: number,
    minAmount: number,
    maxAmount: number
}

export interface EmploymentTypes {
    id: string,
    label: string
}

export interface Jobs {
    id: string,
    label: string
}

export interface Application {
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

interface Amortization {
    month: number,
    interest: number,
    principal: number,
    remaining: number
}

export interface Simulations {
    id: number,
    creditTypeId: CreditTypes['id'],
    amount: number,
    months: number,
    annualRate: number,
    fees: number,
    insuranceRate: number,
    monthlyPayment: number,
    totalCost: number,
    apr: number,
    amortization: Amortization[],
    createdAt: string
}

export interface Notifications {
    id: number,
    type: string,
    applicationId: number,
    title: string,
    seen: boolean,
    createdAt: string
}

export interface Admins {
    id: number,
    email: string,
    password: string
}

export interface Settings {
    currency: string,
    maxSimRowsPreview: number,
    allowGuestApplications: boolean
}