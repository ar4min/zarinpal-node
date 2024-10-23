import { ZarinPal } from 'zarinpal-node-sdk/src';

const zarinpal = new ZarinPal({
  merchantId: 'your-merchant-id',
  sandbox: true,
});

async function verifyPayment() {
  try {
    const verificationResult = await zarinpal.verifications.verify({
      amount: 10000,
      authority: 'A000000000000000000000000000000000',
    });
    console.log('Verification Result:', verificationResult);
  } catch (error) {
    console.error('Error verifying payment:', error);
  }
}

verifyPayment();
