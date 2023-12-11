import React from "react";
import faker from "faker";
import { CommentDetails } from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

export default function App() {
  return (
    <>
      <ApprovalCard>
        <CommentDetails
          name="gogo"
          date="today at 17:00"
          text="get prop's information "
          img={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          name="ross"
          date="today at 20:00"
          text="the king un the north "
          img={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          name="gunther"
          date="today at 17:00"
          text="go drunk you are home"
          img={faker.image.image()}
        />
      </ApprovalCard>
    </>
  );
}
