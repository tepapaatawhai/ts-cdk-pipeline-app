import { cdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const project = new cdk.JsiiProject({
  author: 'mrpackethead',
  authorAddress: 'andrew.frazer@raindancers.cloud',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
  name: 'ts-cdk-pipeline-app',
  projenrcTs: true,
  repositoryUrl: 'https://git.us-west-2.github.source.3p.codecatalyst.aws/v1/DOC/ts-cdk-pipeline-app/ts-cdk-pipeline-app',
  minNodeVersion: '18.12.0',
  npmAccess: NpmAccess.PUBLIC,
  peerDeps: [
    'projen',
    'constructs',
    'jsii'
  ],
  // deps: [],                /* Runtime dependencies of this module. */
  keywords: [
    'aws',
    'cdk',
    'projen',
    'typescript',
  ],
  description: 'Projen template for creating a CDK project that uses codepipeline and Github for deployment', /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    'projen',
    'jsii'
  ], /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();