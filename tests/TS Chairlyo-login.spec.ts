import{expect, test} from '../Fixtures/fixtures'
import LoginPage from '../Pages/LoginPage';
import loginLocators from './Login.locators';


test.describe('Login',()=>{
   //to define repeatable things we make variable by :
  // const email='admin@chairlyo.com'
  // const password='adminpassword'
  // const baseUrl = 'https://stage.chairlyo.com/login'
  let loginPage:LoginPage;

test.beforeEach('Navigate to chairlyo',async({page, baseUrl})=>{
  loginPage = new LoginPage(page);
  await loginPage.navigateToChairlyo(baseUrl);
})

test('Login with valid credentials', async ({ email, password, page }) => {
  //to define repeatable things we make variable by :
//  await page.goto(baseUrl);
//await page.locator('[type="email"]').fill('admin@chairlyo.com');

await loginPage.loginToChairlyo(email, password);
await loginPage.verifyLoginSuccess();
await loginPage.verifyDashboard();

// await page.locator(loginLocators.emailInput).fill("email");
await expect(page.getByText('Dashboard').nth(1)).toBeVisible();

  //2. Expect a title "to contain" a substring.
  // await page.locator('#email').fill('admin@chairlyo.com');
 //  await page.locator('[name="email"]').fill(email);
 //await page.getByPlaceholder('e.g. xyz@gmail.com').fill('email');
 //await page.getByRole('textbox',{name:email}).fill(email);
//  await page.locator(loginLocators.passwordInput).fill("adminpassword");

 //await page.locator('/html/body/div[1]/div/div/div[2]/div/form/div[1]/div[2]/div/div/input').fill(password);
// await page.locator(loginLocators.loginButton).click();

 //await page.getByRole('button',{name:'log in'}).click();
 //await page.pause();
 
//await page.getByRole('textbox',{name:"•••••••••"}).fill(password);
//  await expect(page.getByRole(loginLocators.alertMessage)).toBeVisible();
// await expect(page.getByRole('alert')).toHaveText('SuccessLogin successful!')
});

test('Verify Email and password Field Value',async({email,password})=>{
  //Email input field value verification
  await loginPage.fillEmail(email);
  await loginPage.verifyEmailFieldValue(email);

  //Password input field value verification
  await loginPage.fillPassword(password);
  await loginPage.verifyPasswordFieldValue(password);

  //Click Login Button
  await loginPage.clickLoginButton();

   //Verify Login Success
  await loginPage.verifyLoginSuccess();
})


});

//await pageXOffset.locator('table').locator('td').filter({hasText})
// test('get started link', async ({ page }) => {