import {
  awscdk,
  SampleFile,
} from 'projen';
import { Environments } from './generateenvironments';
import { Main } from './generatemain';


export interface GitHubRepo {
  readonly repo: string;
  readonly branch: string;
  readonly codestarArn: string;
}

export interface CDKPipelineAppOptions extends awscdk.AwsCdkTypeScriptAppOptions {
  /**
   * If set to true, some default values are modified compared to the settings for AwsCdkTypeScriptApp
   * Specifically, the following default values are changed:
   * - licensed is false by default
   * - githubOptions.mergify is false by default
   * @default The default is true.
   */
  readonly closedSource?: boolean;
  readonly repo: GitHubRepo;
}

/**
 * CDK code pipeline Delivered Project
 *
 * @pjid cdk-pipeline-app
 */
export class CDKPipelineApp extends awscdk.AwsCdkTypeScriptApp {
  constructor(options: CDKPipelineAppOptions) {
    super({
      licensed: options.closedSource === undefined ? false : !options.closedSource,
      githubOptions: {
        ...options.githubOptions,
        mergify: options.closedSource === undefined ? false : !options.closedSource,
      },
      ...options,
    });

    new Environments(this, './src/pipeline/environments.ts');

    new Main(this, './src/main.ts', {
      repo: options.repo.repo,
      branch: options.repo.branch,
      codestarArn: options.repo.codestarArn,
    });

    new SampleFile(this, './src/exampleStack/exampleStack.ts', {
      sourcePath: './templatefiles/exampleStack.template.ts',
    });

    new SampleFile(this, './src/pipeline/pipeline.ts', {
      sourcePath: './templatefiles/pipeline.template.ts',
    });
  }
}