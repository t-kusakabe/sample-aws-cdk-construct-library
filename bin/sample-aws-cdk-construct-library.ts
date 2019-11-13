#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { SampleAwsCdkConstructLibraryStack } from '../lib/sample-aws-cdk-construct-library-stack';

const app = new cdk.App();
new SampleAwsCdkConstructLibraryStack(app, 'SampleAwsCdkConstructLibraryStack');
