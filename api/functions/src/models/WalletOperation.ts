import { AccountType } from "./AccountType";
import { OperationType } from "./OperationType";

export default interface WalletOperation {
  operationDate: Date;
  operationDescription: String;
  operationTitle: String;
  operationType: OperationType;
  categories: Array<String>;
  recurrencyQuantity: Number;
  recurrencyType: String;
  recurrencyDate: Date;
  amount: Number;
  account: AccountType;
  createdAt: Date;
  updatedAt: Date;
  userId: String;
  paid: boolean;
}
