
import { expect,test,Locator } from "@playwright/test";


test ("******Actions****", async({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/"); 


const textbox:Locator = page.locator("input#name");
  
await  expect(textbox).toBeVisible();
await  expect(textbox).toBeEnabled();

const maxLength:string|null = await textbox.getAttribute("maxlength"); //return the value

expect(maxLength).toBe("15"); 

await textbox.fill("Jhon cena");

//console.log( "test content of FirstName: "+  await textbox.textContent());

console.log( "test content of FirstName: "+  await textbox.inputValue());

const enteredValue:string = await textbox.inputValue();

await page.waitForTimeout(4000);

expect(enteredValue).toBe("Jhon cena");


}

);


test
