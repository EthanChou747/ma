//% weight=0 color=#222200 icon="\u266C" block="MATHs"
namespace maths {
    /**
    * 計算長方形面積，並回傳
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=8 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width:number): number {
        return length*width;
    }
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=8 weight=1
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length*width);
    }

    /**
    * 計算三角形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfTriangle" block="show area of triangle bottom %bottom|height %height"
    //% blockGap=10 weight=2
    export function ledOfTriangle(bottom: number, height:number): void {
        basic.showNumber(bottom * height / 2);
    }






}
