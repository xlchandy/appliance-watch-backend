import { Request, Response, NextFunction } from 'express';
export declare class ApplianceController {
    getAppliances: (req: Request, res: Response, next: NextFunction) => void;
    getApplianceStats: (req: Request, res: Response, next: NextFunction) => void;
    getApplianceById: (req: Request, res: Response, next: NextFunction) => void;
    createAppliance: (req: Request, res: Response, next: NextFunction) => void;
    updateAppliance: (req: Request, res: Response, next: NextFunction) => void;
    deleteAppliance: (req: Request, res: Response, next: NextFunction) => void;
}
