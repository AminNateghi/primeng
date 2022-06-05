import { User } from "./user.model";

export interface Profile {
  image: Avatar | null;
  info: Info | null;
  user: User | null;
}

export interface Avatar {
  image: string;
  fileName: string;
}

export interface Info {
  amount: number;
  date: Date;
  status: InfoStatus;
  fund: string;
}

export enum InfoStatus {
  none = 0,
  opened = 1,
  done = 2,
  reject = 3,
}

export const Status = [
  { name: 'None', id: 0 },
  { name: 'Opened', id: 1 },
  { name: 'Done', id: 2 },
  { name: 'Reject', id: 3 },
];