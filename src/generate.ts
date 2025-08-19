import Color from "./color.js"
import names from "./names.json"
import { writeFile } from "fs/promises";

const saturation = 0.8;
const lightness = 0.7;

const asciiSymbol = '■';
const monthAbbreviations = [ 
    "jan", "feb", "mar", 
    "apr", "may", "jun", 
    "jul", "aug", "sep", 
    "oct", "nov", "dec"
];


function clampf(x: number, min: number, max: number): number {
  return x < min ? min : x > max ? max : x;
}


//  encode Oklab (float) into 12:10:10 packed uint32
export function packOklab(
  L: number,
  a: number,
  b: number
): number {

  L = clampf(L, 0.0, 1.0);
  a = clampf(a, -0.5, 0.5);
  b = clampf(b, -0.5, 0.5);

  const Lbits = Math.round(L * 4095.0); // 12 bits
  const abits = Math.round((a + 0.5) * 1023.0); // 10 bits
  const bbits = Math.round((b + 0.5) * 1023.0); // 10 bits

  const packed = (Lbits << 20) | (abits << 10) | bbits;
  return packed >>> 0; // ensure unsigned

}


//  decode packed 12:10:10 Oklab into float L, a, b
export function unpackOklab( 
    packed: number 
): { L: number; a: number; b: number } {

  const Lbits = (packed >>> 20) & 0xfff; // 12 bits
  const abits = (packed >>> 10) & 0x3ff; // 10 bits
  const bbits = packed & 0x3ff; // 10 bits

  const L = Lbits / 4095.0;
  const a = abits / 1023.0 - 0.5;
  const b = bbits / 1023.0 - 0.5;

  return { L, a, b };

}


//  jan := month == 1
export function juniro( month: number ) {
    
    const OFFSET = 120;
    const COUNT = 12;
    const STEP = 360 / COUNT;

    const hue = ( 360 - ( month * STEP + OFFSET ) % 360 ) % 360;
    const color = new Color( "okhsl", [ hue, saturation, lightness ] );
    return color;

}


function toSnakeCase(str) {
  return str
    .replace(/[\s-]+/g, '_')    //  replace spaces and hyphens with underscores
    .replace(/^_/, '')          //  remove leading underscore
    .toLowerCase();             //  convert to lowercase
}


function generateData() {

    let data = [];

    for ( const infos of names ) {
        
        const color = juniro( infos.month );
        const hex : string = color.to( "srgb" ).toString( { format: "hex" } );
        const decimal = parseInt( hex.slice( 1, -1 ), 16 );
        const srgb8 = color.srgb.map( ( c: number ) => Math.round( Math.max( 0, Math.min( 1, c ) ) * 255 ) );
        const [ L, a, b ] = color.oklab;
        const packedOklab = packOklab( L, a, b );

        const abbreviation = monthAbbreviations[ infos.month - 1 ];
        const id = `${abbreviation}_${toSnakeCase( infos.name )}`;

        const entry = {
            ...infos,
            ascii: `\u001b[38;2;${srgb8[0]};${srgb8[1]};${srgb8[2]}m${asciiSymbol}\u001b[39m`, 
            html: `<div style="display: inline-block; width: 1em; height: 1em; background-color: ${hex};"></div>`,
            abbreviation,
            id,
            hex, 
            decimal, 
            srgb8,
            okhsl: color.coords, 
            srgb: color.srgb, 
            lrgb: color.srgb_linear, 
            oklab: color.oklab,
            labpack: `0x${packedOklab.toString( 16 ).padStart( 8, '0' )}`,
        };

        data.push( entry );

    }

    return data;

}


async function main() {
    
    const data = generateData();
    let body = {
        description: "auto-generated juniro color palette source of truth",
        createdAt: new Date().toISOString(),
        data
    };
    
    try {
        await writeFile( "data.json", JSON.stringify( body, undefined, 2 ), "utf8" );
        console.log( "data written successfully" );
    } catch ( err ) {
        console.error( "error writing data:", err );
    }

}

main();