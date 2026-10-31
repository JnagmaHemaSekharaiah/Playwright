import {test,expect} from '@playwright/test';

test("drop down", async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator("#country").selectOption( {index:1} ); //indexig
    // await page.locator("#country").selectOption({value:'india'}); // attribute
    //  await page.locator("#country").selectOption( {label:"India"} ); // label
    // await page.locator("#country").selectOption("India"); // text


     const dropofOptions  = page.locator("#country>option"); 
     console.log("Number of options ->"+await dropofOptions.count());
     
     await expect(dropofOptions).toHaveCount(10);

    
     const textOfArray:string[] = (await dropofOptions.allTextContents())
                                  .map(text=>text.trim()) 
       

     expect(textOfArray).toContain("Japan");



     for(const textOfele of textOfArray )
     {
        console.log(textOfele);
     }

 
     await page.waitForTimeout(5000);






}

);
