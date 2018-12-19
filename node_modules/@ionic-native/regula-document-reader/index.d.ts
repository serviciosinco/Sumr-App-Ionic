import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @paid
 * @beta
 * @name Regula Document Reader
 * @description
 * Plugin for reading and validation of identification documents.
 *
 * @usage
 * ```typescript
 * import { RegulaDocumentReader } from '@ionic-native/regula-document-reader';
 *
 * let license; // read regula.license file
 * RegulaDocumentReader.initReader(license); // initialize reader
 * RegulaDocumentReader.scanDocument().then((result) => {
 * 		// read result
 * })
 * ```
 */
export declare class RegulaDocumentReader extends IonicNativePlugin {
    /**
     * Initialize the scanner
     * @param license {any} License data
     */
    initReader(license: any): void;
    /**
     * Run the scanner
     * @return {Promise<string[]>} Returns a promise that resolves when results was got, and fails when not
     */
    scanDocument(): Promise<string[]>;
}
