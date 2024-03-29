import React, { Component } from "react";
import { UserContext, SkillContext } from "../../../App";

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {(name) => (
            <SkillContext>
              {(skill) => (
                <h2>
                  My name is {name}, I teach {skill}.
                </h2>
              )}
            </SkillContext>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default ComponentC;
