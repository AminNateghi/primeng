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

export interface User {
  name: string;
  family: string;
  age: number;
}

export enum InfoStatus {
  none = 0,
  opened = 1,
  done = 2,
  reject = 3,
}