import style from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => {
    console.log("triggers function to fetch data ");
    return (
        <div>
            <button className={style.loadMoreBtn} onClick={onClick}>Load more</button>
        </div>
    );
};

export default LoadMoreBtn;
