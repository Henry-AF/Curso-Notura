export type KiwifyEvent =
  | "order_approved"
  | "subscription_renewed"
  | "subscription_canceled"
  | "subscription_late"
  | string;

export interface KiwifyCustomer {
  full_name: string;
  email: string;
  CPF?: string;
  phone?: string;
  ip?: string;
}

export interface KiwifySubscription {
  id: string;
  status: string;
  charge_frequency?: string;
  start_date?: string;
  next_payment?: string;
  cancel_date?: string;
}

export interface KiwifyOrderData {
  id: string;
  Customer: KiwifyCustomer;
  Subscription?: KiwifySubscription;
  product?: {
    id: string;
    name: string;
    type?: string;
  };
  Payment?: {
    method: string;
    installments?: number;
    status?: string;
  };
}

export interface KiwifyWebhookPayload {
  webhook_event_type: KiwifyEvent;
  token?: string;
  data: KiwifyOrderData;
}
