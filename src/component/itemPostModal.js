import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";

// 게시물 데이터를 보여주는 Modal

const ItemBox = styled(Button)``;

const TagName = styled.span`
  font-weight: bold;
`;

function ItemPostModal({ value, number, category }) {
  const [modal, setModal] = useState(false);

  useEffect(() => {}, [value]);

  return (
    <>
      <Modal
        show={modaltableAdd}
        onHide={() => {
          setModalTableAdd(false);
          dispatch({ type: "RESET" });
        }}
      >
        <Modal.Header>
          <h2>테이블 </h2>
        </Modal.Header>
        <Modal.Body>
          <TextInput
            onChange={onChange}
            text="text"
            placeholder="테이블 이름"
            name="tableName"
            autoComplete="off"
            value={tableName}
            maxLength="8"
          />
          <p className="underSelectP">* 1자 이상 8자 이하로 입력해 주세요.</p>
          {errorText !== "" && (
            <div error={errorText} style={{ color: "red" }}>
              {errorText}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            className="categoryAddBtn"
            name="tableAddBtn"
            onClick={onClickBtn}
          >
            추가
          </Button>
          <Button
            variant="outline-dark"
            className="categoryBackBtn"
            onClick={() => {
              setModalTableAdd(false);
              dispatch({ type: "RESET" });
            }}
          >
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemPostModal;
