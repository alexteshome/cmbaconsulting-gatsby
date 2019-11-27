import React from "react"
import "semantic-ui-css/semantic.min.css"
import Layout from "../components/layout"
import { Segment, Container, Header, List } from "semantic-ui-react"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="About" url="/about" description="About the Company" />
      <Segment
        vertical
        inverted
        basic
        textAlign="center"
        padded
        style={{
          paddingTop: "5.5em",
          paddingBottom: "4em",
          backgroundColor: "#2d5d7d",
        }}
      >
        <Header as="h1" style={{ fontSize: "3.5em" }}>
          About the Company
        </Header>
      </Segment>
      <Segment
        vertical
        basic
        padded
        style={{
          paddingTop: "4em",
          paddingBottom: "5em",
        }}
      >
        <Container>
          <List bulleted celled size="massive" style={{ color: "#042337" }}>
            <List.Item>
              We have been in business since 2005. We are bonded and insured.
            </List.Item>

            <List.Item>
              We specialize in IT healthcare technologies (for medical clinics
              and hospitals), and IT professional services for businesses.
            </List.Item>
            <List.Item>
              We supply all types of hardware and software solutions for an
              infrastructure.
            </List.Item>
            <List.Item>
              We provide technical services and consulting for a network
              infrastructure, servers, workstations, laptops, tablets, mobile
              devices, database support, disaster recovery planning, system
              migrations, network cabling and so much more.
            </List.Item>
            <List.Item>
              We offer project management, IT consulting and IT professional
              services for short or long-term projects.
            </List.Item>
            <List.Item>
              We also offer Cyber Security, Scalability Assessments, IT
              Compliance, Integration Services, and Assessment & Planning.
            </List.Item>
          </List>
        </Container>
      </Segment>
    </Layout>
  )
}
