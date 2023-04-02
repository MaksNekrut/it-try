declare module '*.json' {
    const value: any;
    export default value;
}

declare module "*.svg" {
    import React = require("react");
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}