import { Heading } from "../ui/Heading";
import { Row } from "../ui/Row";

const TYPE_HORIZONTAL = "horizontal";
const TYPE_VERTICAL = "vertical";

function Bookings() {
  return (
    <Row type={TYPE_HORIZONTAL}>
      <Heading as="h1">All bookings</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Bookings;
