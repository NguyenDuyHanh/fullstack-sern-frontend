import { useSelector, useDispatch } from "react-redux";

import HomeHeader from "../../components/Header/HomeHeader";
import Banner from "./Banner";



function HomePage() {
  // Lấy state từ redux
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  // Nếu cần dispatch action
  const dispatch = useDispatch();

  return (
    <>
      <HomeHeader/>
      <Banner/>
    </>
  );
}

export default HomePage;
