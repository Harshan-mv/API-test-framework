const nock = require("nock");

const paymentBaseUrl = process.env.PAYMENT_BASE_URL || "https://fake-payment-gateway.com";

// Only mock payment API in NON-production
if (process.env.NODE_ENV !== "production") {
  nock(paymentBaseUrl)
    .persist()
    .post("/pay")
    .reply(function (uri, requestBody) {
      let body;

      try {
        body = typeof requestBody === "string"
          ? JSON.parse(requestBody)
          : requestBody;
      } catch {
        body = {};
      }

      const simulateFail = Boolean(body.simulateFail);
      const amount = body.amount || 0;

      if (simulateFail) {
        return [
          400,
          {
            status: "FAILED",
            errorCode: "CARD_DECLINED",
            message: "Card was declined"
          }
        ];
      }

      return [
        200,
        {
          status: "SUCCESS",
          paymentId: "pay_" + Math.random().toString(36).substring(2, 8),
          amount
        }
      ];
    });
}

async function chargePayment({ amount, simulateFail = false }) {
  const res = await fetch(`${paymentBaseUrl}/pay`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, simulateFail })
  });

  const data = await res.json();

  if (!res.ok) {
    const err = new Error("Payment failed");
    err.details = data;
    throw err;
  }

  return data;
}

module.exports = { chargePayment };
