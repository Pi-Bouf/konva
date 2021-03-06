import { Shape } from '../Shape';
import { GetSet } from '../types';
export declare class RegularPolygon extends Shape {
    _sceneFunc(context: any): void;
    getWidth(): number;
    getHeight(): number;
    setWidth(width: any): void;
    setHeight(height: any): void;
    radius: GetSet<number, this>;
    sides: GetSet<number, this>;
}
