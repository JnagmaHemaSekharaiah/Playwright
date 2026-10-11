
import {test,expect} from "@playwright/test";

// fixture - global variable  Ex : page , browser 

test("Title of the test",async ({page})=>
{

   await page.goto("https://practice-automation.com/");

   let Title:String =  await page.title();

   console.log("Tilte = "+Title);

   await expect(page).toHaveTitle("Learn and Practice Automation | automateNow");

}

);

