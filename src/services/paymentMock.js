const nock = require("nock");

function setupPaymentGatewayMock() {
  const paymentBase = "https://fake-payment-gateway.com";

  // Successful payment mock
  nock(paymentBase)
    .post("/pay")
    .reply(200, {
      paymentId: "pay_123",
      status: "SUCCESS"
    });

  // Failed payment mock example
  nock(paymentBase)
    .post("/pay-fail")
    .reply(400, {
      errorCode: "CARD_DECLINED"
    });
}

module.exports = { setupPaymentGatewayMock };
