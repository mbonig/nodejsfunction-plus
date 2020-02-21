import {NodejsFunction} from "./index";
import {App, Stack} from "@aws-cdk/core";
import {NodejsFunction as OG} from '@aws-cdk/aws-lambda-nodejs';
import '@aws-cdk/assert/jest';

test('Is still a Function', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');

    const thing = new NodejsFunction(stack, 'testing', {});

    expect(thing).toBeInstanceOf(OG)

});
