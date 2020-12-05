import { IProject, IProjectWithId } from 'components/UserProjects/types';


export interface ProjectProps extends IProject {
  onProjectChange: (project: IProjectWithId) => void;
  id: number;
}