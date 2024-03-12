import React from 'react';
import styled from "styled-components";

import {Link} from "react-router-dom";


const SaleBtn = styled.button`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid grey;
  background-color: white;
`
const SaleLink = styled(Link)`

  font-size: 20px;
  text-decoration: none;
  text-line-through-color: black;
`
const SaleWrapper = styled.div`
  width: 500px;
  height: 500px;
  font-size: 50px;
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid grey;

`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px;
`
const SmallBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid grey;
  margin-left:30px;
  margin-top:20px;
  
`

const SmallBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Main = () => {
    return (
        <Wrapper>
            <SaleBtn>
                <SaleLink to='/sale'>��ǰ</SaleLink>
            </SaleBtn>
            <SmallBtnWrapper>
                <SmallBtn><SaleLink to='/sale'>�ŷ�����</SaleLink></SmallBtn>
                <SmallBtn><SaleLink to='/return'>��ǰ �� ��ȯ</SaleLink></SmallBtn>
                <SmallBtn><SaleLink to='/itemmanage'>������</SaleLink></SmallBtn>
            </SmallBtnWrapper>
        </Wrapper>

    )
}

export default Main;