import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import "./Services.css";
import { useDispatch } from "react-redux";
import { removeTreat } from "../../redux/treatSystem";

function TreatPage() {
  const treatSystem = useSelector((state) => state.treatSystem);
  console.log(treatSystem);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Treats</h1>
      <Row>
        {treatSystem.treats.map((treat) => (
          <Col key={treat.id} sm={12} md={6} lg={4} xl={3}>
            <div className="treat">
              <div className="service-icon">
                <img src={treat.img} alt="" />
              </div>
              <h2>{treat.title}</h2>
            </div>
            <button
              onClick={() => dispatch(removeTreat(treat.id))}
              className="btn btn-danger"
            >
              Delete
            </button>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default TreatPage;
