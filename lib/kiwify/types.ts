export type KiwifyEvent =
  | "order_approved"
  | "subscription_renewed"
  | "subscription_canceled"
  | "subscription_late"
  | string;

export interface KiwifyCustomer {
  full_name: string;
  first_name?: string;
  email: string;
  mobile?: string;
  CPF?: string;
}

export interface KiwifySubscription {
  id: string;
  status: string;
  start_date?: string;
  next_payment?: string;
  plan?: string;
  charges?: number;
}

export interface KiwifyWebhookPayload {
  webhook_event_type: KiwifyEvent;
  order_id: string;
  order_ref?: string;
  order_status?: string;
  subscription_id?: string;
  Customer: KiwifyCustomer;
  Subscription?: KiwifySubscription;
}
