import { EnumWalletType, Wallet } from '../../interfaces/Wallet';

export const walletsFake: Wallet[] = [
  {
    id: 1,
    balance: 24500.12,
    accountNumber: '0921',
    color: '#9D86DF',
    name: 'SAVINGS',
    closingDate: null,
    dueDate: null,
    type: EnumWalletType.DEBIT,
  },
  {
    id: 2,
    balance: 809.07,
    accountNumber: '2981',
    color: '#DF8686',
    name: 'PERSONAL',
    closingDate: null,
    dueDate: null,
    type: EnumWalletType.DEBIT,
  },
  {
    id: 3,
    balance: 576.8,
    accountNumber: '7912',
    color: '#86CADF',
    name: 'EXPENSES',
    closingDate: null,
    dueDate: null,
    type: EnumWalletType.CREDIT,
  },
];
