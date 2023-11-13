import { $fetch } from "ofetch";
import type { FetchOptions } from "ofetch";

import ProjectRepository from "@/repositories/projects";

interface IApiInstance {
  projects: ProjectRepository;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.baseURL,
  };

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    projects: new ProjectRepository(apiFecther),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
