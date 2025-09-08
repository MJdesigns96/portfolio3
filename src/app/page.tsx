import Sidebar from "./components/sidebar";
import Content from "./components/content";

export default function Home() {

  // create 2 components; left and right
  // left side will not move and is meant to sit there and show the reader my name and links to projects
  // single scroll portfolio
  // footer at the bottom with links to my github and linkedin
  return (
    <div className="fixed flex w-full h-full">
      {/* left side */}
      <Sidebar />
      {/* right side */}
      <Content />
    </div>
  );
}
