import {NodejsFunction as OG, NodejsFunctionProps} from '@aws-cdk/aws-lambda-nodejs';
import {Construct} from "@aws-cdk/core";

export class NodejsFunction extends OG {

    constructor(scope: Construct, id: string, props: NodejsFunctionProps) {
        super(scope, id, {...props, environment: {...props.environment, AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1"}});
    }
}
