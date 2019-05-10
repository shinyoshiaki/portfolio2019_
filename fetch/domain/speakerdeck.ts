import puppeteer from "puppeteer";

const url = "https://speakerdeck.com/shinyoshiaki";

// chrome のインスペクターからselectorは採れる

export default async function fetchSpeakerdeck() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const navigationPromise = page.waitForNavigation({
    waitUntil: "domcontentloaded"
  });

  const options = {
    viewport: {
      width: 1920,
      height: 945
    },
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36"
  };
  await page.emulate(options);
  await page.goto(url);

  const html = await page.$eval("html", item => {
    return item.innerHTML;
  });

  const length = html.match(/<a href="\/shinyoshiaki\//g)!.length;
  console.log({ length });

  const urls: string[] = [];
  const titles: string[] = [];

  for (let i = 1; i <= length; i++) {
    const element = await page.$(
      `body > div.sd-main > div.container.py-md-4.py-3 > div > div:nth-child(${i}) > a`
    );
    const title = await (await element!.getProperty("href")).jsonValue();
    titles.push(title);
  }

  for (let i = 1; i <= length; i++) {
    console.log({ i });
    try {
      const title = titles.pop();

      await page.goto(title!);
      await navigationPromise;
      console.log({ title });

      const find = await page.$(
        `body > div.sd-main > div.deck > div.deck-embed.js-deck-embed > div > iframe`
      );

      const res = await (await find!.getProperty("src")).jsonValue();
      console.log({ res });
      urls.push(res.split("?")[0]);
    } catch (error) {}
  }

  await browser.close();

  return urls.reverse();
}
