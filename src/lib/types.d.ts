export enum Status {
  PENDING = "pending",
  ACCEPTED = "accepted",
  REJECTED = "rejected",
}
export enum Importance {
  TRIVIAL = "trivial",
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  CRITICAL = "critical",
}

export enum BillType {
  LAW = "law",
  AMENDMENT = "amendment",
  REGULAR = "regular",
}

export type User = {
  id: string;
  username: string;
  email: string;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
};

export type Democracy = {
  id: string;
  name: string;
  description?: string;
  bannner_url?: string;
  isPublic: boolean;
  color1: string;
  color2?: string;
  color3?: string;
  created_at?: string;
  updated_at?: string;
};

export type Membership = {
  id: string;
  minidemocracy_id: string;
  user_id: string;
  status: Status;
  created_at?: string;
  updated_at?: string;
};

export type Category = {
  id: string;
  minidemocracy_id: string;
  created_at?: string;
  updated_at?: string;
  name: string;
  description?: string;
};

export type Bill = {
  id: string;
  minidemocracy_id: string;
  citizen_id: string;
  name: string;
  description?: string;
  importance: Importance;
  status: Status;
  type: BillType;
  created_at?: string;
  updated_at?: string;
};

export type Post = {
  id: string;
  minidemocracy_id: string;
  citizen_id: string;
  content: string;
  created_at?: string;
  updated_at?: string;
};
