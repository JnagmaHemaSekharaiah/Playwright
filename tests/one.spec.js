/*
getByRole() getByText() getByAltText() getByPlaceHolder()

*/

import {test,expect,Locator} from "@playwright/test";

test("Locators Exercise",async ({page}) =>
{

    await page.goto("https://testautomationpractice.blogspot.com/");
   // let alt = page.getByAltText("Picture of Build your own computer");
   // await expect(alt).toBeVisible();
   // Alt Text
   // await page.getByText("HTC smartphone").toBeVisible() ;


   // let ele  = page.getByText("Data Entry");
   // await expect(ele).toBeVisible();


    let role =  page.getByRole("textbox",{name:'Phone'});
    await role.fill("hello");



}

);
