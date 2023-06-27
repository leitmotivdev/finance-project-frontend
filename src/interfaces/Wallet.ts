export enum EnumWalletType {
  CREDIT = 'credit',
  DEBIT = 'debit',
  SERVICE = 'service',
  CASH = 'cash',
}

export interface Wallet {
  balance: number;
  accountNumber: string;
  color: string;
  name: string;
  type: EnumWalletType;
  closingDate: string | null;
  dueDate: string | null;
  id: number;
}