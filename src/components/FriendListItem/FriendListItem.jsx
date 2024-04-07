import style from "./FriendListItem.module.css";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={name}>{name}</p>
            {isOnline ? (<p className={style.online}>Online</p>) : (<p className={style.offline}>Offline</p>)
            }
        </div>

    );
};


export default FriendListItem;