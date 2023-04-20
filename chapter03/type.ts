export interface Subscriber {
  email: string;
  rec_count: number;
}

export type Rank = 'best' | 'good';

export interface Coupon {
  code: string;
  rank: Rank;
}

export interface Email {
  from: string;
  to: string;
  subject: string;
  body: string;
}
