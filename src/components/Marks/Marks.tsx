import { HeartIcon, BookmarkIcon } from './Icons';

export type MarksPropsType = {
  postId: number;
  likes: number;
  isLike: boolean;
  isBookmark: boolean;
  onLikeSubmit: () => void;
  onBookmarkSubmit: () => void;
};

const Marks = ({ likes, isLike, isBookmark, onLikeSubmit, onBookmarkSubmit }: MarksPropsType) => {
  return (
    <div className="w-11 h-28 border border-solid bg-white border-slate-300 rounded-xl flex flex-col justify-evenly items-center fixed z-10 ml-3">
      <div className="w-4/5 h-2/5 flex flex-col justify-center items-center">
        <button
          onClick={onLikeSubmit}
          className="w-full rounded-full flex justify-center items-center active:animate-button-jump"
        >
          <HeartIcon filled={isLike} />
        </button>
        <span className="text-xs text-slate-500 mt-0.5">{likes}</span>
      </div>
      <div className="w-4/5 h-1/5 flex justify-center items-center">
        <button
          onClick={onBookmarkSubmit}
          className="w-full rounded-full flex justify-center items-center active:animate-button-jump"
        >
          <BookmarkIcon filled={isBookmark} />
        </button>
      </div>
    </div>
  );
};

export default Marks;
