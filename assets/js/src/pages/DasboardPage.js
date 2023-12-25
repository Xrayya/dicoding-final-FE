import BookTabelController from "../components/TableController.js";
import Page from "./Page.js";

/**
 * @extends Page
 */
class DashboardPage extends Page {
  constructor() {
    super("dashboard");
    this.#setupTables();
  }

  #setupTables() {
    const finishedTableController = new BookTabelController(
      "dashboard-finished-tabel",
    );
    finishedTableController.setBookTypes(["finished"]);
    finishedTableController.maximumLine(10);
    finishedTableController.excludeColumn("Completed");
    finishedTableController.dispatchData();
    finishedTableController.listenChangeStatus();

    const unfinishedTableController = new BookTabelController(
      "dashboard-unfinished-tabel",
    );
    unfinishedTableController.setBookTypes(["unfinished"]);
    unfinishedTableController.maximumLine(10);
    unfinishedTableController.excludeColumn("Completed");
    unfinishedTableController.dispatchData();
    unfinishedTableController.listenChangeStatus();

    const latestTableController = new BookTabelController(
      "dashboard-latest-tabel",
    );
    latestTableController.setBookTypes(["unfinished", "finished"]);
    latestTableController.maximumLine(10);
    latestTableController.excludeColumn("Completed");
    latestTableController.dispatchData();
    latestTableController.listenChangeStatus();
  }
}

export default DashboardPage;
