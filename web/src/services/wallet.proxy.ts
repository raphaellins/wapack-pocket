import WalletOperation from "../models/wallet-operation.interface";
import axios from "axios";

export default class WalletProxy {
  public urlBase = () => {
    const authToken = localStorage.getItem("@WapackPocket:token");
    axios.defaults.headers.common = { Authorization: `${authToken}` };

    return process.env.REACT_APP_API;
  };

  public async listAllOperations(
    walletMonth: Date
  ): Promise<Array<WalletOperation>> {
    const url: string = `${this.urlBase()}/wallet-operation/find-by-month/${walletMonth.toISOString()}`;

    const response = await axios.get(url);

    if (response.status !== 200) {
      return Promise.resolve([]);
    }

    return response.data;
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
