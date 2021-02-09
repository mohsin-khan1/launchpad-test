import { React } from "react";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import ContentArea from "../components/content-area";

function Dashboard() {
  return (
    <div>
      <SideBar />
      <section>
        <Header />
        <div className="container">
          <ContentArea />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
