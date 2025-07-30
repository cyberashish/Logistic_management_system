// app/api/generate-invoice/route.ts
import { generateInvoice } from "@/utils/generateInvoice";
import { NextRequest } from "next/server";

// Define the InvoiceData type according to your invoice structure
type InvoiceData = {
  invoiceNumber: string;
  date: string;
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  items: Array<{
    name: string;
    qty: number;
    unitPrice: number;
    tax: number;
    amount: number;
  }>;
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: string;
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const orderId = searchParams.get("orderId") || "default-001";


  const mockOrder = {
    invoiceNumber: orderId,
    date: "2025-07-30",
    customerName: "Ashish Kumar",
    customerEmail: "cyberashish321@gmail.com",
    customerAddress: "Shastri Nagar, Giridih, Jharkhand, 815301, India",
    items: [
      { name: "Tailwind-Admin (Business)", qty: 1, unitPrice: 100, tax: 0, amount: 100 }
    ],
    subtotal: 100,
    tax: 0,
    total: 100,
    paymentMethod: "VISA •••• 4242"
  };


  const pdf = await generateInvoice(mockOrder);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=invoice-${orderId}.pdf`,
    },
  });
}