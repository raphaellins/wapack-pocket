import WalletOperation from "../models/WalletOperation";

export function createOperation(request: any, response: any) {
  const requestWalletOperation: WalletOperation = request.body;

  console.log("Request for create", requestWalletOperation);

  return response.json({ result: "Everything works1" });
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
