/*
    We will now do some refactoring and create a ProjectContainer component. 
    This component will be responsible to fetch the list of projects, when it is mounted. 
    And we will set every other project related routes as children of this component.

    This component will simply invoke the fetchProjects action
    and will provide an Outlet component to render any child nodes
*/

import React, { useEffect } from "react";
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";
import { Outlet } from "react-router-dom";
import { useMembersDispatch } from "../../context/members/context";
import { fetchMembers } from "../../context/members/actions";


const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch();
  const memberDispatch = useMembersDispatch();
  useEffect(() => {
    fetchProjects(projectDispatch);
    fetchMembers(memberDispatch);
  }, [projectDispatch, memberDispatch]);
  return <Outlet />;
};

export default ProjectContainer;