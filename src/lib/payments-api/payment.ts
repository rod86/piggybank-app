
enum PaymentStatus {
    PENDING = 'pending',
    PAID = 'paid'
}

interface Payment {
    id?: string;
    concept?: string;
    status: PaymentStatus;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
}

export { Payment, PaymentStatus };