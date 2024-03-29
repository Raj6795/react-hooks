import React, { Component } from "react";
// import { UserContext } from "../../../App";
import { UserConsumer } from "../../../utils/UserContext";
import { SkillConsumer } from "../../../utils/SkillContext";

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(name) => (
            <SkillConsumer>
              {(skill) => (
                <h2>
                  My name is {name}, I teach {skill}
                </h2>
              )}
            </SkillConsumer>
          )}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentF;
