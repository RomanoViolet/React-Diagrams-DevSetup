/* eslint-disable require-jsdoc */
// Comment

import { NodeModel, DefaultPortModel } from '@projectstorm/react-diagrams';
import {
  BaseModelOptions,
  DeserializeEvent
} from '@projectstorm/react-canvas-core';

export interface TSCustomNodeModelOptions extends BaseModelOptions {
  color?: string;
  width?: number;
}

export class TSCustomNodeModel extends NodeModel {
  color: string;
  width: number;

  constructor(options: TSCustomNodeModelOptions = {}) {
    super({
      ...options,
      type: 'ts-custom-node'
    });
    this.color = options.color || 'red';
    this.width = options.width;

    // setup an in and out port
    this.addPort(
      new DefaultPortModel({
        in: true,
        name: 'in'
      })
    );
    this.addPort(
      new DefaultPortModel({
        in: false,
        name: 'out'
      })
    );
    this.updateDimensions({ width: this.width, height: this.width });
  }

  serialize() {
    return {
      ...super.serialize(),
      color: this.color
    };
  }

  deserialize(event: DeserializeEvent<this>): void {
    super.deserialize(event);
    this.color = event.data.color;
  }
}
