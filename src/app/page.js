import Sidebar from "@/app/components/sidebar";
import Chat from "@/app/components/chat";

export default function Home() {
  return (
    <div className="main">
      <Sidebar />
      <Chat/>
    </div>
  );
}
