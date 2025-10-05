import { z } from 'zod';
export declare const createApplianceSchema: z.ZodObject<{
    name: z.ZodString;
    brand: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodString>;
    serialNumber: z.ZodOptional<z.ZodString>;
    purchaseDate: z.ZodString;
    purchaseLocation: z.ZodOptional<z.ZodString>;
    warrantyMonths: z.ZodNumber;
    supportContactId: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodEnum<["kitchen", "laundry", "heating-cooling", "entertainment", "cleaning", "other"]>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    purchaseDate: string;
    warrantyMonths: number;
    brand?: string | undefined;
    model?: string | undefined;
    notes?: string | undefined;
    category?: "kitchen" | "laundry" | "heating-cooling" | "entertainment" | "cleaning" | "other" | undefined;
    serialNumber?: string | undefined;
    purchaseLocation?: string | undefined;
    supportContactId?: string | undefined;
}, {
    name: string;
    purchaseDate: string;
    warrantyMonths: number;
    brand?: string | undefined;
    model?: string | undefined;
    notes?: string | undefined;
    category?: "kitchen" | "laundry" | "heating-cooling" | "entertainment" | "cleaning" | "other" | undefined;
    serialNumber?: string | undefined;
    purchaseLocation?: string | undefined;
    supportContactId?: string | undefined;
}>;
export declare const updateApplianceSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    brand: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    model: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    serialNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    purchaseDate: z.ZodOptional<z.ZodString>;
    purchaseLocation: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    warrantyMonths: z.ZodOptional<z.ZodNumber>;
    supportContactId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    category: z.ZodOptional<z.ZodOptional<z.ZodEnum<["kitchen", "laundry", "heating-cooling", "entertainment", "cleaning", "other"]>>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    brand?: string | undefined;
    model?: string | undefined;
    notes?: string | undefined;
    category?: "kitchen" | "laundry" | "heating-cooling" | "entertainment" | "cleaning" | "other" | undefined;
    serialNumber?: string | undefined;
    purchaseDate?: string | undefined;
    purchaseLocation?: string | undefined;
    warrantyMonths?: number | undefined;
    supportContactId?: string | undefined;
}, {
    name?: string | undefined;
    brand?: string | undefined;
    model?: string | undefined;
    notes?: string | undefined;
    category?: "kitchen" | "laundry" | "heating-cooling" | "entertainment" | "cleaning" | "other" | undefined;
    serialNumber?: string | undefined;
    purchaseDate?: string | undefined;
    purchaseLocation?: string | undefined;
    warrantyMonths?: number | undefined;
    supportContactId?: string | undefined;
}>;
export declare const applianceParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const applianceQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["active", "expiring", "expired", "all"]>>;
    category: z.ZodOptional<z.ZodEnum<["kitchen", "laundry", "heating-cooling", "entertainment", "cleaning", "other"]>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    offset: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    sortBy: z.ZodDefault<z.ZodOptional<z.ZodEnum<["name", "purchaseDate", "warrantyExpiryDate", "createdAt"]>>>;
    sortOrder: z.ZodDefault<z.ZodOptional<z.ZodEnum<["asc", "desc"]>>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    offset: number;
    sortBy: "name" | "purchaseDate" | "warrantyExpiryDate" | "createdAt";
    sortOrder: "asc" | "desc";
    category?: "kitchen" | "laundry" | "heating-cooling" | "entertainment" | "cleaning" | "other" | undefined;
    status?: "active" | "expiring" | "expired" | "all" | undefined;
    search?: string | undefined;
}, {
    category?: "kitchen" | "laundry" | "heating-cooling" | "entertainment" | "cleaning" | "other" | undefined;
    status?: "active" | "expiring" | "expired" | "all" | undefined;
    search?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    sortBy?: "name" | "purchaseDate" | "warrantyExpiryDate" | "createdAt" | undefined;
    sortOrder?: "asc" | "desc" | undefined;
}>;
export declare const createServiceContactSchema: z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    phone?: string | undefined;
    email?: string | undefined;
    website?: string | undefined;
}, {
    name: string;
    phone?: string | undefined;
    email?: string | undefined;
    website?: string | undefined;
}>;
export declare const updateServiceContactSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    email: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    website: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    website?: string | undefined;
}, {
    name?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    website?: string | undefined;
}>;
export declare const serviceContactParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const createMaintenanceTaskSchema: z.ZodObject<{
    applianceId: z.ZodString;
    taskName: z.ZodString;
    scheduledDate: z.ZodString;
    frequency: z.ZodEnum<["one-time", "monthly", "quarterly", "yearly"]>;
    providerId: z.ZodOptional<z.ZodString>;
    completed: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    frequency: "one-time" | "monthly" | "quarterly" | "yearly";
    completed: boolean;
    applianceId: string;
    taskName: string;
    scheduledDate: string;
    providerId?: string | undefined;
}, {
    frequency: "one-time" | "monthly" | "quarterly" | "yearly";
    applianceId: string;
    taskName: string;
    scheduledDate: string;
    completed?: boolean | undefined;
    providerId?: string | undefined;
}>;
export declare const updateMaintenanceTaskSchema: z.ZodObject<{
    applianceId: z.ZodOptional<z.ZodString>;
    taskName: z.ZodOptional<z.ZodString>;
    scheduledDate: z.ZodOptional<z.ZodString>;
    frequency: z.ZodOptional<z.ZodEnum<["one-time", "monthly", "quarterly", "yearly"]>>;
    providerId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    completed: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
}, "strip", z.ZodTypeAny, {
    frequency?: "one-time" | "monthly" | "quarterly" | "yearly" | undefined;
    completed?: boolean | undefined;
    applianceId?: string | undefined;
    taskName?: string | undefined;
    scheduledDate?: string | undefined;
    providerId?: string | undefined;
}, {
    frequency?: "one-time" | "monthly" | "quarterly" | "yearly" | undefined;
    completed?: boolean | undefined;
    applianceId?: string | undefined;
    taskName?: string | undefined;
    scheduledDate?: string | undefined;
    providerId?: string | undefined;
}>;
export declare const maintenanceTaskParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const maintenanceTaskQuerySchema: z.ZodObject<{
    applianceId: z.ZodOptional<z.ZodString>;
    completed: z.ZodOptional<z.ZodBoolean>;
    frequency: z.ZodOptional<z.ZodEnum<["one-time", "monthly", "quarterly", "yearly"]>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    offset: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    offset: number;
    frequency?: "one-time" | "monthly" | "quarterly" | "yearly" | undefined;
    completed?: boolean | undefined;
    applianceId?: string | undefined;
}, {
    frequency?: "one-time" | "monthly" | "quarterly" | "yearly" | undefined;
    completed?: boolean | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    applianceId?: string | undefined;
}>;
export declare const validateRequest: <T>(schema: z.ZodSchema<T>) => (data: unknown) => T;
