import { expect, test } from '../Fixtures/fixtures';
import LoginPage from '../Pages/LoginPage';
import OrganizationPage from '../Pages/OrganizationPage';
import DashboardPage from '../Pages/DashboardPage';
test.describe('Login', () => {
    let loginPage: LoginPage;
    let organizationPage: OrganizationPage;
    let dashboardPage: DashboardPage;
    let editLocator: any;
    let deleteLocator: any;

    test.beforeEach('Navigate to Chairlyo Login Page', async ({ baseUrl, page, email, password }) => {
        loginPage = new LoginPage(page);
        organizationPage = new OrganizationPage(page);
        dashboardPage = new DashboardPage(page);
        await loginPage.navigateToChairlyo(baseUrl);
        await loginPage.loginToChairlyo(email, password);
        await loginPage.verifyLoginSuccess();
        await loginPage.verifyDashboard();
    });

    test('Navigate to Organization Page', async () => {
        await dashboardPage.gotoOrganizationPage();
        await organizationPage.verifyOrganizationPage();
    });

    test.skip('Navigate to Organization Page', async () => {
        test.slow();
        await dashboardPage.gotoOrganizationPage();
        await organizationPage.verifyOrganizationPage();
    });

    test('Add a new Organization', async ({ organizationData }) => {
        await dashboardPage.gotoOrganizationPage();
        await organizationPage.verifyOrganizationPage();

        await organizationPage.clickAddOrganizationButton();
        await organizationPage.verifyAddOrganizationForm();

        await organizationPage.addOrganization(organizationData);

        await organizationPage.verifyOrganizationCreated(organizationData.name);
    });

})
