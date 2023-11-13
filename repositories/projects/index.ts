import type { Task } from "~/types";
import HttpFactory from "../fetchFactory";

class ProjectRepository extends HttpFactory {
  private RESOURCE = "/projects";

  async loadTasks(projectId: string): Promise<Task[]> {
    return await this.call<Task[]>("GET", `${this.RESOURCE}/${projectId}`);
  }
}

export default ProjectRepository;
