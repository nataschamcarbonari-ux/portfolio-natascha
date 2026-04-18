import React from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import defaultFlow from '../data/opportunityFlow';

interface Props {
  nodes?: any[];
  edges?: any[];
  readOnly?: boolean;
}

const OpportunityFlow: React.FC<Props> = ({ nodes, edges, readOnly = true }) => {
  const rn = nodes ?? defaultFlow.nodes;
  const re = edges ?? defaultFlow.edges;

  return (
    <div style={{ height: 360, width: '100%' }}>
      <ReactFlow nodes={rn} edges={re} fitView nodesDraggable={!readOnly} nodesConnectable={!readOnly}>
        <MiniMap />
        <Controls />
        <Background gap={16} />
      </ReactFlow>
    </div>
  );
};

export default OpportunityFlow;
