import {test,expect,Locator} from "@playwright/test";

test("Screenshot",async ({page}) =>
{

    await page.goto("https://testautomationpractice.blogspot.com/");
     

    const timestamp = Date.now();

    await page.screenshot({path:"screenshot/"+"homepage"+timestamp+".png"});



}
);