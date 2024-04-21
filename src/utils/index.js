import { Octokit } from "octokit";
import config from "../app.config";
import retry from "./retry";

const octokit = new Octokit({ auth: config.GITHUB_KEY });

export const getUser = async () => {
  return retry(async () => {
    const res = await octokit.rest.users.getAuthenticated();

    return res;
  }, 5);
};

export const getRepoes = async (user) => {
  return retry(async () => {
    const res = await octokit.paginate("GET /users/{username}/repos", {
      username: user,
    });

    return res;
  }, 5);
};

export const getRepo = async (user, repo) => {
  return retry(async () => {
    const res = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: user,
      repo: repo,
    });

    return res;
  }, 5);
};
