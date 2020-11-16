import WalletOperation from "../models/wallet-operation.interface";

export default class WalletProxy {
  public listAllOperations(): Array<WalletOperation> {
    return [];
  }

  public deleteOperation(id: number): void {}

  public getOperation(id: number): WalletOperation {
    return {} as WalletOperation;
  }

  public updateOperation(operation: WalletOperation) {}
}
