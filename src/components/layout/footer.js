import React from "react"
import { Link } from "gatsby"
import {
  Segment,
  Container,
  Grid,
  List,
  Header,
  Input,
} from "semantic-ui-react"

export default () => {
  return (
    <Segment
      inverted
      vertical
      style={{ padding: "3em 0em", backgroundColor: "#084166" }}
    >
      <Container textAlign="center" style={{ fontSize: "1.15em" }}>
        <Grid
          divided
          inverted
          stackable
          verticalAlign="middle"
          textAlign="left"
        >
          <Grid.Column width={4}>
            <List inverted link>
              <List.Item as={Link} to="/about">
                About Us
              </List.Item>
              <List.Item as={Link} to="/contact">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms & Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <List link inverted size="large">
              <List.Item as="a">
                <List.Icon name="linkedin" style={{ color: "white" }} />
                LinkedIn
              </List.Item>
              <List.Item as="a">
                <List.Icon name="facebook f" style={{ color: "white" }} />
                Facebook
              </List.Item>

              <List.Item as="a">
                <List.Icon name="instagram" style={{ color: "white" }} />
                Instagram
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted as="h4">
              Subscribe to our newsletter
            </Header>
            <Input action={"OK"} placeholder="Email Address" />
          </Grid.Column>
          <Grid.Column width={4}>
            <List>
              <List.Item>info@cmbaconsulting.ca</List.Item>
              <List.Item>Ottawa, ON, Canada</List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  )
}
