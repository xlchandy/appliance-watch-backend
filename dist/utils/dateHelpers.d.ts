/**
 * Format a date to ISO string (YYYY-MM-DD format)
 * @param date - The date to format
 * @returns ISO date string
 */
export declare function formatDateToISO(date: Date): string;
/**
 * Parse a date string and return a Date object
 * @param dateString - The date string to parse
 * @returns Date object or null if invalid
 */
export declare function parseDate(dateString: string): Date | null;
/**
 * Check if a date string is valid
 * @param dateString - The date string to validate
 * @returns Boolean indicating if date is valid
 */
export declare function isValidDate(dateString: string): boolean;
/**
 * Get the start of day for a given date
 * @param date - The date
 * @returns Date object at start of day
 */
export declare function getStartOfDay(date: Date): Date;
/**
 * Get the end of day for a given date
 * @param date - The date
 * @returns Date object at end of day
 */
export declare function getEndOfDay(date: Date): Date;
/**
 * Add months to a date
 * @param date - The base date
 * @param months - Number of months to add
 * @returns New date with months added
 */
export declare function addMonths(date: Date, months: number): Date;
/**
 * Calculate difference in days between two dates
 * @param date1 - First date
 * @param date2 - Second date
 * @returns Number of days difference
 */
export declare function daysDifference(date1: Date, date2: Date): number;
/**
 * Format a date for display purposes
 * @param date - The date to format
 * @param locale - The locale to use (default: 'en-US')
 * @returns Formatted date string
 */
export declare function formatDateForDisplay(date: Date, locale?: string): string;
