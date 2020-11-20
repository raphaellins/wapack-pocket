import WalletOperation from "../models/WalletOperation";
import { database } from "../config/Admin";

export async function createOperation(request: any, response: any) {
  const requestWalletOperation: WalletOperation = request.body;

  if (request.body == null) {
    return response.status(400).json({ detail: "Especify the Operation!" });
  }

  if (!isValid(requestWalletOperation)) {
    return response.status(400).json({
      detail: "Invalid Operation",
      requestBody: requestWalletOperation,
    });
  }

  createOperationEntity(request, requestWalletOperation);

  createRecurrencyOperations(request, requestWalletOperation);

  return response.json({ detail: "Operation created with sucess!" });
}

export async function deleteOperation(request: any, response: any) {
  const { operationId } = request.params;

  if (!operationId) {
    return response.status(400).json({ detail: "operationId cannot be null" });
  }

  await database.collection("draws").doc(operationId).delete();

  return response.json({ result: `Operation Id: ${operationId} deleted` });
}

export async function getOperation(
  request: any,
  response: any
): Promise<WalletOperation> {
  const { operationId } = request.params;

  if (!operationId) {
    return response.status(400).json({ detail: "operationId cannot be null" });
  }

  const operationDetail = await database
    .collection("wallet")
    .doc(operationId)
    .get();

  return response.json(operationDetail);
}

export async function findOperation(
  request: any,
  response: any
): Promise<Array<WalletOperation>> {
  const requestWalletOperation: WalletOperation = request.body;

  console.log("Request", requestWalletOperation);

  const operationDetail = await database
    .collection("wallet")
    // .where("id", "==", operationId)
    .get();

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

async function createRecurrencyOperations(
  request: any,
  wallet: WalletOperation
) {
  if (wallet.recurrencyQuantity > 1) {
    let index: number = 1;

    let operationDate = new Date(wallet.operationDate);

    for (; index < wallet.recurrencyQuantity; index++) {
      const walletEntity: WalletOperation = wallet;

      if (walletEntity.recurrencyType == "MONTH") {
        walletEntity.operationDate = new Date(
          operationDate.setMonth(operationDate.getMonth() + index)
        );
      } else if (walletEntity.recurrencyType == "WEEK") {
        walletEntity.operationDate = new Date(
          operationDate.setDate(operationDate.getDate() + 1 * 7)
        );
      }

      operationDate = new Date(walletEntity.operationDate);

      createOperationEntity(request, walletEntity);
    }
  }
}

async function createOperationEntity(
  request: any,
  requestWalletOperation: WalletOperation
) {
  requestWalletOperation.createdAt = new Date();
  requestWalletOperation.updatedAt = new Date();
  requestWalletOperation.userId = request.user.user_id;

  await database.collection("wallet").add(requestWalletOperation);
}
