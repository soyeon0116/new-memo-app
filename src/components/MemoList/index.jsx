import "./index.css";

export default function MemoList({ memos, selectIdx, setSelectIdx }) {
  return (
    <div>
      {memos.map((memo, idx) => (
        <div className="listDiv" onClick={() => setSelectIdx(idx)}>
          {memo.title}
          <button>X</button>
        </div>
      ))}
    </div>
  );
}
