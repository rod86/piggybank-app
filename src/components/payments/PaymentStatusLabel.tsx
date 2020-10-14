import React from 'react'
import { Badge } from 'react-bootstrap';
import { PaymentStatus } from '@lib/payments-api/payment';

interface PaymentStatusLabelProps {
    status: PaymentStatus;
}

const PaymentStatusLabel: React.FC<PaymentStatusLabelProps> = ({ status }) => {
    let variant = "warning", 
        text = "Pending";

    if (status === PaymentStatus.PAID) {
        variant = "success";
        text = "Paid"
    }

    return (
        <Badge pill variant={variant} className="lg py-1 px-2">
            {text}
        </Badge>
    );
};

export default PaymentStatusLabel;
