import {test,expect} from "@playwright/test";


test("first test", async({page})=>
{

    await page.goto("https://www.w3schools.com/tags/att_img_alt.asp");

    const ele = page.getByPlaceholder("Search...");

    await ele.fill("Hello");

    const search_btn = await page.getByRole("button", { name:"button",exact:true } );
    
    search_btn.click();



}
);