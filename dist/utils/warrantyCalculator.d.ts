import { WarrantyStatus } from '../types/index.js';
export interface WarrantyStatusResult {
    status: WarrantyStatus;
    daysUntilExpiry: number;
}
/**
 * Calculate warranty status based on expiry date
 * @param expiryDate - The warranty expiry date
 * @returns Object containing warranty status and days until expiry
 */
export declare function calculateWarrantyStatus(expiryDate: Date | string): WarrantyStatusResult;
/**
 * Calculate warranty expiry date from purchase date and warranty months
 * @param purchaseDate - The purchase date (ISO string or Date)
 * @param warrantyMonths - Number of warranty months
 * @returns The warranty expiry date
 */
export declare function calculateWarrantyExpiry(purchaseDate: string | Date, warrantyMonths: number): Date;
/**
 * Check if a warranty is expiring within a given number of days
 * @param expiryDate - The warranty expiry date
 * @param days - Number of days to check (default: 30)
 * @returns Boolean indicating if warranty is expiring soon
 */
export declare function isWarrantyExpiringSoon(expiryDate: Date | string, days?: number): boolean;
/**
 * Format warranty status for display
 * @param status - The warranty status
 * @returns Formatted status string
 */
export declare function formatWarrantyStatus(status: WarrantyStatus): string;
/**
 * Get warranty status color for UI purposes
 * @param status - The warranty status
 * @returns Color code or class name
 */
export declare function getWarrantyStatusColor(status: WarrantyStatus): string;
