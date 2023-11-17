import type { Project, Task } from "~/types";
import HttpFactory from "../fetchFactory";
import type { AsyncDataOptions } from "#app";
import type { FetchOptions } from "ofetch";

class ProjectRepository extends HttpFactory {
  private RESOURCE = "/projects";

  async loadTasks(projectId: string): Promise<Task[]> {
    return await this.call<Task[]>("GET", `${this.RESOURCE}/${projectId}`);
  }
}

export default ProjectRepository;
