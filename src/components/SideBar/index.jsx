import MemoList from "../MemoList";
import "./index.css";
export default function SideBar({ memos, selectIdx, setSelectIdx, onAddMemo }) {
  return (
    <div className="sidebarSection">
      <h1>MEMO</h1>
      <MemoList
        memos={memos}
        selectIdx={selectIdx}
        setSelectIdx={setSelectIdx}
      />
      <button className="addMemoBtn" onClick={onAddMemo}>
        +
      </button>
    </div>
  );
}
