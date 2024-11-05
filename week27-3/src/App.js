// App.js
import React, { useState } from "react";
import axios from "axios";

  // 사용자 ID로 API에서 사용자 이름을 가져오는 함수
  export const fetchUserName = async (userId) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      return response.data.name;
    } catch {
      throw new Error("사용자를 찾을 수 없습니다. ID를 확인하세요.");
    }
  };

  // 숫자 문자열을 받아 합을 계산하는 함수
  export const calculateSum = (numbersString) => {
    const numbersArray = numbersString.split(",").map(Number);
    return numbersArray.reduce((acc, num) => acc + num, 0);
  };


function App() {
  const [id, setId] = useState("");
  const [numbers, setNumbers] = useState("");
  const [userName, setUserName] = useState("");
  const [sum, setSum] = useState(null);

  // 버튼 클릭 시 호출되는 메인 함수
  const handleFetchAndCalculate = async () => {
    try {
      // 사용자 이름 가져오기
      const name = await fetchUserName(id);
      setUserName(name);

      // 숫자 합계 계산하기
      const totalSum = calculateSum(numbers);
      setSum(totalSum);
    } catch (err) {
      console.log(err.message);
      setUserName("");
      setSum(null);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>사용자 정보와 숫자 합계 계산</h1>
      <div>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID 값을 입력하세요"
          style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
        />
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="숫자들을 입력하세요 (예: 4,5,9)"
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button
          onClick={handleFetchAndCalculate}
          style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px" }}
        >
          조회하기
        </button>
      </div>
      {userName && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <p>
            <strong>사용자 이름:</strong> {userName}
          </p>
          <p>
            <strong>숫자들의 합:</strong> {sum}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
