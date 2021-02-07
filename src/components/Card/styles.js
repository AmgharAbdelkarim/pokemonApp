import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  > div {
    padding: 10px;
  }
  p {
    margin: 0;
  }

  .Card_img {
    text-align: center;
  }

  .Card_types {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .Card_type {
    padding: 5px 10px;
    margin: 10px 10px 10px 0;
    border-radius: 5px;
    background: cyan;
    color: #fff;
  }

  .Card_name {
    text-align: center;
    text-transform: capitalize;
    font-weight: 800;
    > p {
      padding: 10px;
    }
  }

  .Card_info {
    > div {
      display: flex;
      justify-content: space-between;
    }
  }

  .Card_data {
    padding-bottom: 10px;
    > p {
      padding: 10px;
    }
  }

  .Card_data .title {
    font-weight: 700;
    > p {
      padding: 10px;
    }
  }
`;
