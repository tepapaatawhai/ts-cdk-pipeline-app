import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'mrpackethead',
  authorAddress: 'andrew.frazer@raindancers.cloud',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'ts-cdk-pipeline-app',
  projenrcTs: true,
  repositoryUrl: 'https://git.us-west-2.github.source.3p.codecatalyst.aws/v1/DOC/ts-cdk-pipeline-app/ts-cdk-pipeline-app',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();