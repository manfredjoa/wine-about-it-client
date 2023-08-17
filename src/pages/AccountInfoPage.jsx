import OrderHistory from "../components/accountInfo/OrderHistory";
import Favorites from "../components/accountInfo/Favorites";
import UserInfoCard from "../components/accountInfo/UserInfo";

export default function AccountInfoPage({ user }) {
  return (
    <div className="flex pb-5">
      <div className="w-1/3">
        <UserInfoCard user={user} />
      </div>
      <div className="w-1/3">
        <OrderHistory user={user} />
      </div>
      <div className="w-1/3">
        <Favorites user={user} />
      </div>
    </div>
  );
}
