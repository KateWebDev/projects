import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { Heading } from "../ui/Heading";
import { Row } from "../ui/Row";
import { Button } from "../ui/Button";

function Cabins() {
  const [showNewCabin, setShowNewCabin] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter | Sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>
      <Button onClick={() => setShowNewCabin((prev) => !prev)}>{showNewCabin ? "Close form" : "Add new Cabin"}</Button>
      {showNewCabin && (
        <Row>
          <CreateCabinForm />
        </Row>
      )}
    </>
  );
}

export default Cabins;
