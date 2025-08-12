import { chromium } from "playwright-core";
import { Browserbase } from "@browserbasehq/sdk";

export const takeWebsiteScreenshot = async (url: URL): Promise<Buffer> => {

  // NOTE: if we get on paid plan 20 usd we will get stealth mode and automatic captcha solving
  // for example currently whiteaway page is not visible because of captcha
  const bb = new Browserbase({ apiKey: process.env.BROWSERBASE_API_KEY! });
  const session = await bb.sessions.create({
    projectId: process.env.BROWSERBASE_PROJECT_ID!,
  });

  const browser = await chromium.connectOverCDP(session.connectUrl);
  const defaultContext = browser.contexts()[0];

  if (!defaultContext) {
    throw new Error("No default context found");
  }

  const page = defaultContext.pages()[0];

  if (!page) {
    throw new Error("No page found in the default context");
  }

  await page.goto(url.href);

  // Create a CDP session for faster screenshots
  const client = await defaultContext.newCDPSession(page);

  // Capture the screenshot using CDP
  const { data } = await client.send("Page.captureScreenshot", {
    format: "png",
    quality: 70,
  });

  await page.close();
  await browser.close();

  // Convert base64 to buffer and save
  const buffer = Buffer.from(data, "base64");

  return buffer;
};
