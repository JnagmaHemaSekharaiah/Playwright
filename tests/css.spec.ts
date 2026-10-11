import { expect,test } from "@playwright/test";


test ("******CSS Exercise****", async({page}) => {

   await page.goto("https://demowebshop.tricentis.com/");
   
   let searhInput = page.locator("#small-searchterms");

   searhInput.fill("T-shirt");
   
   await page.waitForTimeout(2000);
   
   await searhInput.isVisible;


}

)
