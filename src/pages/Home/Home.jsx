import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
          <Posts />
          <SideBar />
      </div>
    </>
  );
}
