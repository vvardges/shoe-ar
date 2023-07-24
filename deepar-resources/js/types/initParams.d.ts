/**
 * Parameters for the initialization of {@link DeepAR} object.
 */
export interface DeepARParams {
    /**
     * License key created on <a href="https://developer.deepar.ai/">DeepAR developer portal</a> for your web app.
     */
    licenseKey: string;
    /**
     * Canvas element where DeepAR will render the camera and effects/filters.
     */
    canvas: HTMLCanvasElement;
    /**
     *  The URL of a DeepAR effect file. This effect will be applied when DeepAR is initialized.
     *  This parameter is optional. You can always later switch to a different effect with {@link DeepAR.switchEffect}.
     */
    effect?: string;
    /**
     * Path to the root directory of the DeepAR SDK. This path will be used to locate and download all the additional needed files like ML models and wasm files.
     * By default, this points to the JsDelivr CDN. For example "https://cdn.jsdelivr.net/npm/deepar@5.0.0/".<br>
     *
     * If you want to host the DeepAR SDK yourself set the path to it here. It is recommended to host DeepAR SDK on your own since then you can use compressions like gzip and brotli on the files.
     *
     * > ⚠️ <b>Be sure that the version of DeepAR js file and the root SDK path match!</b>
     *
     * DeepAR SDK can be hosted on any other server, but be sure not to change the directory and file structure of DeepAR SDK when hosing it.<br>
     *
     * To configure usage of non-default ML models, define them in the {@link additionalOptions}.
     */
    rootPath?: string;
    /**
     * Additional DeepAR options.
     */
    additionalOptions?: {
        /**
         * Camera options. DeepAR will use the camera by default.
         */
        cameraConfig?: {
            /**
             * If true, DeepAR will not use camera preview by default and all the other options here are ignored in that case. You can use your own camera/video by calling {@link DeepAR.setVideoElement} or start the camera at any time by calling {@link DeepAR.startCamera}
             */
            disableDefaultCamera?: boolean;
            /**
             * Can be "user" or "environment". User will be a front facing camera on mobile devices, while environment will be the back facing camera. Default is "user".
             */
            facingMode?: string;
            /**
             * Called when the camera permission is asked.
             */
            cameraPermissionAsked?: () => void;
            /**
             * Called when the camera permission is granted.
             */
            cameraPermissionGranted?: () => void;
        };
        /**
         * Provide a hint or hints to DeepAR to optimize the SDK in some scenarios. <br><br>
         * Available hints:
         * <ul>
         *     <li><b>faceModelsPredownload</b> - Will download the face models as soon as possible.</li>
         *     <li><b>segmentationModelsPredownload</b> - Will download the segmentation models as soon as possible. Note - it will not try to initialize segmentation. Segmentation will be lazy loaded when needed.</li>
         *     <li><b>footModelsPredownload</b> - Will download the foot models as soon as possible. Note - it will not try to initialize foot tracking. Foot tracking will be lazy loaded when needed.</li>
         *     <li><b>segmentationInit</b> - Will initialize segmentation as soon as possible. Without this hint segmentation is lazy loaded when some segmentation effect is loaded.</li>
         *     <li><b>footInit</b> - Will initialize foot tracking as soon as possible. Without this hint foot tracking is lazy loaded when some foot tracking effect is loaded.</li>
         * </ul>
         */
        hint?: string | string[];
        /**
         * Face tracking module path and options.
         */
        faceTrackingConfig?: {
            /**
             * Path to the face tracking model. Something like "path/to/deepar/models/face/models-68-extreme.bin".
             */
            modelPath: string;
        };
        /**
         * Segmentation module path and options.
         */
        segmentationConfig?: {
            /**
             * Path to the segmentation model. Something like "path/to/deepar/models/segmentation/segmentation-192x192.bin".
             */
            modelPath: string;
        };
        /**
         * Foot tracking module paths and options.
         */
        footTrackingConfig?: {
            /**
             * Path to the pose libPoseEstimation.wasm file, e.g. "/path/to/deepar/wasm/libPoseEstimation.wasm".
             */
            poseEstimationWasmPath?: string;
            /**
             * Path to the detector model, e.g. "/path/to/deepar/models/foot/foot-detector.bin".
             */
            detectorPath?: string;
            /**
             * Path to the tracker model, e.g. "/path/to/deepar/models/foot/foot-tracker.bin".
             */
            trackerPath?: string;
            /**
             * Path to the foot model object file, e.g. "/path/to/deepar/models/foot/foot-model.obj".
             */
            objPath?: string;
            /**
             * Path to tfjs-backend-wasm.wasm file, e.g. "path/to/deepar/wasm/tfjs-backend-wasm.wasm"
             */
            tfjsBackendWasmPath?: string;
            /**
             * Path to tfjs-backend-wasm-simd.wasm file, e.g. "path/to/deepar/wasm/tfjs-backend-wasm-simd.wasm"
             */
            tfjsBackendWasmSimdPath?: string;
            /**
             * Path to tfjs-backend-wasm-threaded-simd.wasm file, e.g. "path/to/deepar/wasm/tfjs-backend-wasm-threaded-simd.wasm"
             */
            tfjsBackendWasmThreadedSimdPath?: string;
        };
        /**
         * Path to deepar.wasm file. Something like "/path/to/deepar/wasm/deepar.wasm".
         */
        deeparWasmPath?: string;
    };
}
