import { Shape } from '../Shape';
import { GetSet } from '../types';
export declare class Star extends Shape {
    _sceneFunc(context: any): void;
    getWidth(): number;
    getHeight(): number;
    setWidth(width: any): void;
    setHeight(height: any): void;
    outerRadius: GetSet<number, this>;
    innerRadius: GetSet<number, this>;
    numPoints: GetSet<number, this>;
}
