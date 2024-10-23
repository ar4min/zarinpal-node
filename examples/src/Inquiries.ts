// Import the main ZarinPal class from your SDK
import { ZarinPal } from 'zarinpal-node-sdk/src';

// Initialize the ZarinPal instance with your configuration
const zarinpal = new ZarinPal({
    merchantId: 'your-merchant-id',
    sandbox: true,
  });

async function inquireTransaction() {
  try {
    // Use the 'inquiries' resource to inquire about a transaction
    const inquiryResult = await zarinpal.inquiries.inquire({
      authority: 'A000000000000000000000000000000000', // Replace with the actual authority code
    });

    // Handle the response
    console.log('Inquiry Result:', inquiryResult);
  } catch (error) {
    // Handle errors
    console.error('Error during inquiry:', error);
  }
}

// Call the function to perform the inquiry
inquireTransaction();
