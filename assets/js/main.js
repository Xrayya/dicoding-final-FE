import Sidebar from "./components/Sidebar.js";
import AllBooksPage from "./pages/AllBooksPage.js";
import DashboardPage from "./pages/DasboardPage.js";
import Page from "./pages/Page.js";

const dashboardPage = new DashboardPage();
const allBooksPage = new AllBooksPage();

Sidebar.bindElementOnClick("btn-page-dashboard", () => {
  Page.moveToPage(dashboardPage);
});
Sidebar.bindElementOnClick("btn-page-all-books", () => {
  Page.moveToPage(allBooksPage);
});
