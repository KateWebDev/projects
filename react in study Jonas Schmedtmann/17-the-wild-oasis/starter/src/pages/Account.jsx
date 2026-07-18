import { Heading } from "../ui/Heading";
import { Row } from "../ui/Row";

const TYPE_HORIZONTAL = "horizontal";
const TYPE_VERTICAL = "vertical";

export default function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row type={TYPE_VERTICAL}>
        <Heading as="h3">Update user data</Heading>
        <p>Update user data form</p>
      </Row>

      <Row type={TYPE_VERTICAL}>
        <Heading as="h3">Update password</Heading>
        <p>Update user password form</p>
      </Row>
    </>
  );
}
