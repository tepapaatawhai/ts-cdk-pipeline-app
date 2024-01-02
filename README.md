# ts-cdk-pipeline-app

### Creating the template

1. Create a project using projen for creating project types We can use Projen itself to create a project for defining project types for Projen… In our project directory, use Projen to create a project with project type jsii.

```
npx projen new jsii
```

2. remove the test in /test  ( recreate later if you want )


3. In the sample index.ts file, we replace its content with:

```
export * from './ts-cdk-pipeline-app';
```

4. Create a new file /src/ts-cdk-pipeline-app.   

a