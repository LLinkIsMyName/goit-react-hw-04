import FriendsListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <>
      <ul className={style.friendList}>
        {friends.map((friend) => {
          return (
            <li className={style.friendListItem} key={friend.id}>
              <FriendsListItem friend={friend} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendsList;