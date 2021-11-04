//import { Route, Link } from "react-router-dom";

const List = ({ documents }) => {
  console.log(documents);
  return (
    <div className="Results">
      <div className="Structure">
        <div className="Result-list">
          {!Array.isArray(documents || documents === undefined) ? (
            "loading"
          ) : (
            <ul>
              {documents.map((document, i) => (
                <li key={"li" + i}>
                  <div className="DocumentCard" key={"div" + i}>
                    <label className="DocumentNum" key={"num" + i}>
                      {document.num}
                    </label>{" "}
                    <label
                      className="DocumentDiscipline"
                      key={"discipline" + i}
                    >
                      {document.discipline}
                    </label>{" "}
                    <label className="DocumentReg" key={"reg" + i}>
                      {document.regDate}
                    </label>{" "}
                    <label className="DocumentSentTo" key={"sent" + i}>
                      {document.sentTo.name}
                    </label>{" "}
                    <label className="DocumentSubj" key={"subj" + i}>
                      {document.subject}
                    </label>{" "}
                    <label className="DocumentStatus" key={"status" + i}>
                      {document.status}
                    </label>{" "}
                    <label className="DocumentCritical" key={"critical" + i}>
                      {document.critical}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
