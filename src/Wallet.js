import React from 'react';
import styled from '@emotion/styled';
import { css } from 'react-emotion';
import Card from 'unify-react-mobile/build/Card';
import Typography from 'unify-react-mobile/build/Typography';

const customStyle = css`
  &[data-unf="unf-card"] {
    display: block;
    position: relative;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
    background-image: url(https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/a6140317.svg);
    background-size: cover;
    margin: 16px 0px;
    padding: 16px;
    overflow: hidden;
    background-position: center top;
    border-radius: 4px !important;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 16px;
`

const Item = styled.div`
  flex: 1 1 0%;

  div {
    text-align: center;
    width: 40px;
    height: 40px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 6px 0px;
    background-color: rgb(255, 255, 255);
    padding: 8px;
    margin: auto auto 8px;
    border-radius: 50%;

    img {
      width: 24px;
      height: 24px;
    }
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.7);
    margin: 0px;
  }
  
  label {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.38);
    margin: 0px;
  }
`

export default () => {
  return (
    <Card margin="16px 0" className={customStyle} data-unf="unf-card">
      <Wrapper>
        <Typography tag={5} margin="0" main>Tokopedia Pay</Typography>
        <Typography link="www.tokopedia.com" micro>Lihat Semua</Typography>
      </Wrapper>
      <Wrapper>
        <Item>
          <div>
            <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/765fec06.png" alt="ovo" />
          </div>
          <h3>Rp 0</h3>
          <label>Points <b>0</b></label>
        </Item>
        <Item>
          <div>
            <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/812dd21f.svg" alt="ovo" />
          </div>
          <h3>Rp 0</h3>
          <label>Saldo</label>
        </Item>
      </Wrapper>
    </Card>
  )
}