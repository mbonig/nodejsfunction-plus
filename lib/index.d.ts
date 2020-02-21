import { NodejsFunction as OG, NodejsFunctionProps } from '@aws-cdk/aws-lambda-nodejs';
import { Construct } from "@aws-cdk/core";
export declare class NodejsFunction extends OG {
    constructor(scope: Construct, id: string, props: NodejsFunctionProps);
}
