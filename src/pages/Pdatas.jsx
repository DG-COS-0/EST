import PdataTable from "../features/pdatas/PdataTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Pdatas() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All pdatas</Heading>
      </Row>
      <Row>
        <PdataTable />
      </Row>
    </>
  );
}
export default Pdatas;
