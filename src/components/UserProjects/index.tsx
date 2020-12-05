import React, { useState } from 'react';
import { SingleProject } from 'components/SingleProject';
import { default as json } from "./user_projects.json"
import { IProject, IProjectWithId, IUpdateJSON, IUserProjects } from 'components/UserProjects/types';


export const UserProjects: React.FC = (props) => {
  const [ data, setData ] = useState<IUserProjects>(json as IUserProjects)
  const [ isJsonView, setJsonView ] = useState(false)

  const updateProjects = (prevProjects: IProject[], updatedProject?: IProjectWithId): IProject[] => {
    if (updatedProject) {
      return prevProjects.map((prevProj, prevProjIdx) => {
        if (prevProjIdx === updatedProject.id) {
          return {
            ...prevProj,
            title: updatedProject.title,
            description: updatedProject.description,
            duration: updatedProject.duration,
          }
        }
        return prevProj
      })
    }
    return prevProjects;
  }

  const updateJson = ({
    name = '',
    projectName = '',
    project,
  }: IUpdateJSON) => {

    setData(prevData => ({
      ...prevData,
      name,
      projects: updateProjects(prevData.projects, project),
    }))
  }

  const updateProject = (project: IProjectWithId) => updateJson({ project })

  console.log(data);
  return (
    <section className="user-projects">
      <form>
        {isJsonView ? (
          { data }
        ) : (
            <div className="workspace">
              <div className="name">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => updateJson({ name: e.target.value })}
                />
              </div>
              <div className="projects-names">
                Projects
                {data.projects.map((project, projectIdx) => (
                  <input
                    type="text"
                    name="project-name"
                    readOnly
                    value={project.title}
                    key={projectIdx}
                  />
                ))}
            </div>
              <div className="projects-details">
                {data.projects.map((project, projectIdx) => (
                  <SingleProject
                    {...project}
                    key={projectIdx}
                    id={projectIdx}
                    onProjectChange={updateProject}
                  />
                ))}
              </div>
            </div>
          )}
        <div className="controls">
          <button type="button" className="json-view" onClick={() => setJsonView(!isJsonView)}>
            View form JSON
          </button>
          <button type="button">Cancel</button>
          <button onClick={() => { }}>Save</button>
        </div>
      </form>
    </section>
  )
}