import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  useEffect(() => {
    console.log("렌더링 완료되었습니다.");
    console.log({
      name,
      nickname,
    });

    return () => {
      console.log("cleanup");
      console.log(name);
    };
  },[]);

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
