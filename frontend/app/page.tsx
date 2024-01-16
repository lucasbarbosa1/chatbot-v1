import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start gap-10 p-24 bg-gradient-to-r from-gray-600 to-gray-800">
      <Header />
      <ChatSection/>
    </main>
  );
}
