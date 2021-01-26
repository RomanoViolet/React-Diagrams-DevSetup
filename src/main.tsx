import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './main.css';
import createEngine, { DefaultLinkModel, DiagramModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { TSCustomNodeFactory } from './custom-node-ts/TSCustomNodeFactory';
import { TSCustomNodeModel } from './custom-node-ts/TSCustomNodeModel';
import { BodyWidget } from './BodyWidget';

// create an instance of the engine
const engine = createEngine();

// register the two engines
engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());

// create a diagram model
const model = new DiagramModel();

// ####################################################
// now create two nodes of each type, and connect them

const node1 = new TSCustomNodeModel({ color: 'rgb(0,255,0)', width: 240 });
node1.setPosition(50, 50);
node1.updateDimensions({ width: 240, height: 48 });

const node2 = new TSCustomNodeModel({ color: 'rgb(0,192,255)', width: 480 });
node2.setPosition(200, 50);

const link1 = new DefaultLinkModel();
link1.setSourcePort(node1.getPort('out'));
link1.setTargetPort(node2.getPort('in'));

// Custom Node
const node3 = new DefaultNodeModel("Node 3", "rgb(0,192,255)");
let port3 = node3.addOutPort("Out");
node3.setPosition(100, 100);
var node4 = new DefaultNodeModel("Node 4", "rgb(192,255,0)");
let port4 = node4.addInPort("In");
node4.setPosition(400, 100);
const link3 = port3.link(port4);

model.addAll(node1, node2, node3, node4, link1, link3);

// ####################################################

// install the model into the engine
engine.setModel(model);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<BodyWidget engine={engine} />, document.querySelector('#application'));
});
