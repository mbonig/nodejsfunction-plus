import {NodejsFunction} from "../lib/index";
import {App, Stack} from "@aws-cdk/core";
import {NodejsFunction as OG} from '@aws-cdk/aws-lambda-nodejs';
import '@aws-cdk/assert/jest';

test('Is still a Function', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');

    const thing = new NodejsFunction(stack, 'test-handler', {entry: './test/index.test-handler.ts'});
    expect(thing).toBeInstanceOf(OG)
});

test('Environment variable is set', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');

    const thing = new NodejsFunction(stack, 'test-handler', {entry: './test/index.test-handler.ts'});
    // @ts-ignore
    expect(thing.environment["AWS_NODEJS_CONNECTION_REUSE_ENABLED"]).toBe("1");
});
