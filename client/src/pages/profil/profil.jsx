import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
`;
const Title = styled.h1``;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const UserItem = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  & label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: gray;
  }
  & input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;
const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  & label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
`;
const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;
const Option = styled.option``;

const Button = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  cursor: pointer;
  padding: 7px 10px;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 20px;
`;

const Profil = () => {
  return (
    <Container>
      <Title>Profil</Title>
      <Form>
        <UserItem>
          <label>id</label>
          <input type="text" placeholder="alonzocr1995" />
        </UserItem>
        <UserItem>
          <label>fullName</label>
          <input type="text" placeholder="Alon" />
        </UserItem>
        <UserItem>
          <label>Email</label>
          <input type="text" placeholder="alon@gamil.com" />
        </UserItem>
        <UserItem>
          <label>Password</label>
          <input type="password" placeholder="At least 7 characters long" />
        </UserItem>
        <UserItem>
          <label>Phone</label>
          <input type="text" placeholder="+18485738" />
        </UserItem>
        <UserItem>
          <label>Address</label>
          <input type="text" placeholder="tunisia" />
        </UserItem>
        <UserItem>
          <label>Gender</label>
          <GenderContainer>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="male">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </GenderContainer>
        </UserItem>
        <UserItem>
          <label>Active</label>
          <Select name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </UserItem>
        <Button>update</Button>
      </Form>
    </Container>
  );
};

export default Profil;
