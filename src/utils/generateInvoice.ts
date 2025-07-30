import fs from "fs";
import path from "path";
import type { Browser } from "puppeteer-core";

let puppeteer: typeof import("puppeteer-core");
let executablePath: string;
let launchArgs: string[];

if (process.env.VERCEL && process.env.NODE_ENV === "production") {
  puppeteer = require("puppeteer-core");
  const chromium = require("@sparticuz/chromium");
  executablePath = await chromium.executablePath();
  launchArgs = chromium.args;
} else {
  puppeteer = require("puppeteer");
  executablePath = undefined as any; // Let Puppeteer decide locally
  launchArgs = [];
}

type InvoiceItem = {
  name: string;
  qty: number;
  unitPrice: number;
  tax: number;
  amount: number;
};

type InvoiceData = {
  invoiceNumber: string;
  date: string;
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: string;
};

export async function generateInvoice(data: InvoiceData): Promise<Buffer> {
  const templatePath = path.join(process.cwd(), "src", "templates", "invoice.html");
  let html = fs.readFileSync(templatePath, "utf-8");

  // Replace placeholders
  html = html.replace("{{invoiceNumber}}", data.invoiceNumber);
  html = html.replace("{{date}}", data.date);
  html = html.replace("{{customerName}}", data.customerName);
  html = html.replace("{{customerEmail}}", data.customerEmail);
  html = html.replace("{{customerAddress}}", data.customerAddress);
  html = html.replace("{{subtotal}}", data.subtotal.toFixed(2));
  html = html.replace("{{tax}}", data.tax.toFixed(2));
  html = html.replaceAll("{{total}}", data.total.toFixed(2));
  html = html.replace("{{paymentMethod}}", data.paymentMethod);

  const itemRows = data.items.map(item => `
    <tr>
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>$${item.unitPrice.toFixed(2)}</td>
      <td>${item.tax.toFixed(2)}%</td>
      <td>$${item.amount.toFixed(2)}</td>
    </tr>
  `).join("");
  html = html.replace("{{items}}", itemRows);

  const browser: Browser = await puppeteer.launch({
    headless: true,
    args: launchArgs,
    executablePath: executablePath,
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "20mm", bottom: "20mm" },
  });

  await browser.close();
  return Buffer.from(pdfBuffer);
}
