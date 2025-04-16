import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Container from "./components/Container";

const TEMP = [
  {
    title: "memo 1",
    content: "memo 1 content",
    createAt: 1743920753833, // 시간 값 (생성 시간) new Date().getTime()
    updateAt: 1743920753833, // 시간 값 (수정 시간)
  },
  {
    title: "memo 2",
    content: "memo 2 content",
    createAt: 1743920753833, // 시간 값 (생성 시간) new Date().getTime()
    updateAt: 1743920753833, // 시간 값 (수정 시간)
  },
];

function App() {
  const [memos, setMemos] = useState(TEMP);
  const [selectIdx, setSelectIdx] = useState(0);

  const handleMemoChange = (newMemo) => {
    let newMemos = [...memos];
    newMemos[selectIdx] = newMemo;
    setMemos(newMemos);
  };

  const handleAddMemo = () => {
    let newMemo = {
      title: "Untitled",
      content: "",
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };
    setMemos([...memos, newMemo]);
    setSelectIdx(memos.length);
  };

  return (
    <div className="main">
      <SideBar
        memos={memos}
        selectIdx={selectIdx}
        setSelectIdx={setSelectIdx}
        onAddMemo={handleAddMemo}
      />
      <Container memo={memos[selectIdx]} onMemoChange={handleMemoChange} />
    </div>
  );
}

export default App;
