import {test,expect,Locator} from "@playwright/test";

test("Raio  Actions",async ({page}) =>
{

    await page.goto("https://testautomationpractice.blogspot.com/");

    let maleRadio:Locator = page.locator("#male");  

    await expect(maleRadio).toBeVisible();
    
    await expect(maleRadio).toBeEnabled();

    expect( await maleRadio.isChecked() ).toBe(false);
    
    await page.waitForTimeout(3000);

    await maleRadio.check();

    expect(await maleRadio.isChecked()).toBe(true);


}
);







test.only("Checkbox  Actions",async ({page}) =>
{

    await page.goto("https://testautomationpractice.blogspot.com/");

    let SundayCheckbox:Locator = page.getByLabel("Sunday");  

    await expect(SundayCheckbox).toBeVisible();
    
    await expect(SundayCheckbox).toBeEnabled();

    expect( await SundayCheckbox.isChecked() ).toBe(false);
    
    await page.waitForTimeout(3000);

    await SundayCheckbox.check();

    expect(await SundayCheckbox.isChecked()).toBe(true);


}
);

