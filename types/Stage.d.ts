import { Collection } from './Util';
import { Container } from './Container';
import { SceneCanvas, HitCanvas } from './Canvas';
import { GetSet, Vector2d } from './types';
import { Shape } from './Shape';
import { BaseLayer } from './BaseLayer';
export declare const stages: Stage[];
export declare class Stage extends Container {
    content: HTMLDivElement;
    pointerPos: Vector2d | null;
    bufferCanvas: SceneCanvas;
    bufferHitCanvas: HitCanvas;
    targetShape: Shape;
    clickStartShape: Shape;
    clickEndShape: Shape;
    dblTimeout: any;
    tapStartShape: Shape;
    children: Collection<BaseLayer>;
    constructor(config: any);
    _validateAdd(child: any): void;
    _checkVisibility(): void;
    setContainer(container: any): this;
    shouldDrawHit(): boolean;
    clear(): this;
    clone(obj: any): any;
    destroy(): this;
    getPointerPosition(): Vector2d;
    getStage(): this;
    getContent(): HTMLDivElement;
    _toKonvaCanvas(config: any): SceneCanvas;
    getIntersection(pos: Vector2d, selector?: string): any;
    _resizeDOM(): void;
    add(layer: any): this;
    getParent(): any;
    getLayer(): any;
    getLayers(): Collection<import("./Node").Node>;
    _bindContentEvents(): void;
    _mouseover(evt: any): void;
    _mouseout(evt: any): void;
    _mousemove(evt: any): void;
    _mousedown(evt: any): void;
    _mouseup(evt: any): void;
    _contextmenu(evt: any): void;
    _touchstart(evt: any): void;
    _touchend(evt: any): void;
    _touchmove(evt: any): void;
    _wheel(evt: any): void;
    setPointersPositions(evt: any): void;
    _setPointerPosition(evt: any): void;
    _getContentPosition(): {
        top: number;
        left: number;
    };
    _buildDOM(): void;
    cache(): this;
    clearCache(): this;
    batchDraw(): this;
    container: GetSet<HTMLDivElement, this>;
}
