import React from "react"
import { Container, DivFullWidth, NextTripImage } from "../../routes/styles"
const NextTrip = () => {
  return <DivFullWidth>
    <NextTripImage src={NextTrip} style={{ width: "100%" }}>
      <Container>
        <div style={{ height: "240px", color: "white" }}>
          <h1 style={{ color: 'black', padding: "18px", position: "absolute", bottom: "45px", backgroundColor: "white", color: "#919190", fontSize: "42px", fontWeight: "700" }}>NexTrip</h1>
        </div>
      </Container>
    </NextTripImage>
  </DivFullWidth>
}
export default NextTrip