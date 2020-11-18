import WalletOperation from "../models/WalletOperation";
import { database } from "../config/Admin";

export async function createOperation(request: any, response: any) {
  const requestWalletOperation: WalletOperation = request.body;

  if (request.body == null) {
    return response.status(400).json({ detail: "Especify the Operation!" });
  }

  if (!isValid(requestWalletOperation)) {
    response.status(400).json({
      detail: "Invalid Operation",
      requestBody: requestWalletOperation,
    });
  }

  requestWalletOperation.createdAt = new Date();
  requestWalletOperation.updatedAt = new Date();
  requestWalletOperation.userId = request.user.user_id;

  await database.collection("wallet").add(requestWalletOperation);

  return response.json({ detail: "Operation created with sucess!" });
}

export function deleteOperation(request: any, response: any) {
  const requestWalletOperation: WalletOperation = request.body;

  console.log("Request", requestWalletOperation);

  return response.json({ result: "Everything works" });
}

export function getOperation(
  request: any,
  response: any
): Array<WalletOperation> {
  const requestWalletOperation: WalletOperation = request.body;

  console.log("Request", requestWalletOperation);

  return response.json({ result: "Everything works" });
}

export function findOperation(
  request: any,
  response: any
): Array<WalletOperation> {
  const requestWalletOperation: WalletOperation = request.body;

  console.log("Request", requestWalletOperation);

  return response.json({ result: "Everything works" });
}

export function updateOperation(
  request: any,
  response: any
): Array<WalletOperation> {
  const requestWalletOperation: WalletOperation = request.body;

  console.log("Request", requestWalletOperation);

  return response.json({ result: "Everything works" });
}

function isValid(wallet: WalletOperation): boolean {
  if (
    !wallet.operationDate ||
    !wallet.operationDescription ||
    !wallet.operationTitle ||
    !wallet.operationType ||
    !wallet.categories ||
    !wallet.recurrencyQuantity ||
    !wallet.recurrencyType ||
    !wallet.amount ||
    !wallet.account ||
    !wallet.paid
  ) {
    return false;
  }

  return true;
}
