var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://localhost:5000/";
var util = require("util");

describe("API TEST", () => {
  it("returns data for GET request", () => {
    request.get({ url: baseUrl }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      console.log(body);
    });
  });
});
