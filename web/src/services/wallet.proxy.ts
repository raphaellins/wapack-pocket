import WalletOperation from "../models/wallet-operation.interface";

export default class WalletProxy {
  public listAllOperations(): Array<WalletOperation> {
    return [];
  }

  /**
   * Delete a specific operation
   * @param id
   */
  public deleteOperation(id: number): void {}

  /**
   * Retrieve the specific operation
   * @param id
   */
  public getOperation(id: number): WalletOperation {
    return {} as WalletOperation;
  }

  /**
   * Update some information on Wallet Operation (income or expense)
   * @param operation
   */
  public updateOperation(operation: WalletOperation) {}
}
