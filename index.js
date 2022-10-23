'use strict';

var progress = require('cli-progress'),
    ProgressNoTTYReporter;

/**
 * @param {Object} emitter - A run object with event handler specification methods.
 * @param {Function} newman.on - An event setter method that provides hooks for reporting collection run progress.
 * @param {Object} reporterOptions - A set of reporter specific run options.
 * @param {Object} collectionRunOptions - A set of generic collection run options.
 * @returns {*}
 */
ProgressNoTTYReporter = function (emitter, reporterOptions, collectionRunOptions) {
    var bar = new progress.Bar({
        noTTYOutput: true,
        notTTYSchedule: 30000 // 30 seconds
    });

    emitter.on('start', function (err, o) {
        if (err) { return; }

        bar.start(o.cursor.length * o.cursor.cycles, 0);
    });

    emitter.on('item', function () {
        bar.increment();
    });

    emitter.on('done', function () {
        bar.stop();
    });
};

ProgressNoTTYReporter.prototype.dominant = true;
module.exports = ProgressNoTTYReporter;
