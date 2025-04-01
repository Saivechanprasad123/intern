import React from "react";
import Home from "./Components/Pages/Home";
import Dashboard from "./Components/Dashboard/AdminDashboard";
import EmpDashboard from "./Components/Dashboard/EmpDashboard";
import Leads from "./Components/Leads/Leads";
import Sales from "./Components/Leads/Sales";
import EmpManagement from "./Components/Pages/EmpManagement";
import PaymentHistory from "./Components/History/PaymentHistory";
import Staff from "./Components/Organization/Staff";
import Understaff from "./Components/Organization/Understaff";
import EmpLeave from "./Components/Organization/EmpLeave";
import Department from "./Components/Organization/Department";
import Designation from "./Components/Organization/Designation"; 
import Uprising from "./Components/Organization/Uprising";
import Marketing from "./Components/Department/Marketing";
import HR from "./Components/Department/HR";
import Finance from "./Components/Department/Finance";
import Support from "./Components/Department/Support";
import IT from "./Components/Department/IT"; 
import Admin from "./Components/Department/Admin";
import Notifications from "./Components/Pages/Notifications";
import SupportTickets from "./Components/Pages/SupportTickets";
import Contact from "./Components/Pages/Contact";
export function MainContent({ currentView }) {
  const renderContent = () => {
    switch (currentView.toLowerCase()) {
      case "home":
        return <Home />;
      case "dashboard":
        return <Dashboard />;
      case "emp dashboard":
        return <EmpDashboard />;
      case "leads":
        return <Leads />;
      case "sales":
        return <Sales />;
      case "emp management":
        return <EmpManagement />;
      case "payment history":
        return <PaymentHistory />;
      case "staff":
        return <Staff />;
      case "understaff":
        return <Understaff />;  
      case "emp leave":
        return <EmpLeave />;
      case "department":
        return <Department />;
      case "designation":
        return <Designation />;
      case "uprising":  
        return <Uprising />;
      case "marketing":
        return <Marketing />;
      case "hr":
        return <HR />;
      case "finance":
        return <Finance />; 
      case "support":
        return <Support />;
      case "it":
        return <IT />;
      case "admin":
        return <Admin />;
      case "notifications":
        return <Notifications />;
      case "contact":
        return <Contact />;
      case "support tickets":
        return <SupportTickets />;
      
      
      default:
        return (
          <p className="text-gray-600">
            This section is under construction. Content for "{currentView}" will
            be available soon.
          </p>
        );
    }
  };

  return (
    <div className="p-6">
      {currentView !== "home"}
      {renderContent()}
    </div>
  );
}