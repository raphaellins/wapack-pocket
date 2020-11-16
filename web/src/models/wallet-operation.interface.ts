export default interface WalletOperation {
  operationDate: Date;
  operationDescription: string;
  operationTitle: string;
  operationType: string;
  categories: Array<string>;
  recurrencyQuantity: number;
  recurrencyType: string;
  amount: number;
  account: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  paid: boolean;
}
