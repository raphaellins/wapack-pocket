export default interface Wallet{
  operationDate: Date;
  operationDescription: String;
  operationTitle: String;
  operationType: String;
  categories: Array<String>;
  recurrencyQuantity: Number;
  recurrencyType: String;
  amount: Number;
  account: String;
  createdAt: Date;
  UpdatedAt: Date;
  UserId: String;
  paid: boolean;
}