import { Heading } from "../ui/Heading";
import { Row } from "../ui/Row";

const TYPE_HORIZONTAL = "horizontal";
const TYPE_VERTICAL = "vertical";

function Dashboard() {
  return (
    <Row type={TYPE_HORIZONTAL}>
      <Heading as="h1">Dashboard</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Dashboard;
