import "./index.css";
export default function Container({ memo, onMemoChange }) {
  return (
    <div className="containerSection">
      <div>
        <input
          type="text"
          className="contentTitle"
          value={memo.title}
          onChange={(e) => {
            onMemoChange({
              ...memo,
              title: e.target.value,
              updateAt: new Date().getTime(),
            });
          }}
        />
      </div>
      <div>
        <textarea
          value={memo.content}
          onChange={(e) => {
            onMemoChange({
              ...memo,
              content: e.target.value,
              updateAt: new Date().getTime(),
            });
          }}
        ></textarea>
      </div>
    </div>
  );
}
