import EventEmitter from './EventEmitter';

/**
 * Define the EventJS library.
 *
 * @type {object}
 */
let EventJS = {
    version: '1.0.0'
};

// Register modules.
EventJS.EventEmitter = EventEmitter;

// Export EventJS library.
export default EventJS;