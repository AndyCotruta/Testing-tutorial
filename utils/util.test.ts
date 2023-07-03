import { describe, expect, test } from "@jest/globals";
import { isNumber, sum } from "./util";
import puppeteer from "puppeteer";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("check if input is a number", () => {
  const number = 1;
  const string = "hello";
  expect(isNumber(number)).toBe(true);
  expect(isNumber(string)).toBe(false);
});

test("Should add two numbers", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  await page.click("#firstNumber");
  await page.type("#firstNumber", "2");
  await page.click("#secondNumber");
  await page.type("#secondNumber", "4");
  await page.click("#addNumbers");
  const finalResult = await page.$eval("#result", (el) => el.textContent);
  expect(finalResult).toBe("6");
}, 10000);
