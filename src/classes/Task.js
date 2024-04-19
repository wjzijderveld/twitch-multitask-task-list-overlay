/**
 * @class Task
 * @property {string} description - The description of the task.
 * @property {boolean} completionStatus - Indicates whether the task is complete or not.
 * @method validateDescription - Validate the description of the task.
 * @method getDescription - Get the description of the task.
 * @method setDescription - Set the description of the task.
 * @method isComplete - Get the completion status of the task.
 * @method setCompletionStatus - Set the status of the task.
 */
export default class Task {
	/**
	 * @constructor
	 * @param {string} description - The description of the task.
	 */
	constructor(description) {
		this.description = this.validateDescription(description);
		this.completionStatus = false;
	}

	/**
	 * Validate the description of the task.
	 * @param {string} description - The description of the task.
	 * @returns {string} The description of the task.
	 * @throws {Error} If the description is invalid.
	 */
	validateDescription(description) {
		if (typeof description !== "string") {
			throw new Error(`Task description must be of type string`);
		}
		description = description.trim();
		if (description.length === 0) {
			throw new Error("Task description invalid");
		}
		return description;
	}

	/**
	 * Get the description of the task.
	 * @returns {string} Description of the task.
	 */
	getDescription() {
		return this.description;
	}

	/**
	 * Set the description of the task.
	 * @param {string} description - The new description of the task.
	 * @return void
	 */
	setDescription(description) {
		this.description = this.validateDescription(description);
	}

	/**
	 * Get the status of the task.
	 * @returns {boolean} The status of the task.
	 */
	isComplete() {
		return this.completionStatus;
	}

	/**
	 * Set the status of the task.
	 * @param {boolean} status - The new status of the task.
	 */
	setCompletionStatus(status) {
		if (typeof status !== "boolean") {
			throw new Error("Completion status must be of type boolean");
		}
		this.completionStatus = status;
	}
}