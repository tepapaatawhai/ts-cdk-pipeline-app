import { CDKPipelineApp } from '../src';

describe('Check settings specific for project type', () => {
  test('Mergify is not enabled for closedSource default', () => {
    const project = new CDKPipelineApp({
      cdkVersion: '2.117.0',
      defaultReleaseBranch: 'main',
      name: 'myproject',
      repo: {
        repo: 'blah/blah',
        branch: 'main',
        codestarArn: 'arn:xxxx',
      },
      closedSource: true,
    });

    const hasNoMergifyConfig = project.github && !project.github?.mergify;
    expect(hasNoMergifyConfig).toBeTruthy();
  });
});