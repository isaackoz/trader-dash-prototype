import { WebSocketProvider } from "@/websocket/websocket-provider";
import { DashboardFooter, DashboardHeader } from "./_components/header-footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WebSocketProvider>
        <DashboardHeader />
        <div className="bg-gradient-to-b from-black to-slate-900">
          {children}
        </div>
        <DashboardFooter />
      </WebSocketProvider>
    </>
  );
};

export default DashboardLayout;
