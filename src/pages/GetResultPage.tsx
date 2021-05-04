import React from "react";
import { getAllDocs } from "../apis/firebase";
import {
  StyledColumn,
  StyledEmptyDiv,
} from "../components/layouts/StyledSimpleLayout";

function GetResultPage() {
  const downloadFile = async () => {
    const allHistories = await getAllDocs();

    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(
      new Blob([JSON.stringify(allHistories)], { type: "text/txt" })
    );
    a.download = "test.txt";

    // Append anchor to body.
    document.body.appendChild(a);
    a.click();

    // Remove anchor from body
    document.body.removeChild(a);
    console.log("@@@", JSON.stringify(allHistories));
  };

  return (
    <StyledColumn crossAxisAlignment="center">
      <StyledEmptyDiv height="48px" />
      <button onClick={downloadFile}>Click Here to Download the Result</button>
      <StyledEmptyDiv height="48px" />
    </StyledColumn>
  );
}

export default GetResultPage;
