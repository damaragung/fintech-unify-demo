import React from 'react';
import styled from '@emotion/styled';
import Card from 'unify-react-mobile/build/Card';

const UserProfile = styled.div`
  display: flex;
  margin-bottom: 16px;

  img {
    width: 40px;
    height: 40px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 6px 0px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;
    flex-direction: column;
    overflow: hidden;

    h2 {
      font-size: 17px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.7);
      line-height: 22px;
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0px;
      overflow: hidden;
    }

    span {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.38);
      font-style: italic;
    }
  }
`;

const UserPoints = styled.div`
  display: flex;
`

const UserPointsItem = styled.div(({ first }) => {
  return `
    display: flex;
    margin-right: ${first ? '16px' : 0};
    padding-right: ${first ? '16px' : 0};
    flex: 1 1 0%;
    border-right: ${first ? '1px solid rgb(224, 224, 224)' : ''};

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      align-self: center;
    }

    h3 {
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.38);
      margin: 0px;

      &:last-child {
        font-size: 14px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.7);
        letter-spacing: 0px;
        line-height: 20px;
        margin: 0px;
      }
    }
  `
});

export default () => {
  return (
    <Card margin="0">
      <UserProfile>
        <img src="https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-16.jpg" alt="profile-img" />
        <div>
          <h2>User Profile Name</h2>
          <span>Verified</span>
        </div>
      </UserProfile>
      <UserPoints>
        <UserPointsItem first>
          <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/a150137c.svg" alt="tokopoints" />
          <div>
            <h3>Tokopoints</h3>
            <h3>14.548 pt</h3>
          </div>
        </UserPointsItem>
        <UserPointsItem>
        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/a150137c.svg" alt="tokopoints" />
          <div>
            <h3>Kupon Saya</h3>
            <h3>0 Kupon</h3>
          </div>
        </UserPointsItem>
      </UserPoints>
    </Card>
  )
}