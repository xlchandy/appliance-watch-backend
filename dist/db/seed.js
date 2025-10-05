import { db } from './connection.js';
import { appliances, serviceContacts, maintenanceTasks } from './schema.js';
import { calculateWarrantyExpiry } from '../utils/warrantyCalculator.js';
const sampleAppliances = [
    {
        name: 'Samsung Refrigerator',
        brand: 'Samsung',
        model: 'RF28R7351SR',
        serialNumber: 'SN123456789',
        purchaseDate: new Date('2023-01-15'),
        purchaseLocation: 'Best Buy',
        warrantyMonths: 24,
        category: 'kitchen',
        notes: 'Purchased during holiday sale. Includes ice maker and water dispenser.'
    },
    {
        name: 'LG Washing Machine',
        brand: 'LG',
        model: 'WM4000HWA',
        serialNumber: 'LG987654321',
        purchaseDate: new Date('2021-12-01'),
        purchaseLocation: 'Home Depot',
        warrantyMonths: 36,
        category: 'laundry',
        notes: 'Front-loading washer with steam cleaning feature.'
    },
    {
        name: 'Dyson V15 Detect',
        brand: 'Dyson',
        model: 'V15',
        serialNumber: 'DY555444333',
        purchaseDate: new Date('2024-03-10'),
        purchaseLocation: 'Amazon',
        warrantyMonths: 12,
        category: 'cleaning',
        notes: 'Cordless vacuum with laser dust detection.'
    },
    {
        name: 'Nest Thermostat',
        brand: 'Google',
        model: 'T3007ES',
        serialNumber: 'NT111222333',
        purchaseDate: new Date('2022-06-15'),
        purchaseLocation: 'Google Store',
        warrantyMonths: 24,
        category: 'heating-cooling',
        notes: 'Smart thermostat with learning capabilities.'
    },
    {
        name: 'Sony 65" OLED TV',
        brand: 'Sony',
        model: 'XR65A80J',
        serialNumber: 'SY789123456',
        purchaseDate: new Date('2023-11-20'),
        purchaseLocation: 'Costco',
        warrantyMonths: 12,
        category: 'entertainment',
        notes: '4K OLED TV with HDR support. Extended warranty purchased separately.'
    }
];
const sampleServiceContacts = [
    {
        name: 'Samsung Customer Service',
        phone: '1-800-SAMSUNG',
        email: 'support@samsung.com',
        website: 'https://www.samsung.com/us/support/'
    },
    {
        name: 'LG Support Center',
        phone: '1-800-243-0000',
        email: 'support@lg.com',
        website: 'https://www.lg.com/us/support'
    },
    {
        name: 'Local Appliance Repair',
        phone: '(555) 123-4567',
        email: 'info@localrepair.com',
        website: 'https://www.localappliancerepair.com'
    }
];
export async function seedDatabase() {
    try {
        console.log('🌱 Starting database seed...');
        // Clear existing data
        console.log('🧹 Clearing existing data...');
        await db.delete(maintenanceTasks);
        await db.delete(appliances);
        await db.delete(serviceContacts);
        // Insert service contacts first
        console.log('👥 Inserting service contacts...');
        const insertedContacts = await db.insert(serviceContacts)
            .values(sampleServiceContacts.map(contact => ({
            ...contact,
            createdAt: new Date(),
            updatedAt: new Date()
        })))
            .returning();
        console.log(`✅ Inserted ${insertedContacts.length} service contacts`);
        // Insert appliances
        console.log('🏠 Inserting appliances...');
        const appliancesToInsert = sampleAppliances.map(appliance => ({
            ...appliance,
            warrantyExpiryDate: calculateWarrantyExpiry(appliance.purchaseDate, appliance.warrantyMonths),
            supportContactId: insertedContacts[Math.floor(Math.random() * insertedContacts.length)]?.id,
            createdAt: new Date(),
            updatedAt: new Date()
        }));
        const insertedAppliances = await db.insert(appliances)
            .values(appliancesToInsert)
            .returning();
        console.log(`✅ Inserted ${insertedAppliances.length} appliances`);
        // Insert sample maintenance tasks
        console.log('🔧 Inserting maintenance tasks...');
        const sampleTasks = [
            {
                applianceId: insertedAppliances[0].id, // Samsung Refrigerator
                taskName: 'Replace water filter',
                scheduledDate: new Date('2024-12-01'),
                frequency: 'quarterly',
                providerId: insertedContacts[0].id,
                completed: false
            },
            {
                applianceId: insertedAppliances[1].id, // LG Washing Machine
                taskName: 'Clean lint filter and inspect hoses',
                scheduledDate: new Date('2024-11-15'),
                frequency: 'quarterly',
                completed: true
            },
            {
                applianceId: insertedAppliances[2].id, // Dyson Vacuum
                taskName: 'Clean filters and check battery',
                scheduledDate: new Date('2024-12-15'),
                frequency: 'monthly',
                completed: false
            }
        ];
        const insertedTasks = await db.insert(maintenanceTasks)
            .values(sampleTasks.map(task => ({
            ...task,
            createdAt: new Date(),
            updatedAt: new Date()
        })))
            .returning();
        console.log(`✅ Inserted ${insertedTasks.length} maintenance tasks`);
        console.log('🎉 Database seed completed successfully!');
        console.log(`📊 Summary:`);
        console.log(`   - ${insertedContacts.length} service contacts`);
        console.log(`   - ${insertedAppliances.length} appliances`);
        console.log(`   - ${insertedTasks.length} maintenance tasks`);
    }
    catch (error) {
        console.error('❌ Error seeding database:', error);
        throw error;
    }
}
// Run seed if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    seedDatabase()
        .then(() => {
        console.log('✅ Seed process completed');
        process.exit(0);
    })
        .catch((error) => {
        console.error('❌ Seed process failed:', error);
        process.exit(1);
    });
}
