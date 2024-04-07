import style from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={style.profile}>
            <div>
                <img className={style.avatar}
                    src={avatar}
                    alt="User avatar"
                />
                <p className={style.username}>{username}</p>
                <p className={style.tag}>@{tag}</p>
                <p className={style.location}>{location}</p>
            </div>

            <ul className={style.statsList}>
                <li className={style.statsListItem}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={style.statsListItem}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={style.statsListItem}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
};
    

export default Profile;