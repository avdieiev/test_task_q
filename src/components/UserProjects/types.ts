export interface IUserProjects {
  name: string;
  projects: IProject[];
}

export interface IProject {
  title: string;
  description: string;
  duration: {
    value: string;
    units: string;
  }
}

export interface IUpdateJSON {
  name?: string;
  projectName?: string;
  project?: IProjectWithId,
}

export interface IProjectWithId extends IProject {
  id: number;
}

export type IUnits = 'year' | 'month' | 'day';