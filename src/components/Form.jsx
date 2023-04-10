import React from "react";
import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./formstyle.css";

const Maindiv = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
const Dp = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;
const FormBox = styled.form`
  width: 65%;
  margin-bottom: 2rem;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;
const Flex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
const Star = styled.strong`
  background-color: #fc5b62;
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
  font-size: 1.125rem;
  line-height: 42px;
  text-align: center;
`;
const PriceDiv = styled.div`
  padding: 25px 25px 15px;
  border: 1px solid #ededed;
  background-color: #f8f8f8;
  border-radius: 5px;
  margin-bottom: 30px;
  height: fit-content;
  width: 35%;
`;
const PriceBtn = styled.button`
  background-color: #ff214f;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  border: none;
  padding: 2%;
  width: 100%;
  transition: 0.2s ease-in;
  &:hover {
    background: #0054a6;
  }
`;
const Form = () => {
  const [phone, setPhone] = React.useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };
  return (
    <Maindiv>
      <FormBox>
        <Flex
          style={{
            placeContent: 'center',
          }}
        >
          <Dp
            src="https://bucketdata.blob.core.windows.net/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/03/ranbir-kapoor-profile.jpg"
            alt="ranbir"
          />

          <h3 style={{ margin: 0, fontSize: "1.8rem" }}>Ranbir Kapoor</h3>
        </Flex>
        <Flex>
          <Star>✰</Star>
          <FlexColumn>
            <div>
              <h3 style={{ margin: 0, fontSize: "1.8rem" }}>Submit Form</h3>
              <h5 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 500 }}>
                {" "}
                Get Best price
              </h5>
            </div>
          </FlexColumn>
        </Flex>
        <Flex>
          <FlexColumn>
            <label>What's the occasion?</label>

            <select>
              <option>one</option>
              <option>two</option>
              <option>three</option>
              <option>four</option>
            </select>
          </FlexColumn>
          <FlexColumn>
            <label>Event Date</label>
            <input type="date" />
          </FlexColumn>
        </Flex>
        <Flex>
          <FlexColumn>
            <label>Venue Address</label>

            <input placeholder="" />
          </FlexColumn>
        </Flex>
        <Flex>
          <FlexColumn>
            <label>Budget</label>
            <input type="number" />
          </FlexColumn>
          <FlexColumn>
            <label>How many people will attend?</label>
            <input type="number" />
          </FlexColumn>
        </Flex>
        <Flex>
          <FlexColumn>
            <label>Full Name</label>

            <input />
          </FlexColumn>
        </Flex>
        <Flex>
          <FlexColumn>
            <label>Email Address (No Spam!)</label>
            <input />
          </FlexColumn>
          <FlexColumn>
            <label>Mobile Number</label>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={handleChange}
              style={{ width: "100%" }}
              inputStyle={{ width: "100%" }}
            />
          </FlexColumn>
        </Flex>
        <Flex>
          <FlexColumn>
            <label>Tell us more (we love to listen)</label>
            <textarea></textarea>
          </FlexColumn>
        </Flex>
        <Flex>
          <select style={{ padding: "2%" }}>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Send more options in my budget</label>
        </Flex>
        <hr />
      </FormBox>

      <PriceDiv>
        <Flex style={{ placeContent: "end", marginBottom: "5px" }}>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <span>Send Quotes on Whatsapp</span>
        </Flex>
        <PriceBtn>Show Best Price</PriceBtn>
      </PriceDiv>
    </Maindiv>
  );
};

export default Form;
