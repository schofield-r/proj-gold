process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest");
const connection = require("../db/connection");
const chai = require("chai");
const chaiSorted = require("chai-sorted");
const { expect } = chai;

chai.use(chaiSorted);

describe("/api", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  describe("GET /projects", () => {
    it("200 response, gets all projects with sort order defaulting to DESC", () => {
      return request(ap)
        .get("/api/projects")
        .expect(200)
        .then(res => {
          expect(res.body.projects[0]).to.contain.keys(
            "project_id",
            "created_by",
            "date_posted",
            "status",
            "description",
            "votes",
            "project_title"
          );
          expect(res.body.projects).to.be.sortedBy("date_posted", {
            descending: true
          });
        });
    });
    it("200 response, gets all projects that are in testing phase", () => {
      return request(app)
        .get("/api/projects?status=testing")
        .expect(200)
        .then(res => {
          expect(res.body.projects[0]).to.contain.keys(
            "project_id",
            "created_by",
            "project_leader",
            "date_posted",
            "status",
            "description",
            "votes",
            "project_title"
          );
          expect(res.body.projects[0].status).to.equal("testing");
        });
    });
  });
  describe("GET /projects/:project_id", () => {
    it("200 response, gets a project by its id", () => {
      return request(app)
        .get("/api/projects/1")
        .expect(200)
        .then(res => {
          expect(res.body.project).to.be.an("object");
        });
    });
  });
  describe("DELETE /project/:project_id", () => {
    it("204 response, deletes project by id", () => {
      return request(app)
        .delete("/api/projects/1")
        .expect(204);
    });
  });
  describe("PATCH /projects/:project_id", () => {
    it("200 response, patches votes on projects and returns the updated project", () => {
      return request(app)
        .patch("/projects/1")
        .send({ votes: 1 })
        .expect(200)
        .then(res => {
          expect(res.body.project.votes).to.equal(1);
        });
    });
  });
  describe("PATCH /projects/:project_id/status", () => {
    it("200 response, patches status of project and returns updated project", () => {
      return request(app)
        .patch("/projects/1/status")
        .send({ status: testing })
        .expect(200)
        .then(res.body.project.status)
        .to.equal("testing");
    });
  });
  describe("PATCH /projects/:project_id/lead_project", () => {
    it("200 response, patches a pitch to a project by a dev- adding a new description and a project-leader", () => {
      return request(app)
        .patch("/api/projects/2/lead_project")
        .send({ description: "this is a project", project_leader: "user1" })
        .expect(200)
        .then(res => {
          expect(res.body.project.project_leader).to.equal("user1");
          expect(res.body.project.description).to.equal("this is a project");
        });
    });
  });
  describe("POST /projects/:project_id/tags", () => {
    it("204 response, posts tags to the projects_tags table with the amount of people needed for each tag", () => {
      return request(app)
        .post("/api/projects/1/tags")
        .send({ tag_id: 1, count: 2 })
        .expect(204)
        .then(res => {
          expect(res.body.tag.count).to.equal(2);
          expect(res.body.tag.tag_id).to.equal(1);
        });
    });
  });
  describe("DELETE /projects/:project_id/tags", () => {
    it("200 response, deletes a tag from the projects_tag table", () => {
      return request(app)
        .delete("/api/projects/4/tags")
        .send({ tag_id: 6 })
        .expect(200)
        .then(res => {
          expect(res.body.msg).to.equal("tag deleted");
        });
    });
  });
  describe("POST /projects/:project_id/collaborate", () => {
    it("201 response, posts a project collaborator and the tag they have selected to contribute the skill of to the project_collaborators table", () => {
      return request(app)
        .post("/api/projects/7/collaborate")
        .send({ tag_id: 10, username: "userTest" })
        .expect(204)
        .then(res => {
          expect(res.body.project_collaborator.tag_id).to.equal(10);
        });
    });
  });
  describe("GET /projects/:project_id/comments", () => {});
  describe("POST /projects/:project_id/comments", () => {});
  describe("DELETE /comments/:comment_id", () => {});
  describe("GET /comments/:comment_id", () => {});
  describe("POST /users", () => {});
  describe("GET /users/:username", () => {});
  describe("DELETE /users/:username", () => {});
  describe("POST /users/:username/update_preferences", () => {});
  describe("DELETE /users/:username/update_preferences", () => {});
  describe("POST /users/:username/update_tags", () => {});
  describe("DELETE /users/:username/update_tags", () => {});
});
