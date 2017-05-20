import { createSelector } from 'reselect';

const getSearchText = (state) => state.projects.searchText;
const getProjects = (state) => state.projects.all;

export const getFilteredProjects = createSelector(
  [ getSearchText, getProjects ],
  (searchText, projects) => {
    if (searchText) {
      let projectsFiltered = [];
      projects.forEach( project => {
        if (project.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ) {
          projectsFiltered.push(project);
        }
      });
      return projectsFiltered;
    } else {
      return projects;
    }
  }
)