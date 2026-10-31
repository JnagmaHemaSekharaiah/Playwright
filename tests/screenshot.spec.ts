import {test,expect,Locator} from "@playwright/test";

test("Screenshot",async ({page}) =>
{

    await page.goto("https://testautomationpractice.blogspot.com/");
     

    const timestamp = Date.now();
    const path ="";

    await page.screenshot({path:"screenshot/"+"fullpage"+timestamp+".png", fullPage:true});



}
);