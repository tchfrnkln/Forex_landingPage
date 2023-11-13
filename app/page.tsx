import Author from "./components/Author";
import CountTime from "./components/CountTime";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Program from "./components/Program";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-black to-purple-500 min-h-screen">
      <Navbar></Navbar>
      <FrontPage></FrontPage>
      <CountTime></CountTime>
      <Program></Program>
      <Author></Author>
      <CountTime></CountTime>
    </main>
  )
}
