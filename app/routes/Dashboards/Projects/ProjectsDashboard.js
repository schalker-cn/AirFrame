import React from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Card,
  CardBody,
  Badge,
  Table,
  CardTitle,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  ListGroup,
  ListGroupItem,
  Media,
  Col,
} from "./../../../components";
import { setupPage } from "./../../../components/Layout/setupPage";

import { HeaderMain } from "../../components/HeaderMain";

import { TasksMedia } from "../../components/ProjectsDashboards/TasksMedia";
import { TinyDonutChart } from "../../components/ProjectsDashboards/TinyDonutChart";
import { TinyDonutChartAllProjects } from "../../components/ProjectsDashboards/TinyDonutChartAllProjects";
import { TimelineMini } from "../../components/Timeline/TimelineMini";
import { DraggableProjects } from "./DraggableProjects";

const ProjectsDashboard = () => (
  <Container>
    <Row className="mb-5">
      <Col lg={12}>
        <HeaderMain title="Projects" className="mb-4 mb-lg-5" />
      </Col>
    </Row>
    <Row>
      <Col lg={4}>
        <Card className="mb-3">
          <CardBody>
            <CardTitle tag="h6" className="mb-3">
              Tasks
            </CardTitle>
            <InputGroup>
              <Input placeholder="Search Tasks..." />
              <InputGroupAddon addonType="append">
                <Button
                  color="secondary"
                  outline
                  tag={Link}
                  to="/apps/tasks/list"
                >
                  <i className="fa fa-search"></i>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem action>
              <TasksMedia iconColor="success" />
            </ListGroupItem>
            <ListGroupItem action>
              <TasksMedia iconColor="danger" id="2" />
            </ListGroupItem>
            <ListGroupItem action>
              <TasksMedia iconColor="warning" id="3" />
            </ListGroupItem>
            <ListGroupItem action>
              <TasksMedia id="4" />
            </ListGroupItem>
            <ListGroupItem
              action
              tag={Link}
              to="/apps/tasks/list"
              className="text-center"
            >
              View All Tasks
              <i className="fa fa-angle-right ml-2"></i>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
      <Col lg={4}>
        <Card className="mb-3">
          <CardBody>
            <CardTitle tag="h6">Timeline Mini</CardTitle>
            <TimelineMini
              showPillDate
              pillDate="2 Days ago"
              icon="times-circle"
              iconClassName="text-danger"
              badgeTitle="Alert"
              badgeColor="danger"
            />
            <TimelineMini
              icon="question-circle"
              iconClassName="text-warning"
              badgeTitle="Warning"
              badgeColor="warning"
            />
            <TimelineMini
              icon="info-circle"
              iconClassName="text-info"
              badgeTitle="Info"
              badgeColor="info"
            />
            <TimelineMini
              showPillDate
              pillDate="Yesterday"
              icon="plus-circle"
              iconClassName="text-primary"
              badgeTitle="Message"
              badgeColor="primary"
            />
            <TimelineMini
              icon="check-circle"
              iconClassName="text-success"
              badgeTitle="Success"
              badgeColor="success"
            />
            <TimelineMini icon="circle" badgeTitle="Obsolete" />
          </CardBody>
          <ListGroup flush>
            <ListGroupItem
              action
              tag={Link}
              to="/pages/timeline"
              className="text-center"
            >
              Timeline Details
              <i className="fa fa-angle-right ml-2"></i>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
      <Col lg={4}>
        <Card className="mb-3">
          <CardBody>
            <CardTitle tag="h6" className="mb-3">
              Projects
            </CardTitle>
            <InputGroup>
              <Input placeholder="Search Projects..." />
              <InputGroupAddon addonType="append">
                <Button
                  color="secondary"
                  outline
                  tag={Link}
                  to="/apps/projects/list"
                >
                  <i className="fa fa-search"></i>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </CardBody>
          <DraggableProjects />
        </Card>
      </Col>
    </Row>
  </Container>
);

export default setupPage({
  pageTitle: "Projects Dashboard",
})(ProjectsDashboard);
