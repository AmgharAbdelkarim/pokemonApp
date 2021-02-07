import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #fff;
  .filter_box {
    width: 20%;
    border-right: 1px solid #e7e7e7;
    @media (max-width: 900px) {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #e7e7e7;
    }
    .clear_button {
      padding: 8px 10px;
      color: #007aff;
      font-size: 12px;
      letter-spacing: 0;
      line-height: 14px;
      &:hover {
        border-radius: 4px;
        background-color: #f7f7f7;
      }
    }
    > h5 {
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 23px;
      color: #04336b;
      margin: 8px 16px;
    }
    > ul {
      margin: 0px;
      list-style-type: none;
      padding: 0px 10px;

      .selected {
        border: 1px solid rgba(194, 209, 217, 0.27);
        border-radius: 4px;
        background-color: #f7f7f7;
      }
      > li {
        cursor: pointer;
        padding: 8px 12px;
        > span {
          color: #566684;
          font-size: 16px;
          font-weight: 500;
          padding: 8px;
        }
        &:hover {
          background: #e7e7e7;
        }
        margin-top: 12px;
      }
    }
  }
  .item_container {
    padding: 25px;
    width: 75%;
    @media (max-width: 900px) {
      width: 100%;
    }
    .item_wrapper {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }
    .button_wrapper {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
  }
`;
