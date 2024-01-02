import {
  awscdk,
  SampleFile,
} from 'projen';
import { Environments } from './generateenvironments';
import { Main } from './generatemain';


export interface CDKPipelineAppOptions extends awscdk.AwsCdkTypeScriptAppOptions {
  /**
   * If set to true, some default values are modified compared to the settings for AwsCdkTypeScriptApp
   * Specifically, the following default values are changed:
   * - licensed is false by default
   * - githubOptions.mergify is false by default
   * @default The default is true.
   */
  readonly closedSource?: boolean;
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
      repo: 'thing/thing2',
      branch: 'main',
      codestarArn: 'arn:xxx',
    });

    new SampleFile(this, './src/exampleStack/exampleStack.ts', {
      sourcePath: './templatefiles/exampleStack.template.ts',
    });

    new SampleFile(this, './src/pipeline/pipeline.ts', {
      sourcePath: './templatefiles/pipeline.template.ts',
    });
  }
}