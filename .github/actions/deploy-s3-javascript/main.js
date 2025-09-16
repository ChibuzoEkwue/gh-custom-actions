import * as core from "@actions/core";
import * as github from "@actions/github";
import { exec } from "@actions/exec";

const run = () => {
	core.notice("Deploy to AWS S3 action starting...");
};

run();
